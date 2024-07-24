import sys

print("""
<h2>Academic</h2>
<table>
""")
for line in sys.stdin:
    fields = line.rstrip().split("\t")
    authors, title, publication, volume, number, pages, year, publisher, pdf, url = fields
    print("<tr>")
    print(f"<td>{authors} <a href='{url}'>{title}</a> {publication} {volume} {number} {pages} {year} {publisher} (<a href='lib/{pdf}'>pdf</a>)</td>")
    print("</tr>")
print("</table>")
print("""<p>* indicates equal contribution. Profile on
<a href='https://scholar.google.com/citations?user=1APlUC8AAAAJ&hl=en'>Google Scholar</a>.
</p>
""")

