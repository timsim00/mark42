
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
var fs = require('fs')

var serve = serveStatic(__dirname, {fallthrough: true, 'index': ['index.html']})

var port = process.env.PORT || 8787

// Create server
var server = http.createServer(function onRequest (req, res) {

  var done = finalhandler(req, res, { onerror: logerror })

  var routes = ['/assets', '/components']
  var notindex = routes.filter(el => req.url.includes(el))

  if (notindex.length === 0) {
    // return index.html for deep link routes that aren't known files (routes array)
    // had to move app-root.js into components/core
    fs.readFile('index.html', function (err, buf) {
      if (err) return done(err)
      res.setHeader('Content-Type', 'text/html')
      res.end(buf)
    })
  } else {
    serve(req, res, done)
  }

})

function logerror (err) {
  console.error(err.stack || err.toString())
}

// Listen
server.listen(port, function(){
    console.log(`Server running on ${port}...`);
});
