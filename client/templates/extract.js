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


Template.twitter.rendered = function () {
	
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
};


