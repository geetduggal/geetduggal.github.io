all: index.html

index.html: header.html footer.html render_geets.py geets.csv render_academic.py articles.csv render_articles.py render_tools.py tools.csv tools-readme.md style.css academic.csv style-ambient-synth.css
	cat header.html > index.html
	tail -8 geets.csv | sed '1d' | tac | python3 render_geets.py >> index.html
	cat articles.csv | sed '1d' | tac | python3 render_articles.py >> index.html
	cat tools.csv | sed '1d' | python3 render_tools.py >> index.html
	cat academic.csv | sed '1d' | tac | python3 render_academic.py >> index.html
#	cat footer.html >> index.html

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
	rm index.html

