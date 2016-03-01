var express = require('express'),
  fs        = require('fs'),
  router    = express.Router(),
  sanitize  = require('mongo-sanitize')

// GET home page.
router.get('/', function getIndexCallback(req, res, next) {

  // render a jade file from views/ folder, in this case index.jade
  res.render('index', { title: 'Coder Forge - Ajax Autocomplete' });
});

// GET json results.
router.get('/getResults', function resultsRouteCallback(req, res, next){

  // vars
  var query = sanitize(req.body.query)                                          // sanitize user provided input (remove possibility of user inputed code)
    ,fileLocation   = __dirname + '/../public/sample.json'                      // the location of the json file

  // mock database request with file system request
  fs.readFile(fileLocation, function readFileCallback(err, file){               // read the file.
    if(err) return next(err)                                                    // if error pass back to expressJS.

    var jsonObj = JSON.parse(file)                                              // parse file contents as JSON object.

    res.json({                                                                  // send json results to client.
      "results": jsonObj
    })

  })
})

module.exports = router;
