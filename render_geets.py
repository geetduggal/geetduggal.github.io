import sys

print("<table width=80%>")
for line in sys.stdin:
	date, geet = line.rstrip().split("\t")
	print(f"<tr><td nowrap>{date}</td><td>{geet}</td></tr>")
print("</table>")

