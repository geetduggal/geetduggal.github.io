import sys

print("<table>")
for line in sys.stdin:
	date, geet = line.rstrip().split("\t")
	print(f"<tr><td nowrap>{date}</td><td>{geet}</td></tr>")
print("</table>")
print("""<p>
See all Geets with ability to permalink on
<a href='https://github.com/geetduggal/geetduggal.github.io/blob/master/geets.tsv'>Github</a>.
</p>
""")

