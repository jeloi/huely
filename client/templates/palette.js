/* Callbacks */
Template.palette.created = function () {
	if (Swatches.find().count() == 0) {
		Router.go('extract')
	};
};

Template.palette.rendered = function () {
	$('.gridly').gridly({
	      base: 60, // px 
	      gutter: 20, // px
	      columns: 12
	  });
};

/* Helpers */
Template.palette.helpers({
	swatches: function() {
		return Swatches.find();
	},
	// The name or the value of the swatch. Context: swatch
	nameOrVal: function() {
		return this.varName || this.colorVal;
	}
});

/* Events */
Template.palette.events({
	'click .gridly .swatch': function(event) {
		event.preventDefault();
		event.stopPropagation();
		var $this, height, width;
		$this = $(event.currentTarget);
		console.log($this);
		$this.toggleClass('small');
		$this.toggleClass('large');
		if ($this.hasClass('small')) {
			width = 140;
			height = 200;
		}
		if ($this.hasClass('large')) {
			width = 300;
			height = 420;
		}
		$this.data('width', width);
		$this.data('height', height);
		return $('.gridly').gridly('layout');
	},
	'click .gridly .delete': function(event) {
		var $this;
		event.preventDefault();
		event.stopPropagation();
		$this = $(event.currentTarget);
		$this.closest('.swatch').remove();
		return $('.gridly').gridly('layout');
	}
	//, 'click .add': function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.gridly').append(swatch);
	// 	return $('.gridly').gridly();
	// }
})


		// $('.gridly').gridly({
	 //      base: 60, // px 
	 //      gutter: 20, // px
	 //      columns: 12
	 //  });

	    // Generated by CoffeeScript 1.6.3
// 	    (function() {
// 	    	$(function() {
// 	    		var swatch;
// 	    		swatch = "<div class='swatch small'><div class='delete'>&times;</div></div>";
// 	    		// $(document).on("click", ".add", function(event) {
// 	    		// 	event.preventDefault();
// 	    		// 	event.stopPropagation();
// 	    		// 	$('.gridly').append(swatch);
// 	    		// 	return $('.gridly').gridly();
// 	    		// });
// 	    		// return $('.gridly').gridly();
// 	    	});

// }).call(this);