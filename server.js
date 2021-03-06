
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
var fs = require('fs')
const path = require('path')

var serve = serveStatic(__dirname, {
  fallthrough: true,
  'index': ['index.html'],
  maxAge: '1d'
})

var port = process.env.PORT || 8787

// Create server
var server = http.createServer(function onRequest (req, res) {

  console.log('req.url',req.url)

  if (req.url.includes('/api/complist')) {
    returnComponentList(req, res)
  } else {
    var done = finalhandler(req, res, { onerror: logerror })
    var routes = ['/assets', '/components', '/node_modules', '/bower_components']
    var notindex = routes.filter(el => req.url.includes(el))
    if (notindex.length === 0) {
      // return index.html for deep link routes that aren't known files (routes array)
      // had to move app-root.js into components/core
      fs.readFile('index.html', function (err, buf) {
        if (err) {
          console.log('* error', err)
          return done(err)
        }
        console.log('return index.html (', req.url, ')')
        res.setHeader('Content-Type', 'text/html')
        res.end(buf)
      })
    } else {
      serve(req, res, done)
    }
  }
})

function logerror (err) {
  console.error(err.stack || err.toString())
}

// Listen
server.listen(port, function(){
    console.log(`Server running on ${port}...`);
});


function returnComponentList(req, res) {
  let ret = {}

  function getFiles(collection, resolve, reject) {
    const directoryPath = path.join(__dirname, collection.path);
    console.log('getComponentList:', directoryPath)
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        ret[collection.name] = []
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            let filePath = path.join(__dirname, collection.path, file)
            let fileURL = `/${path.join(collection.path, file)}`
            let isDir = fs.statSync(filePath).isDirectory()
            if (path.extname(file) === '.js' || (collection.folders && isDir)) {
              let title = file.replace('.js','')
              ret[collection.name].push({
                title,
                name: file,
                path: fileURL,
                isDir,
                elName: `${collection.name.toLowerCase()}-${title.toLowerCase()}`
              })
            }
        })
        resolve(true)
    })
  }

  let collections = [
    {name: 'Elix', path: 'node_modules/elix-602/src', exclude: []},
    {name: 'Moerkerke', path: 'node_modules/moerkerke-mwc-114/src', exclude: ['bundle', 'router']},
    {name: 'UI5', path: 'node_modules/ui5-0120/dist'},
    {name: 'Weightless', path: 'node_modules/weightless-0034', folders: true},
    {name: 'Coral', path: 'node_modules/coral-100b82', folders: true},
    {name: 'Gulick', path: 'node_modules/_gulick/chip-input-021/source'},
    {name: 'Nuclei', path: 'node_modules/_nuclei/material-input-116/src'}
  ]
  var fn = function (collection){
      return new Promise((resolve,reject) => getFiles(collection, resolve, reject))
  }
  var actions = collections.map(fn);
  var results = Promise.all(actions);
  results.then(data => {
    res.setHeader('Content-Type', 'application/json')
    var json = JSON.stringify(ret);
    res.end(json);
  });
}

