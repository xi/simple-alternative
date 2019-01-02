simple-alternative.zip: bg.js icons manifest.json simple.js
	@rm -f $@
	zip -r -FS $@ $^
