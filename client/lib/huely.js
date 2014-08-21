// /* Huely Namespace */
Huely = {};

Huely.extract = function(string) {
	/* Regular Expression Components */
	var hexChar = "(#(\\d|[a-f]){3})(\\W|\$|(\\d|[a-f]){3})",
		rgb = "(rgb\\(\\d{1,3},( )*\\d{1,3},( )*\\d{1,3}\\))",
		rgba = "(rgba\\(\\d{1,3},( )*\\d{1,3},( )*\\d{1,3},( )*((\\d.?\\d+)|\\d)\\))",
		sassVariable = "(\\$\\S*:\\s*)?",
		lessVariable = "(@\\S*:\\s*)?";

	var expression = "(("+sassVariable+"|"+lessVariable+")("+hexChar+"|"+rgb+"|"+rgba+"))";

	var regExp = new RegExp(expression, "gi");

	// console.log(regExp);

	var matches = string.match(regExp);

	// console.log(matches);

	// Removes the last char of inputted string if it doesn't end in a word char or ) (i.e ;)
	function removeTrail (string) {
		if (!string[string.length-1].match(/\)|\w/)) {
			// console.log(string+"didn't match (didn't end in ) or W");
			return string.slice(0,string.length-1);
		}
		return string;
	}

	var dict = _(matches).map( function( value, key, matches ) {
		// Remove last char if it's a colon
		value = removeTrail(value);

		// If the value has a defined variable (meaning it has a :)
		var colonIndex = value.indexOf(":");

		if (colonIndex >= 0) {
			return {
				varName: value.slice(0, colonIndex),
				colorVal: value.slice(colonIndex+1, value.length).trim()
			};
		} else {
			return {
				varName: null,
				colorVal: value.slice(0,value.length).trim()
			};
		}
	})
	
	// console.log(dict);

	return dict;
}



