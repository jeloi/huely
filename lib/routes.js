Router.configure({
    trackPageView: true,
    loadingTemplate: 'loading',
    load: function() {

    },
});

Router.onBeforeAction('loading')

Router.map(function() {
  // this.route('landing', {path: '/'});
  this.route('palette',{
    path: "palette/:_id",
    waitOn:function(){
      return Meteor.subscribe("palette", this.params._id);
    },
    data: function() {
      return Palettes.findOne(this.params._id);
    }
    // onBeforeAction: function() {
    //   $('html, body').animate({
    //         scrollTop: 0
    //       }, 0);
    // }
  });
  this.route('extract', {
  	path: '/'
  });
  // Server Route

  // This "API" Endpoint takes a POST request with data with a key 'text'
  // It returns 200:OK and the palette ID of the extracted palette, if colors were extracted
  // If returns 204:No Content if no colors were extracted
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
          var paletteId = extractSwatches(code);
          // Could be, e.g. application/xml, etc.
          if (paletteId) {
            // HTTP 200: OK - The standard response for successful HTTP requests.
            this.response.writeHead(200, {'Content-Type': 'text/html'});
            this.response.end(paletteId);
          } else {
            // HTTP 204: No Content - The server accepted the request but is not returning any content.
            this.response.writeHead(204, {'Content-Type': 'text/html'});
            this.response.end();
          };
      }
  });
});