import sys

print("""
<h2>Academic</h2>
<table>
""")
for line in sys.stdin:
    fields = line.rstrip().split("\t")
    # authors, title, publication, volume, number, pages, year, publisher = fields
    print("<tr>")
    print(f"<td>{line}</td>")
    print("</tr>")
print("</table>")
print("""<p>Profile on
<a href='https://scholar.google.com/citations?user=1APlUC8AAAAJ&hl=en'>Google Scholar</a>.
</p>
""")

