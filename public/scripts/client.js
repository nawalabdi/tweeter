/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

//function that escapes 
$(document).ready(function() {
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // timeago function implemented below captures how long ago tweet was added
  
  const createTweetElement = function(tweetData) {
    const $tweet = $(`
    <article class="tweet">
    <header> 
      <div class ="image">
        <img src=" ${tweetData.user.avatars}" alt="avatar">
        <p> ${tweetData.user.name} </p>
      </div>
      <p> ${tweetData.user.handle}</p>
    </header>
    <p class = "tweet-wrap">
    ${escape(tweetData.content.text)}
    </p>
    <hr/>
    <footer >
    <p class ="date"> ${timeago.format(tweetData.created_at)}</p>
    <div>
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-sharp fa-solid fa-heart"></i>
    </div>
    </footer >
    </article>`

    );
    return $tweet;

  };

   // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  const renderTweets = function(tweets) {
    $("#tweet-container").empty();
    for (const item of tweets) {
      const $tweet = createTweetElement(item);
      $(`#tweet-container`).prepend($tweet);
    }
  };


  const loadTweets = function() {
    $.get("/tweets", function (data) {
      renderTweets(data);
    });

  };
  loadTweets();


  // can escape character here
  $("#my-form").on("submit", function(event) {
    event.preventDefault();
    $('#errorMessage').slideUp("slow");
    const tweetLength = $('#tweet-text').val().length;
    

    console.log(tweetLength)
    if (!tweetLength) {
      $('#errorMessage').text("Tweet cannot be empty!");
      $('#errorMessage').slideDown("slow");
      return;

    }

    if (tweetLength >= 141) {
      $('#errorMessage').text("Tweet can't be longer than 140 characters!");
      $('#errorMessage').slideDown("slow");
      return;

    } 
    const formData= ($(this).serialize());
    $.ajax({
      type: "POST",
      url: '/tweets/',
      data: formData,
      success: function() {
        $('#tweet-text').val('');
        loadTweets();
        $('.counter').val('140');
      },
    });

    

  });
});




