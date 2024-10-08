import sys
import csv

print("""
<h2>Academic</h2>
<table>
""")

csv_reader = csv.reader(sys.stdin)
for line in csv_reader:
    authors, title, publication, volume, number, pages, year, publisher, pdf, url = line
    print("<tr>")
    print(f"<td>{authors} <a href='{url}'>{title}</a> <i>{publication}</i> {volume} {number} {pages} {year} {publisher} (<a href='lib/{pdf}'>pdf</a>)</td>")
    print("</tr>")
print("</table>")
print("""<p>* indicates equal contribution. Profile on
<a href='https://scholar.google.com/citations?user=1APlUC8AAAAJ&hl=en'>Google Scholar</a>.
</p>
""")

