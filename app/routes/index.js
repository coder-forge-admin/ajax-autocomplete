var express = require('express'),
  ds = require('fs'),
  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*Get query results from searchBox*/
router.get('/getResults', function resultsRouteCallback(req,res,next) {
var results = []

  //escape users provided get vars (prevents sql injection statements)
  //Database injection attacks - prevent them

  //  query database  for "indexed results"
//Counties.find({}, function returnFromDB(err, docs){

//sent back results
//  res.json({
  //    "foo":docs
  //  })
  //so we have docs
  //})

 fs.readFile(__dirname+'./../public/sample.json', function splitJson(err, json) {
   if(err) return next(err) //error handler returns to callback

   res.json({
      "results": JSON.parse(json)
   })
  })
})
module.exports = router;
