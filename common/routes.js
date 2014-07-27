Router.configure({
    trackPageView: true
});

Router.map(function() {
  this.route('landing', {path: '/'});
  this.route('palette');
  this.route('main', {
  	path: 'main'
  })
});