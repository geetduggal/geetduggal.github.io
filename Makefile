all: index.html

index.html: header.html footer.html render_geets.py geets.tsv
	cat header.html > index.html
	tail -8 geets.tsv | python3 render_geets.py >> index.html
	cat footer.html >> index.html

clean:
	rm index.html

