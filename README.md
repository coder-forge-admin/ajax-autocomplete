# ajax-autocomplete

Search for strings, parse response and add to search input as an autocomplete dropdown list.

<<<<<<< HEAD
Lessons are split into branches

 - Lesson 1: branch [l1-setup-quick-sandbox](https://github.com/coder-forge/ajax-autocomplete/tree/l1-setup-quick-sandbox)
 - Lesson 2: branch [l2-listen-request](https://github.com/coder-forge/ajax-autocomplete/tree/l2-listen-and-request)
 - Lesson 3: branch [l3-listen-response](https://github.com/coder-forge/ajax-autocomplete/tree/l3-listen-response)
 - Lesson 4: branch [l4-build-response](https://github.com/coder-forge/ajax-autocomplete/tree/l4-build-response)

## Requirements

 - NodeJS
 - Bower (install after nodejs)

### Lesson 1: Setup Quick Sandbox

Here we structure our app. We want to quickly provision a server and some
front end files. To do this we concentrate on the configuration files and then
install the requirements.

### Lesson 2: Client event listeners & make request

Use client side javascript framework, jQuery, to add a `listener` to an input
box. This will listen for the `keyup` event and capture the current value of the
input box.

### Lesson 3: Server listen request and send response

The running server will listen for requests on an `endpoint` and serve a json
response

### Lesson 4: Client build response

Using the response from `lesson 3` we build an html list to append below the
input box.
=======
# 1 - get code

switch to this branch...
```bash
$ git checkout -b l4-build-response
```

<<<<<<< HEAD
1. create route for handling ajax requests and returning json

  First we are going to create a route to handle all search keywords and return a
  json object. We will call the route `getResults` and define it in our `app/routes/root.js`
  file, right after our index route declaration, like so:
  ```javascript
  ...
    /* GET home page. */
    router.get('/', function getIndexCallback(req, res, next) {
      ...
    });

    /* GET json results */
    router.get('/getResults', function resultsRouteCallback(req, res, next){
    })
  ...
  ```
  Now for all requests to [http://localhost:3000/getResults](http://localhost:3000/getResults)
  will call the named function `resultsRouteCallback()`.

2. sanitize user input
  Before we work with the input from the searchBox we must fist check that it
  has no code in it. What would happen if a milicious user put database code
  into an input. Then when we add the code to a database query and send it, the
  database will naturally execute it. A user could put 'return all tablenames'
  and 'return all passwords'. So first we must clean, or `sanitize`, all user
  inputs.

  The tool used for this tutorial is [mongo-sanitize](https://www.npmjs.com/package/mongo-sanitize)
  So run the below code to install and save it to your `package.json` file.
  ```bash
  $ npm install --save mongo-sanitize
  ```

  We now require the new module at the top of the file `app/routes/root.js`:
  ```javascript
  var express = require('express'),
    router    = express.Router(),
    sanitize  = require('mongo-sanitize')

  /* GET home page. */
  ...
  ```

  After check there were no errors on requests to the route, we immediately
  sanitize `ALL` user provided inputs. Notice that the value of `req.body.query`.
  The `req.body` object holds all the values sent to the endpoint.
  ```javascript
  ...
  router.get('/getResults', function resultsRouteCallback(req, res, next){

    // 1. clean user generated input
    var query = sanitize(req.body.query)
    ...

  ```

3. get results.
  Once the values are cleaned we would then build a `query string` to send to a
  database. For this tutorial we are skipping database creation and instead
  mocking up a database request with a file request.

  So instead we will use the native `fs` module, this does not need to be added
  to your `package.json` file as its included with node. So require `fs` module and assign it:
  ```javascript
  var express = require('express'),
    fs        = require('fs'),
    router    = express.Router(),
    sanitize  = require('mongo-sanitize')

  /* GET home page. */
  ...
  ```

  Next in the `resultsRouteCallback`, just after we cleaned the values, we will
  make a file system request for the json file:
  ```javascript
  ...
    ,fileLocation   = __dirname + '/../public/sample.json'

  fs.readFile(fileLocation, function readFileCallback(err, file){
    if(err) return next(err)

    var jsonObj = JSON.parse(file)

    res.json({
      "results": jsonObj
    })
  })
  ...
  ```

See the completed file here: [app/routes/root.js](https://github.com/coder-forge/ajax-autocomplete/blob/l3-listen-response/app/routes/root.js)
>>>>>>> d39834aa4636846761599c292aa0de96d574a93e
=======
See the completed file here: [app/routes/root.js](https://github.com/coder-forge/ajax-autocomplete/blob/l3-listen-response/app/public/javascripts/global.js)
>>>>>>> fa7dcd31af29a255a9a0720ebf3cfc7576232ab1
