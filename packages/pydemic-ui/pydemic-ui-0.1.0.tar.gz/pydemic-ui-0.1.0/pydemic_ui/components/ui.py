__package__ = "pydemic_ui.ui"

from ..components import asset, twin_component, html
from ..i18n import _
import streamlit as st


@twin_component()
def css(where=st):
    """
    Inject Pydemic CSS. Should always be the first command in script.
    """
    return html(asset("custom.html"), where=where)


@twin_component()
def logo(title=_("COVID-19"), subtitle=_("Epidemic Calculator"), where=st):
    st = f"""
<div id="sidebar-icon">
<img src="data:image/svg+xml;base64,
PD94bWwgdmVyc2lvbj0iMS4wIiA
/PjxzdmcgaWQ9Il94MzFfLW91dGxpbmUtZXhwYW5kIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzQTQyNDk7fQo8L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Ni4yLDI2LjZjLTAuOS0xLjMtMi40LTAuOC0zLjMtMC42Yy0wLjIsMC4xLTAuNCwwLjEtMC42LDAuMmMwLTAuMiwwLjEtMC40LDAuMi0wLjZjMC4zLTEsMC44LTIuNC0wLjUtMy4zICBjLTEuMi0wLjgtMi40LDAuMS0zLjIsMC43Yy0wLjEsMC4xLTAuMywwLjItMC40LDAuM2MwLTAuMiwwLTAuNCwwLTAuNWMwLTAuOS0wLjEtMi41LTEuNi0yLjljLTEuNC0wLjMtMi4yLDEtMi44LDEuOCAgYy0wLjEsMC4xLTAuMiwwLjMtMC4zLDAuNGMtMC4xLTAuMi0wLjEtMC4zLTAuMi0wLjVjLTAuNC0wLjktMC45LTIuMy0yLjUtMi4yYy0xLjUsMC4yLTEuOCwxLjctMiwyLjZjMCwwLjEtMC4xLDAuMy0wLjEsMC41ICBjLTAuMS0wLjEtMC4yLTAuMy0wLjMtMC40Yy0wLjctMC44LTEuNy0xLjktMy4xLTEuM2MtMS4zLDAuNy0xLjEsMi4yLTEsMy4yYzAsMC4yLDAuMSwwLjQsMC4xLDAuNmMtMC4yLTAuMS0wLjMtMC4yLTAuNS0wLjIgIGMtMC44LTAuNC0yLjMtMS4yLTMuNC0wLjFjLTEsMS4xLTAuMywyLjQsMC4yLDMuM2MwLjEsMC4yLDAuMiwwLjUsMC4zLDAuN2MtMC4yLDAtMC41LDAtMC43LDBjLTEtMC4xLTIuNi0wLjItMy4yLDEuMyAgYy0wLjIsMC41LDAsMS4xLDAuNSwxLjNjMC41LDAuMiwxLjEsMCwxLjMtMC41YzAuMS0wLjIsMC44LTAuMSwxLjItMC4xYzAuOSwwLjEsMiwwLjEsMi42LTAuOGMwLjYtMC45LDAuMS0yLTAuMy0yLjggIGMtMC4xLTAuMy0wLjQtMC44LTAuNC0xYzAuMiwwLDAuNywwLjMsMSwwLjRjMC44LDAuNCwxLjgsMC45LDIuNywwLjNjMC45LTAuNiwwLjgtMS44LDAuNi0yLjdjMC0wLjMtMC4xLTAuOC0wLjEtMSAgYzAuMiwwLjIsMC41LDAuNSwwLjcsMC43YzAuNiwwLjcsMS40LDEuNSwyLjQsMS4yYzEuMS0wLjMsMS4zLTEuNCwxLjUtMi4zYzAuMS0wLjMsMC4yLTAuNywwLjItMC45YzAuMSwwLjIsMC4zLDAuNiwwLjQsMC45ICBjMC4zLDAuOSwwLjgsMS45LDEuOCwyYzEuMSwwLjEsMS43LTAuOSwyLjItMS42YzAuMS0wLjIsMC40LTAuNiwwLjUtMC44YzAuMSwwLjMsMC4xLDAuNywwLjEsMWMwLDAuOSwwLjEsMi4xLDEuMSwyLjUgIGMxLDAuNSwxLjktMC4yLDIuNi0wLjhjMC4yLTAuMiwwLjYtMC41LDAuOC0wLjZjMCwwLjMtMC4yLDAuNy0wLjMsMWMtMC4zLDAuOS0wLjYsMiwwLjEsMi43YzAuOCwwLjgsMS45LDAuNSwyLjcsMC4zICBjMC4zLTAuMSwxLTAuMywxLjEtMC4zYzAsMC4yLTAuNCwwLjctMC42LDFjLTAuNSwwLjctMS4zLDEuNy0wLjgsMi43YzAuMiwwLjQsMC41LDAuNiwwLjksMC42YzAuMSwwLDAuMywwLDAuNC0wLjEgIGMwLjUtMC4yLDAuNy0wLjcsMC41LTEuMmMwLjEtMC4yLDAuMy0wLjYsMC41LTAuOEM0Ni4xLDI5LjEsNDcsMjcuOSw0Ni4yLDI2LjZ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTU2LjksNDIuOWMtMS4xLTAuNy0yLjUtMC41LTMuNCwwLjNsLTIuOC0xLjZjMS0yLDEuNy00LjEsMi4xLTYuNGw0LDAuNGwwLjItMmwtNC0wLjRjMC0wLjQsMC4xLTAuOCwwLjEtMS4yICBzMC0wLjgtMC4xLTEuMmw0LTAuNGwtMC4yLTJsLTQsMC40Yy0wLjMtMi4zLTEuMS00LjQtMi4xLTYuNGwyLjgtMS42YzAuOSwwLjgsMi4zLDEsMy40LDAuM2MxLjQtMC44LDEuOS0yLjcsMS4xLTQuMSAgcy0yLjctMS45LTQuMS0xLjFjLTEuMSwwLjctMS43LDEuOS0xLjQsMy4xbC0yLjgsMS42Yy0xLjItMS45LTIuOC0zLjYtNC41LTVsMi40LTMuM2wtMS42LTEuMmwtMi40LDMuM2MtMC43LTAuNC0xLjQtMC44LTIuMS0xLjIgIGwxLjYtMy43bC0xLjgtMC44bC0xLjYsMy43Yy0yLjEtMC44LTQuMy0xLjMtNi42LTEuNFY3LjhjMS4yLTAuNCwyLTEuNSwyLTIuOGMwLTEuNy0xLjMtMy0zLTNzLTMsMS4zLTMsM2MwLDEuMywwLjgsMi40LDIsMi44djMuMiAgYy0yLjMsMC4xLTQuNSwwLjYtNi42LDEuNGwtMS42LTMuN2wtMS44LDAuOGwxLjYsMy43Yy0wLjcsMC40LTEuNCwwLjgtMi4xLDEuMmwtMi40LTMuM2wtMS42LDEuMmwyLjQsMy4zYy0xLjgsMS40LTMuMywzLjEtNC41LDUgIEwxMS42LDE5YzAuMi0xLjItMC4zLTIuNS0xLjQtMy4xQzguNywxNS4xLDYuOCwxNS42LDYsMTdzLTAuMywzLjMsMS4xLDQuMWMxLjEsMC43LDIuNSwwLjUsMy40LTAuM2wyLjgsMS42Yy0xLDItMS43LDQuMS0yLjEsNi40ICBsLTQtMC40bC0wLjIsMmw0LDAuNGMwLDAuNC0wLjEsMC44LTAuMSwxLjJzMCwwLjgsMC4xLDEuMmwtNCwwLjRsMC4yLDJsNC0wLjRjMC4zLDIuMywxLjEsNC40LDIuMSw2LjRsLTIuOCwxLjYgIGMtMC45LTAuOC0yLjMtMS0zLjQtMC4zQzUuNyw0My43LDUuMiw0NS42LDYsNDdzMi43LDEuOSw0LjEsMS4xYzEuMS0wLjcsMS43LTEuOSwxLjQtMy4xbDIuOC0xLjZjMS4yLDEuOSwyLjgsMy42LDQuNSw1bC0yLjQsMy4zICBsMS42LDEuMmwyLjQtMy4zYzAuNywwLjQsMS40LDAuOCwyLjEsMS4ybC0xLjYsMy43bDEuOCwwLjhsMS42LTMuN2MyLjEsMC44LDQuMywxLjMsNi42LDEuNHYzLjJjLTEuMiwwLjQtMiwxLjUtMiwyLjggIGMwLDEuNywxLjMsMywzLDNzMy0xLjMsMy0zYzAtMS4zLTAuOC0yLjQtMi0yLjh2LTMuMmMyLjMtMC4xLDQuNS0wLjYsNi42LTEuNGwxLjYsMy43bDEuOC0wLjhsLTEuNi0zLjdjMC43LTAuNCwxLjQtMC44LDIuMS0xLjIgIGwyLjQsMy4zbDEuNi0xLjJsLTIuNC0zLjNjMS44LTEuNCwzLjMtMy4xLDQuNS01bDIuOCwxLjZjLTAuMiwxLjIsMC4zLDIuNSwxLjQsMy4xYzEuNCwwLjgsMy4zLDAuMyw0LjEtMS4xUzU4LjMsNDMuNyw1Ni45LDQyLjl6ICAgTTQ0LDQ2LjhsLTEuMi0xLjZsLTEuNiwxLjJsMS4yLDEuNmMtMC42LDAuNC0xLjEsMC43LTEuNywxbC0wLjgtMS44TDM4LDQ3LjlsMC44LDEuOEMzNyw1MC40LDM1LDUwLjgsMzMsNTAuOVY0OWgtMnYxLjkgIGMtMi0wLjEtNC0wLjUtNS44LTEuMmwwLjgtMS44bC0xLjgtMC44bC0wLjgsMS44Yy0wLjYtMC4zLTEuMi0wLjYtMS43LTFsMS4yLTEuNmwtMS42LTEuMkwyMCw0Ni44Yy0xLjUtMS4zLTIuOS0yLjctNC00LjRsMS43LTEgIGwtMS0xLjdsLTEuNywxYy0wLjktMS43LTEuNS0zLjYtMS44LTUuNmwxLjktMC4ybC0wLjItMkwxMy4xLDMzYzAtMC4zLTAuMS0wLjctMC4xLTFzMC0wLjcsMC4xLTFsMS45LDAuMmwwLjItMkwxMy4zLDI5ICBjMC4zLTIsMC45LTMuOSwxLjgtNS42bDEuNywxbDEtMS43bC0xLjctMWMxLjEtMS43LDIuNC0zLjIsNC00LjRsMS4yLDEuNmwxLjYtMS4ybC0xLjItMS42YzAuNi0wLjQsMS4xLTAuNywxLjctMWwwLjgsMS44bDEuOC0wLjggIGwtMC44LTEuOGMxLjgtMC43LDMuOC0xLjEsNS44LTEuMlYxNWgydi0xLjljMiwwLjEsNCwwLjUsNS44LDEuMkwzOCwxNi4xbDEuOCwwLjhsMC44LTEuOGMwLjYsMC4zLDEuMiwwLjYsMS43LDFsLTEuMiwxLjZsMS42LDEuMiAgbDEuMi0xLjZjMS41LDEuMywyLjksMi43LDQsNC40bC0xLjcsMWwxLDEuN2wxLjctMWMwLjksMS43LDEuNSwzLjYsMS44LDUuNmwtMS45LDAuMmwwLjIsMmwxLjktMC4yYzAsMC4zLDAuMSwwLjcsMC4xLDEgIHMwLDAuNy0wLjEsMUw0OSwzMi44bC0wLjIsMmwxLjksMC4yYy0wLjMsMi0wLjksMy45LTEuOCw1LjZsLTEuNy0xbC0xLDEuN2wxLjcsMUM0Ni44LDQ0LDQ1LjUsNDUuNSw0NCw0Ni44eiIvPjwvc3ZnPg==">
<span>{title}<br>{subtitle}</span>
</div>"""
    return html(st, where=where)


