/* Helpers */
Template.extract.helpers({

});

/* Events */
Template.extract.events({
	'click button': function(e) {
		e.preventDefault();
		var text = $(".mainform textarea").val();
		Huely.extract(text);
		// Router.go('palette');
		console.log("new");
		return false;
	}
})


