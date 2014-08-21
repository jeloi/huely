Router.configure({
    trackPageView: true,
    load: function() {
      $('html, body').animate({
            scrollTop: 0
          }, 0);
      // $('.content').hide().fadeIn(200, "linear");
      // $('.palette').addClass('fade-in');
    },
    onBeforeAction: function() {
      // $('.content').removeClass('fade-in');
    }
});

Router.map(function() {
  // this.route('landing', {path: '/'});
  this.route('palette',{
  	data: function() {
  		return Palettes.findOne(Session.get("currentPalette"));
  	}
  });
  this.route('extract', {
  	path: '/'
  })
});