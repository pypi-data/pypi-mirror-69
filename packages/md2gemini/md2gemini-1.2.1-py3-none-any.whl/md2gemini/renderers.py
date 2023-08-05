"""
All the renderers that convert markdown to gemini.
"""

import mistune
from .unitable import UniTable, ArraySizeError

NEWLINE = "\n"  # I would like to set it to \r\n, but that causes issues for bombadillo, see #150 in that repo`
PARAGRAPH_DELIM = "\x02"  # The marker for paragraph start and end, for post processing
LINK_DELIM = "\x03"

class GeminiRenderer(mistune.HTMLRenderer):  # Actually BaseRenderer should be used but this isn't available
    
    #NAME = "gemini"

    def __init__(self, img_tag="[IMG]", indent="  ", ascii_table=False, links="newline", plain=False):
        # Disable all the HTML renderer's messing around:
        super().__init__(escape=False, allow_harmful_protocols=True)

        self.plain = plain
        self.ascii = ascii_table
        if indent is None:
            self.indent = "  "
        else:
            self.indent = indent
        if img_tag is None:
            img_tag = ""
        self.img_tag = " " + img_tag
        # Tables
        self.unitable = None
        self.table_cols_align = []  # List of column alignments: ["l", "r", "c"]
        # Footnote links
        self.links = links
        if self.links in ["paragraph", "at-end"]:
            self.footnotes_enabled = True
        else:
            self.footnotes_enabled = False
        self.footnote_num = 0  # The number of the last footnote is stored here
        self.footnotes = []  # ["link url", ...] - footnotes per paragraph/document stored here


    def _gem_link(self, link, text=None):
        # Links are handled in post processing, these control characters
        # are just used to denote paragraph start and end. They were picked
        # because they will never be typed in normal text editing.

        if text is None:
            return LINK_DELIM + "=> " + link.strip() + LINK_DELIM
        return LINK_DELIM + "=> " + link.strip() + " " + text.strip() + LINK_DELIM

    def _add_footnote(self, link, text):
        self.footnote_num += 1
        self.footnotes.append(link)
        return text + "[" + str(self.footnote_num) + "]"

    def _render_footnotes(self):
        if not self.footnotes_enabled:
            return ""
        if self.footnotes == []:
            return ""

        ret = ""
        length = len(self.footnotes)
        for i, url in enumerate(self.footnotes):
            # Calculate the relative footnote number - there could be five footnotes
            # for this paragraph, but now 10 in total.
            # Example footnote, in a client view:
            # 10: gemini://gus.guru/
            # Actual footnote output:
            # => gemini://gus.guru/ 10: gemini://gus.guru/
            ret += self._gem_link(url, str((self.footnote_num - length) + 1 + i) + ": " + url.strip())
        return ret

    # Inline elements

    def text(self, text):
        return text

    def link(self, link, text=None, title=None):
        # title is ignored because it doesn't apply to Gemini

        if self.links == "off":
            # Don't link, just leave the text as it was written
            if text is None:
                return link
            return text
        if self.footnotes_enabled:
            if text is None or text.strip() == "":
                # Insert the link inline, but with a footnote too
                return self._add_footnote(link, link)
            else:
                return self._add_footnote(link, text)
        
        return self._gem_link(link, text)
    
    def image(self, src, alt="", title=None):
        """Turn images into regular Gemini links."""

        if alt is None:
            alt = ""

        if self.links == "off":
            if alt == "":
                return src
            return alt
        if self.footnotes_enabled:
            return self._add_footnote(src, alt)

        return self._gem_link(src, alt.strip() + self.img_tag)
    
    def emphasis(self, text):
        if self.plain:
            return text
        return "*" + text + "*"
    
    def strong(self, text):
        if self.plain:
            return text
        return "**" + text + "**"
    
    def codespan(self, text):
        if self.plain:
            return text
        return "`" + text + "`"
    
    def linebreak(self):
        #return "<LB>"
        return NEWLINE
    
    def newline(self):        
        #return "<NL>"
        return ""
    
    def inline_html(self, html):
        return html

    # Block level elements

    def paragraph(self, text):
        # Paragraphs are handled in post processing, these control characters
        # are just used to denote paragraph start and end. They were picked
        # because they will never be typed in normal text editing.

        if self.footnotes_enabled and text.count("\n") <= 1 and len(self.footnotes) > 0 and text.rstrip().endswith("["+str(self.footnote_num)+"]"):
            # The whole paragraph is just one line, just the link
            # So there shouldn't be a footnote
            ret = PARAGRAPH_DELIM + \
                self._gem_link(
                    self.footnotes[0],
                    # Remove the footnote part from the text, the [X] at the end
                    text.rstrip()[:-(len(str(self.footnote_num))+2)],
                ) + PARAGRAPH_DELIM
            # Remove footnote from list
            self.footnotes.pop()
            self.footnote_num -= 1
            if self.links == "paragraph":
                self.footnotes = []  # Reset them for the next paragraph
            return ret

        # Process footnotes if "paragraph" was set
        if self.links == "paragraph" and len(self.footnotes) > 0:
            ret = PARAGRAPH_DELIM + text + PARAGRAPH_DELIM*2 + self._render_footnotes() + PARAGRAPH_DELIM
            self.footnotes = []
            return ret

        return PARAGRAPH_DELIM + text + PARAGRAPH_DELIM
    
    def heading(self, text, level):
        return "#" * level + " " + text + NEWLINE*2
    
    def thematic_break(self):
        """80 column split using hyphens."""

        return "-" * 80 + NEWLINE * 2
    
    def block_text(self, text):
        # Idk what this is, it's not defined in the CommonMark spec,
        # and the HTML renderer also just returns text
        return text + NEWLINE
    
    def block_code(self, code, info=None):
        # Gemini doesn't support code block infos, but it doesn't matter
        # Adding them might make this more compatible
        start = "```" + NEWLINE
        if not info is None:
            start = "```" + info + NEWLINE
        return start + code + "```" + NEWLINE
    
    def block_quote(self, text):
        return "> " + text.strip()
    
    def block_html(self, html):
        return self.block_code(html, "html")
    
    def block_error(self, html):
        return self.block_code(html, "html")
    
    def list_item(self, text, level):
        # No modifications, the func below handles that
        return text + NEWLINE

    def list(self, text, ordered, level, start=None):
        """Gemini only defines single-level unordered lists.

        This uses indenting to do sub-levels.
        Ordered list items just use 1. 2. etc, as plain text.
        """
        
        # First level of list means `level = 1`

        if start is None:
            start = 1
        text = text.replace("\r\n", "\n")  # Make sure all newlines are the same type
        items = text.split("\n")
        # Remove possible empty strings
        items = [x for x in items if x != ""]
        ret_items = []

        if ordered:
            # Recreate the ordered list for each item, then return it
            # This just returns a plain text list.
            for i, item in enumerate(items):
                if item.startswith(self.indent):
                    # It's an already processed sub-level item, don't do anything.
                    # This kind of check is needed because mistune passes nested list items
                    # to the renderer multiple times. Once as N-level list, and then once again
                    # as a part of a flattened level 1 list.
                    # This check prevents the item from being processed again when it appears
                    # in that second list.
                    ret_items.append(item)
                else:
                    ret_items.append(self.indent * (level-1) + str(i+start) + ". " + item.strip())

        else:   
            # Return an unordered list using the official Gemini list character: *
            # Indenting is used for sub-levels
            for item in items:
                if item.startswith(self.indent):
                    # See the comment above for why this check is required.
                    ret_items.append(item)
                else:
                    ret_items.append(self.indent * (level-1) + "* " + item.strip())
        
        return NEWLINE.join(ret_items) + NEWLINE * 2

    # Elements that rely on plugins:

    # Tables
    # Most of the funcs just return the text unchanged because the actual text processing
    # is done at the end, using the UniTable class.

    def _init_table(self):
        self.unitable = UniTable()
        if self.ascii:
            self.unitable.set_style("default")
        else:
            self.unitable.set_style("light")

    def table(self, text):
        # Called at the end I think, once all the table elements
        # have been processed
        # Put the table in a preprocessed block
        return "```" + NEWLINE + self.unitable.draw() + NEWLINE + "```" + NEWLINE

    def table_head(self, text):
        self._init_table()
        # The table_cell func splits each column using newlines
        try:
            self.unitable.header(
                text.split("\n")[:-1]
            )
        except ArraySizeError:
            #raise Exception("Malformed table")
            pass
        # Set and clear the alignment data, now that the number of columns should be known
        self.unitable.set_cols_align(self.table_cols_align)
        self.unitable.set_cols_valign(["m"] * len(self.table_cols_align))
        self.table_cols_align = []
        return text
    
    def table_body(self, text):
        return ""

    def table_row(self, text):
        try:
            self.unitable.add_row(
                # The table_cell func splits each column using newlines
                text.split("\n")[:-1]
            )
        except ArraySizeError:
            #raise Exception("Malformed table")
            pass
        self.table_cols_align = []
        # The text processing is done in other funcs
        return text
    
    def table_cell(self, text, align=None, is_head=False):
        if align in ["left", "right", "center"]:
            self.table_cols_align.append(align[0])  # l, r, or c
        else:
            # If align is None or something unknown happened
            self.table_cols_align.append("l")
        return text.strip() + "\n"  # \n is used to separate cells from each other in other funcs

    # Strikethough can't be supported
    # Footnotes aren't supported right now
