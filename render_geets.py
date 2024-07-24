import sys

print("<table>")
for line in sys.stdin:
	date, geet = line.rstrip().split("\t")
	print(f"<tr><td nowrap>{date}</td><td>{geet}</td></tr>")
print("</table>")

