// YOUR CODE GOES HERE
var page_num = 1;

// $(".more-sprouts").on("scroll", function(event) {
  $(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      page_num += 1;
      var request = $.ajax({
        method: "GET",
        url: "/tweets.json?page=" + page_num
      });

      request.done(function(data) {
      data.forEach(function(tweet) {
        $('.tweets').append("<li class='tweet'>" + "<div class='body'>" + tweet['text'] + "</div>" + "<div class='user'>" + tweet['username'] + "</div>" + "</li>");
      });

    });


  };

});
