Router.configure({
    trackPageView: true
});

Router.map(function() {
  this.route('landing', {path: '/'});
  this.route('palette',{
  	data: function() {
  		return Palettes.findOne(Session.get("currentPalette"));
  	}
  });
  this.route('extract', {
  	path: 'extract'
  })
});