/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const createTweetElement = function (tweetData) {
    const $tweet = $(`
    <article class="tweet">
    <header> 
      <div class ="image">
        <img src=" ${tweetData.user.avatars}" alt="avatar">
        <p> ${tweetData.user.name} </p>
      </div>
      <p> ${tweetData.user.handle}</p>
    </header>
    <p>
    ${tweetData.content.text}
    </p>
    <hr/>
    <footer >
      <p class ="date">  ${tweetData.created_at}</p>
      <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-sharp fa-solid fa-heart"></i>
    </div>
    </footer >
     </article>`

    )
    return $tweet;

  }
  const renderTweets = function (tweets) {
    $("#tweet-container").empty();
    for (const item of tweets) {
      const $tweet = createTweetElement(item);
      $(`#tweet-container`).prepend($tweet)
    }
  }
  

  const loadTweets = function() {
    $.get("/tweets", function(data){
      renderTweets(data)
      console.log(data);
    });
    
  }
  loadTweets()


  $("#my-form").on("submit", function (event) {
    event.preventDefault();
    const formData = ($(this).serialize());
    console.log("HELLO FROM JQUERY")
    
    $.ajax({
      type: "POST",
      url: '/tweets/',
      data:formData,
      success:() => {loadTweets()},
    })

  

    
  })
  
})





