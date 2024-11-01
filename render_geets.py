import sys
import csv

print("<table>")
csv_reader = csv.reader(sys.stdin)
for i,line in enumerate(csv_reader):
    date, geet = line
    if i == 0:
        latest_geet = geet
        print(f"<tr><td nowrap width=50px>{date}</td><td><div id='typing' class='typing-animation'></div></td></tr>")
    else:
        print(f"<tr><td nowrap width=50px>{date}</td><td>{geet}</td></tr>")
print("</table>")

print(f"""
<script>
  const text = "{latest_geet}";
  let index = 0;
""")
print("""
  function type() {
      if (index < text.length) {
          document.getElementById('typing').textContent += text.charAt(index);
          index++;
          setTimeout(type, 50);
      } else {
        setTimeout(() => {
          document.getElementById('typing').innerHTML = text;
          document.getElementById('typing').classList.remove('typing-animation');
          document.getElementById('typing').style.borderRight = 'none';

        }, 500);
      }
  }

  type();
</script>
""")

print("""<p>
See all Geets with ability to permalink on
<a href='https://github.com/geetduggal/geetduggal.github.io/blob/master/geets.csv'>Github</a>.
</p>
""")

