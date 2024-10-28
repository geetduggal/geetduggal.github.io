import sys
import csv

print("<h2>Articles</h2><table>")
csv_reader = csv.reader(sys.stdin)
for line in csv_reader:
    print(line)
    date, title, pdf, url  = line
    print(f"<tr><td nowrap width=50px>{date}</td><td><a href='{url}'>{title}</a></td></tr>")
print("</table>")
