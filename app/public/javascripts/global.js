
// our init / main function
$(document).ready(function documentIsReadyCallback(){

  // listen for 'keyup' events on input with id="searchBox"
  $('input#searchBox').on('keyup', function keyupCallback(){

    // create nice var for input#searchBox
    var $el = $(this),                                                          // $(this) represnets the element the event happend to, in this case input#searchBox
      val = $(this).val();                                                      // get the inputs val

    // send value to server
    // $.get( string url, object params, function callback )
    $.get(
      '/sample.json',                                                           // the target endpoing
      {
        query: val                                                              // add value as a query param to the server
      },
      function responseCallback(json, status, xhr){

        var $list = $('<ul/>')                                                  // we use jQuery to create an empty UL element
            .attr('class', 'cf-auto-complete')                                  // set its attributes (in this case the class)
            .css('position', 'absolute')                                        // the UL's css values dynamically
            .css('background', '#fff')                                          // ...
            .css('border', '1px solid #C0C0C0')
            .css('height', 250)
            .css('overflow', 'scroll')
            .css('width', '100%')

        // use jQuery to loop through all elements in the json object
        $.each(json, function(i, county){                                       // each element will be passed in the 2nd paramater

          var $el = $('<li/>')                                                  // create empty LI element
            .text(county.text);                                                 // set its text to the county name

          $list.append($el);                                                    // append LI element to UL element
        });

        $('#containerSearch').append($list);    // append UL element to the search parent div element

        $(',cf-auto-complete').on('mouseleave', function(el) {
          var $el = $(this);

          timer = setTimeout(function(){
            $el.remove()
          }, 1750);
        });

        $('.cf-auto-complete').on('mouseenter', function(){
          clearTimeout(timer);
        });
      });
    );
  });

  // samples of other events we can listen to
  $('#searchBox').on('keydown', function keydownCallback(){});
  $('#searchBox').on('keypress', function keypressCallback(){});
  $('#searchBox').on('focus', function focusCallback(){});
})
