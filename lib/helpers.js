/* Package scope methods that can be called on the client or server */
extractSwatches = function(text) {
	Swatches.remove({});
	var swatches = Huely.extract(text);
	_.each(swatches, function(swatch, key, list){
		Swatches.insert(swatch);
	});
};

// Sets a session variable only if it isn't already set
sessionGetSet = function(session_var, session_val) {
	if (Session.get(session_var)) {
		return Session.get(session_var);
	} else {
		return Session.set(session_var, session_val);
	}
}

