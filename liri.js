var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var twitterClient = new twitter(keys.twitterKeys);
var spotifyClient= new spotify(keys.spotifyKeys);


if (process.argv[2] === "my-tweets"){
var params = {screen_name: process.argv[3]};
twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for(var i = 0; i <20; i++){
    console.log(tweets[i].text);
      }
    }
  });
}else if (process.argv[2] === "spotify-this-song"){

spotifyClient.search({ type: 'track', query: process.argv[3]}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  } console.log(data);
});
}
