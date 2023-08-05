"""Chord - Python wrapper around d3-chord

This package enables the generation of Chord diagrams. They can be saved 
directly to HTML files or displayed in a Jupyter Notebook output cell.

Copyright 2020, Dr. Shahin Rostami
http://shahinrostami.com
https://github.com/shahinrostami/chord
https://pypi.org/project/chord/
"""

from mako.template import Template
import mako.runtime
import urllib.request
import uuid

# undefined template values default to empty strings
mako.runtime.UNDEFINED = ""


class Chord(object):
    template_url = "https://shahinrostami.com/assets/chord/chord.tmpl"

    template = urllib.request.urlopen(template_url).read()

    def __init__(
        self,
        matrix,
        names,
        colors="d3.schemeSet1",
        opacity=0.8,
        padding=0.01,
        width=700,
        label_color="#454545",
        wrap_labels=True,
        margin=0,
        credit=False,
        font_size="16px",
        font_size_large="20px",
    ):
        self.html = Chord.template
        self.matrix = matrix
        self.names = names
        self.colors = colors
        self.opacity = opacity
        self.padding = padding
        self.width = width
        self.label_color = label_color
        self.wrap_labels = wrap_labels
        self.margin = margin
        self.credit = credit
        self.font_size = font_size
        self.font_size_large = font_size_large

    def __str__(self):
        return self.html

    def render_html(self):
        """Generates the HTML using the Mako template."""
        self.tag_id = "chart-" + str(uuid.uuid4())[:8]
        self.html = Template(Chord.template).render(
            colors=self.colors,
            opacity=self.opacity,
            matrix=self.matrix,
            names=self.names,
            padding=self.padding,
            width=self.width,
            label_color=self.label_color,
            tag_id=self.tag_id,
            wrap_labels="true" if self.wrap_labels else "false",
            credit="true" if self.credit else "false",
            margin=self.margin,
            font_size=self.font_size,
            font_size_large=self.font_size_large,
        )

    def to_html(self, filename="out.html"):
        """Outputs the generated HTML to a HTML file. """
        self.render_html()
        file = open(filename, "w")
        file.write(self.html)
        file.close()

    def show(self):
        """Outputs the generated HTML to a Jupyter Lab output cell."""
        self.render_html()
        from IPython.display import display, HTML

        display(HTML(self.html))
