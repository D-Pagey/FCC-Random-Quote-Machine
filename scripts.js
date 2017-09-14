$(document).ready(function() {

  $.ajaxSetup ({cache:false});

  $("#getQuote").on("click", function() {

    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data) {

      $("#quote").html(data[0].content + " - " + data[0].title)

    });

  });

  $("#tweeter").on("click", function() {

// this is horrible code but I couldn't work out why my tweets were including the <p> tags.

    var tweet1 = $("#quote").html();
    var tweet2 = tweet1.replace("<p>", "");
    var tweet3 = tweet2.replace("</p>", "");

    window.open("https://twitter.com/intent/tweet?text=" + tweet3);

  });



});
