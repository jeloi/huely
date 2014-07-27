/* Helpers */
Template.extract.helpers({

});

/* Events */
Template.extract.events({
	'click button': function() {

		Session.set("form", $(".mainform textarea").val());
		// Session.set("form", "this");
		Router.go('palette');
		console.log("got here!");
		return false;
	}
})


