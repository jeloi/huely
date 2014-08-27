Meteor.publish('palette', function (paletteId) {
	return Palettes.find({_id: paletteId});
});