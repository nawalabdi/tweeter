/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */








// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}



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
    for (const item of tweets) {
      const $tweet = createTweetElement(item);
      $(`#tweet-container`).append($tweet)
    }
  }


  renderTweets(data);

})



// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


