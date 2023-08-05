#!/usr/bin/python

"""
Convert a Markdown file to a Microsoft Word XML document.

The source document is a markdown file, the destination is the XML document
inside a clone of the template directory:

    $ python md2word.py sample.md sample/word/document.xml

"""

import re
import logging
import argparse

import mistletoe
import xml.sax.saxutils

from si_wg_docgen.md2word_styles import block_styles, span_styles

# globals
args = None


# start-of-span and end-of-span markers
sos = lambda x: "\2" + x + "\2"
eos = lambda x: "\3" + x + "\3"
unspan_re = re.compile("(\2[a-z]+\2|\3[a-z]+\3)")


def dump(token, indent="    "):
    """Dump out the children of a token, used for debugging."""
    for i, child in enumerate(token.children):
        print(f"{indent}[{i}]: {child!r}")
        if hasattr(child, "content"):
            print(f"{indent}    {child.content!r}")
        if hasattr(child, "children"):
            dump(child, indent + "    ")


class OwlToken(mistletoe.span_token.SpanToken):
    """Span token is used to recognize namespace qualified words."""

    pattern = re.compile(r"\b(\w+)[:](\w+)\b")

    def __init__(self, match):
        self.ontology, self.thing = match.groups()


class DocXRenderer(mistletoe.html_renderer.HTMLRenderer):
    def __init__(self):
        super().__init__(OwlToken)

    def render_owl_token(self, token):
        # bold for now, should turn into a link at some point
        return sos("bold") + self.render_inner(token) + eos("bold")

    def render_strong(self, token):
        return sos("bold") + self.render_inner(token) + eos("bold")

    def render_emphasis(self, token):
        return sos("italics") + self.render_inner(token) + eos("italics")

    def render_link(self, token):
        return self.render_inner(token)

    def render_auto_link(self, token):
        return self.render_inner(token)

    def shred(self, token, escape=False):
        content = self.render_inner(token)

        chunk = ""
        style = "normal"
        results = ""
        for piece in unspan_re.split(content):
            if not piece:
                continue
            if piece.startswith("\2"):
                piece_style = piece[1:-1]
                if chunk:
                    prefix, suffix = span_styles[style]
                    results += prefix + chunk + suffix
                if style != "normal":
                    print("err: overlapping {!r} and {!r}".format(style, piece_style))
                style = piece_style
                chunk = ""
            elif piece.startswith("\3"):
                piece_style = piece[1:-1]
                if chunk:
                    prefix, suffix = span_styles[style]
                    results += prefix + chunk + suffix
                if piece_style != style:
                    print("err: mismatch {!r} and {!r}".format(style, piece_style))
                style = "normal"
                chunk = ""
            else:
                if escape:
                    piece = xml.sax.saxutils.escape(piece)
                chunk += piece
        if chunk:
            prefix, suffix = span_styles[style]
            results += prefix + chunk + suffix

        return results

    def render_heading(self, token):
        prefix, suffix = block_styles["Heading " + str(token.level)]
        return prefix + self.shred(token) + suffix

    def render_quote(self, token):
        prefix, suffix = block_styles["Body Text Indent"]
        return prefix + self.shred(token.children[0]) + suffix

    def render_paragraph(self, token):
        prefix, suffix = block_styles["Normal"]
        return prefix + self.shred(token) + suffix

    def render_block_code(self, token):
        prefix, suffix = block_styles["Source Code"]
        return prefix + self.shred(token, escape=True) + suffix

    def render_table(self, token):
        table_prefix, table_suffix = block_styles["Table"]
        inner = ""
        if hasattr(token, "header"):
            inner += self.render_table_row(token.header, True)
        for row in token.children:
            inner += self.render_table_row(row, False)

        return table_prefix + inner + table_suffix

    def render_table_row(self, token, is_header):
        style = "thead" if is_header else "tbody"
        row_prefix, row_suffix = span_styles[style]

        inner = ""
        for i, cell in enumerate(token.children):
            column_number = i + 1
            cell_prefix, cell_suffix = span_styles[style + f"_cell_{column_number}"]
            inner += (
                cell_prefix
                + self.render_table_cell(cell, is_header, column_number)
                + cell_suffix
            )
        return row_prefix + inner + row_suffix

    def render_table_cell(self, token, in_header, column_number):
        style = ("th" if in_header else "td") + f"{column_number}"
        prefix, suffix = span_styles[style]
        inner = self.render_inner(token)

        return prefix + inner + suffix


def main(markdown_text, output_xml_file):
    # generate the docx file
    with open(output_xml_file, "w") as f:
        f.write("""<?xml version="1.0" ?>""")

        doc_prefix, doc_suffix = block_styles["Document"]
        f.write(doc_prefix)
        f.write(mistletoe.markdown(markdown_text, DocXRenderer))
        f.write(doc_suffix)



if __name__ == '__main__':
    # build a parser for the command line arguments
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )

    # name of the markdown file to parse
    parser.add_argument(
        "md", type=str, help="input markdown file",
    )

    # name of the XML document to create
    parser.add_argument(
        "xml", type=str, help="output xml file",
    )

    # name of the markdown file to parse
    parser.add_argument(
        "--debug", action="store_true", help="turn on debugging",
    )

    # parse the command line arguments
    args = parser.parse_args()

    # check logging
    if args.debug:
        logging.basicConfig(level=logging.DEBUG)

    # load in the markdown file
    with open(args.md, "r") as f:
        markdown_text = f.read()
    main(markdown_text, args.xml)
