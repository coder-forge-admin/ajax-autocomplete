// Load our modules
var express       = require('express')
  ,http           = require('http')
  ,path           = require('path')

// global params
var port = 3000

// construct our express app
var app = express()

// setup our express app
app.set('port', port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'public')))

// add routing endpoints
var routeRoot = require('./routes/root')
app.use('/', routeRoot)

// create our server and pass it our express app
var server = http.createServer(app)
server.listen(port)
