var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require("request");
var movieName = process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

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
}else if (process.argv[2] === "movie-this") {
  request(queryUrl, function(err, response, body){
    if (!err && response.statusCode === 200){
      console.log("The movie was realeased in: " + JSON.parse(body).Year);
    }
  });

}
