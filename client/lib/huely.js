// /* Huely Namespace */
Huely = {};

Huely.extract = function(string) {
	console.log("Calling Huely.extract() with "+string);
	/* Regular Expression Components */
	var hexChar = "(#(\\d|[a-f]){3})(\\W|\$|(\\d|[a-f]){3})",
		rgb = "(rgb\\(\\d{1,3},( )*\\d{1,3},( )*\\d{1,3}\\))",
		rgba = "(rgba\\(\\d{1,3},( )*\\d{1,3},( )*\\d{1,3},( )*((\\d.?\\d+)|\\d)\\))",
		sassVariable = "(\\$\\S*:\\s*)?",
		lessVariable = "(@\\S*:\\s*)?";

	var expression = "(("+sassVariable+"|"+lessVariable+")("+hexChar+"|"+rgb+"|"+rgba+"))";

	var regExp = new RegExp(expression, "gi");

	console.log(regExp);

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

	// console.log(dict);

	return dict;
}



