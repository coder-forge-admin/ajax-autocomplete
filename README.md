# ajax-autocomplete

Search for strings, parse response and add to search input as an autocomplete dropdown list.

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
