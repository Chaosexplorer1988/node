# simple-ansi

Simply expose a minimal subset of the ansi terminal codes, for use manually.

## usage

```
var ansi = require('simple-ansi');

var object = {
	name : "example",
	version : 1.0,
	options : {
		stuff : "more stuff"
	}
};

console.log(ansi.red, object, ansi.reset);

console.log(ansi.green + "some message" + ansi.reset);

// combine styles

console.log(ansi.green + ansi.bgBlue + ansi.bold, "Read this if you can!", ansi.reset);
```

Note: you remember to reset to return to the default terminal style.

Full list:

Formatting:

    bold, underline, blink, reset

Foreground Colors:

	gray, red, green, yellow, blue, magenta, cyan, white,

Background Colors:

	bgGray, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan,
