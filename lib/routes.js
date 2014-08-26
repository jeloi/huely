Router.configure({
    trackPageView: true,
    load: function() {

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
  	},
    onBeforeAction: function() {
      $('html, body').animate({
            scrollTop: 0
          }, 0);
    }
  });
  this.route('extract', {
  	path: '/'
  });
  // Server Route
  this.route('apiExtract', {
      path: '/api/extract',
      where: 'server',
      action: function() {
          // GET, POST, PUT, DELETE
          var requestMethod = this.request.method;
          // Data from a POST request
          var requestData = this.request.body;
          // Get the POST data with key: text
          var code = requestData.text;
          // extractSwatches(code);
          // Session.set("text", code);
          // Router.go('palette');
          // console.log(requestData.text);
          console.log(code);
          // Could be, e.g. application/xml, etc.
          if (true) {
            // HTTP 200: OK - The standard response for successful HTTP requests.
            this.response.writeHead(200, {'Content-Type': 'text/html'});
            this.response.end("found things and extracted things!");
          } else {
            // HTTP 204: No Content - The server accepted the request but is not returning any content.
            this.response.writeHead(204, {'Content-Type': 'text/html'});
            this.response.end("didn't find anything dawg");
          };
      }
  });
});