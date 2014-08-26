/* Helpers */
Template.extract.helpers({
	currentSample: function() {
		return samples[Session.get("sampleIndex")];
	}
});

/* Events */
Template.extract.events({
	'click button': function(e) {
		e.preventDefault();
		var code = $(".extract textarea").val();
		extractSwatches(code);
		Session.set("text", code);
		// console.log(Session.get("code"));
		Router.go('palette');
		return false;
	},
	'click #cycleSample': function(e) {
		console.log(Template.extract.currentSample());
		console.log(Session.get("sampleIndex"));
		$('textarea.extract-code').val(Template.extract.currentSample());
		Session.set("sampleIndex", (Session.get("sampleIndex")+1)%samples.length);

	}
})

Template.extract.rendered = function () {
	Session.set("sampleIndex", 0);
};


Template.twitter.rendered = function () {

	var template = this;

	// Ajax load the twitter widgets.js, set a Session var twitter to true on complete
	$.ajax('//platform.twitter.com/widgets.js', {dataType: 'script', cache: true})
	  .done(function () { Session.set('twitter', true); });


	  this.autorun(function () {
	    var span = template.$('.twitter').empty();
	    var twitterReady = Session.get('twitter');

	    if (twitterReady) {
	      span.append('	<a href="https://twitter.com/share" class="twitter-share-button" data-text="Checkout Huely - Visually extract colors from code" data-via="_Jeloi" data-related="_Jeloi">Tweet</a>');
	      twttr.widgets.load(span.get(0));
	    }
	  });

};

Template.facebook.rendered = function () {
	var template = this;

	$.ajax('//connect.facebook.net/en_US/all.js', {dataType: 'script', cache: true})
	.done(function () { FB.init({appId: '307468869424814', version: 'v2.0'}); Session.set('facebook', true); });

	 this.autorun(function () {
	   var span = template.$('.facebook').empty();
	   var facebookReady = Session.get('facebook');

	   if (facebookReady) {
	     span.append('<div class="fb-like" data-share="false" data-layout="button_count"></div>');
	     FB.XFBML.parse(span.get(0));
	   }
	 });

};


