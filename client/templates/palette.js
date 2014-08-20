/* Callbacks */
Template.palette.created = function () {
	if (Swatches.find().count() == 0) {
		Router.go('extract')
	};
};

/* Helpers */
Template.palette.helpers({
	swatches: function() {
		return Swatches.find();
	}
});

/* Events */
Template.palette.events({

})


