/* Helpers */
Template.extract.helpers({

});

/* Events */
Template.extract.events({
	'click button': function(e) {
		e.preventDefault();
		var text = $(".mainform textarea").val();
		extractSwatches(text);
		Router.go('palette');
		return false;
	}
})


