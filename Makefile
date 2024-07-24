all: index.html

index.html: header.html footer.html
	cat header.html > index.html
	cat footer.html >> index.html

clean:
	rm index.html

