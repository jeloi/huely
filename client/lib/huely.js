// /* Huely Namespace */
Huely = {};

Huely.extract = function(string) {
	Session.set("form", string);
	console.log("this is where extraction magic happens!");
	/* Regular Expression Components */
	var hex6Char = "(#(\\d|[a-f]){6})\\W",
		hex3Char = "(#(\\d|[a-f]){3}\\W)",
		rgb = "(rgb\\(\\d{1,3},( )*\\d{1,3},( )*\\d{1,3}\\))",
		rgba = "(rgba\\(\\d{1,3},( )*\\d{1,3},( )*\\d{1,3},( )*((\\d.?\\d+)|\\d)\\))",
		sassVariable = "(\\$\\S*:\\s*)?",
		lessVariable = "(@\\S*:\\s*)?";

	var expression = "(("+sassVariable+"|"+lessVariable+")("+hex6Char+"|"+hex3Char+"|"+rgb+"|"+rgba+"))";

	var regExp = new RegExp(expression, "gi");

	var matches = string.match(regExp);

	console.log(matches);

	var dict = _(matches).map( function( value, key, matches ) {
		// If the value has a defined variable
		var colonIndex = value.indexOf(":");
		if (colonIndex >= 0) {
			return {
				varName: value.slice(0, colonIndex),
				colorVal: value.slice(colonIndex+1, value.length-1).trim()
			};
		} else {
			return {
				varName: null,
				colorVal: value.slice(0,value.length-1).trim()
			};
		}
	})

	console.log(dict);

	return dict;
}



