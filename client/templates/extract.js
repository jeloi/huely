/* Helpers */
Template.extract.helpers({

});

/* Events */
Template.extract.events({
	'click button': function(e) {
		e.preventDefault();
		var text = $(".mainform textarea").val();
		console.log("text: "+text);
		// Session.set("palette", Huely.extract(text));
		console.log(Huely.extract(text));
		// console.log(Session.get("palette"));
		// Router.go('palette');
		return false;
	}
})


