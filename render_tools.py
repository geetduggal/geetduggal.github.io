import sys
import csv

print("<h2><a href='tools-readme.md'>Tools</a></h2><table>")
csv_reader = csv.reader(sys.stdin)
for line in csv_reader:
    name, description, url = line
    if url:
        print(f"<tr><td><a href='{url}'>{name}</a></td><td>{description}</td></tr>")
    else:
        print(f"<tr><td>{name}</td><td>{description}</td></tr>")
print("</table>")
