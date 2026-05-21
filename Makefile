# Site root (geetduggal.com) now redirects to the Order page at
# /order-home/. index.html is a static redirect committed directly and is
# no longer generated. `make legacy` rebuilds the old CSV-driven home
# page as legacy.html (also committed as a backup), reachable at
# geetduggal.com/legacy.html.
all:
	@echo "index.html is a static redirect to /order-home/ (committed directly)."
	@echo "Run 'make legacy' to rebuild the old home page as legacy.html."

legacy: header.html footer.html render_geets.py geets.csv render_academic.py articles.csv render_articles.py render_tools.py tools.csv tools-readme.md style.css academic.csv style-ambient-synth.css
	cat header.html > legacy.html
	tail -8 geets.csv | sed '1d' | tac | python3 render_geets.py >> legacy.html
	cat articles.csv | sed '1d' | tac | python3 render_articles.py >> legacy.html
	cat tools.csv | sed '1d' | python3 render_tools.py >> legacy.html
	cat academic.csv | sed '1d' | tac | python3 render_academic.py >> legacy.html
#	cat footer.html >> legacy.html

build:
	docker build -t ambient-synth-image .

run:
	docker run -p 8080:8080 ambient-synth-image

deploy:
	eb init AmbientSynth --platform docker --region us-west-2
	eb create ambient-synth-env --single --platform docker
	eb deploy

logs:
	eb logs

clean:
	rm -f legacy.html
