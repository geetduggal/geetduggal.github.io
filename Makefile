all: index.html

index.html: header.html footer.html render_geets.py geets.tsv render_academic.py articles.tsv render_articles.py style.css
	cat header.html > index.html
	tail -8 geets.tsv | tac | python3 render_geets.py >> index.html
	cat articles.tsv | tac | python3 render_articles.py >> index.html
	cat academic.tsv | tac | python3 render_academic.py >> index.html
	cat footer.html >> index.html

clean:
	rm index.html

