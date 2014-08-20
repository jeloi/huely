/* Package scope methods that can be called on the client or server */
extractSwatches = function(text) {
	var swatches = Huely.extract(text);
	_.each(swatches, function(swatch, key, list){
		Swatches.insert(swatch);
	});
}