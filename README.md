simple alternative - browser extension to detect simple language alternatives

# This extension

This extension adds a big round button to your browser. It will try to detect a
link to a simplified version of the current page in the current language. When
you click the button, the simplified version is loaded.

A link to a simplified version should look roughly like this:

	<a href="…" rel="alternate" hreflang="en-simple">Go to simple version</a>

# The `simple` language variant tag

The [simple language variant tag][1] has officially been included in the IANA
Language Subtag Registry. It intended meaning is "to represent a generic
simplification of a root language".

This could be useful for a lot of people:

-	children
-	people with cognitive disabilities
-	second language learners

Among other things, it can be used to conform with 
[Success Criterion 3.1.5 in WCAG 2.0][2]:

> When text requires reading ability more advanced than the lower secondary
> education level after removal of proper names and titles, supplemental
> content, or a version that does not require reading ability more advanced
> than the lower secondary education level, is available.

# Future

The simple language variant tag is still new and has not seen a lot of
adoption.  This extension is merely a proof of concept. I would like to see
this kind of functionality directly in browsers one day.

[1]: http://permalink.gmane.org/gmane.ietf.languages/11065
[2]: https://www.w3.org/TR/WCAG20/#meaning-supplements
