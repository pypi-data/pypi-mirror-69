from pallets_sphinx_themes import get_version

# Project --------------------------------------------------------------

project = "SQLAlchemy-MetaJSON"
copyright = "2018 Moebius Solutions, Inc."
author = "Moebius Solutions, Inc."
release, version = get_version("SQLAlchemy-MetaJSON")

# General --------------------------------------------------------------

master_doc = "index"
extensions = ["sphinx.ext.autodoc", "sphinx.ext.intersphinx", "pallets_sphinx_themes"]
intersphinx_mapping = {"python": ("https://docs.python.org/3/", None)}

# HTML -----------------------------------------------------------------

html_theme = "flask"
html_sidebars = {
    "index": ["searchbox.html"],
    "**": ["localtoc.html", "relations.html", "searchbox.html"],
}
singlehtml_sidebars = {"index": ["localtoc.html"]}
html_title = "{} Documentation ({})".format(project, version)
html_show_sourcelink = False
html_domain_indices = False
html_experimental_html5_writer = True

# LaTeX ----------------------------------------------------------------

latex_documents = [(master_doc, "{}.tex".format(project), html_title, author, "manual")]
