/* Helpers */
Template.extract.helpers({

});

/* Events */
Template.extract.events({
	'click button': function(e) {
		e.preventDefault();
		var code = $(".mainform textarea").val();
		extractSwatches(code);
		Session.set("code", code);
		Router.go('palette');
		return false;
	}
})