@twin_component()
def footnote_disclaimer(lang="en_US", where=st, **kwargs):
    """
    Renders the footnote text for given language.
    """
    md = asset(f"footnote_disclaimer.{lang}.md")
    md = md.format(**kwargs)
    return where.markdown(md)


@twin_component()
def footnotes(where=st):
    """
    Write footnotes.
    """

    template = '<a href="{href}">{name}</a>'
    path_href = _("https://www.paho.org/hq/index.php?lang=en")
    fiocruz_href = "http://www.matogrossodosul.fiocruz.br/"
    institutions = [
        template.format(href=path_href, name=_("PAHO")),
        template.format(href="https://saude.gov.br/", name="MS/SVS"),
        template.format(href="https://lappis.rocks", name="UnB/LAPPIS"),
        template.format(href="http://medicinatropical.unb.br/", name="UnB/NMT"),
        template.format(href="http://fce.unb.br/", name="UnB/FCE"),
        template.format(href="http://www.butantan.gov.br/", name="Butantã"),
        template.format(href=fiocruz_href, name="Fiocruz"),
        template.format(href="https://famed.ufms.br/", name="FAMED"),
    ]
    links = _("Support: {institutions}").format(institutions=", ".join(institutions))
    styles = "text-align: center; margin: 2rem 0 -5rem 0;"
    return html(f'<div style="{styles}">{links}</div>', where=where)


if __name__ == "__main__":
    import streamlit as st

    css()
    st.header("Components")

    st.subheader("icon()")
    st.markdown("(See the sidebar)")
    logo("Pydemic", "Sub-title", where=st.sidebar)

    st.subheader("footnote_disclaimer()")
    footnote_disclaimer(mortality=0.006, fatality=0.012, infected=0.25, symptomatic=0.14)

    st.subheader("footnotes()")
    footnotes()
