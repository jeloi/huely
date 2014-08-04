/* Helpers */
Template.extract.helpers({

});

/* Events */
Template.extract.events({
	'click button': function() {
		var text = $(".mainform textarea").val();
		Huely.extract(text);
		Router.go('palette');
		console.log("text");
		return false;
	}
})


