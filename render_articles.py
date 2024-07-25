import sys

print("<h2>Articles</h2><table>")
for line in sys.stdin:
    date, title, pdf, url  = line.rstrip().split("\t")
    print(f"<tr><td nowrap>{date}</td><td><a href='{url}'>{title}</a></td></tr>")
print("</table>")
