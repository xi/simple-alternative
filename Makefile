simple-alternative.zip: bg.js icons manifest.json simple.js
	@rm -f $@
	zip -r -FS $@ $^

icons/icon-128.png: icons/icon.svg
	convert -resize 128x128 $< $@

icons/icon-32.png: icons/icon.svg
	convert -resize 32x32 $< $@
