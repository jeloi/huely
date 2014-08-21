/* Helpers */
Template.extract.helpers({

});

/* Events */
Template.extract.events({
	'click button': function(e) {
		e.preventDefault();
		var code = $(".extract textarea").val();
		extractSwatches(code);
		Session.set("code", code);
		Router.go('palette');
		return false;
	}
})


