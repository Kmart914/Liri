var twitter = require('twitter');
var keys = require('./keys.js');

console.log(client);

var client = new twitter(keys.twitterKeys);


if (process.argv[2] === "my-tweets"){
var params = {screen_name: process.argv[3]};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for(var i = 0; i <20; i++){
    console.log(tweets[i].text);
      }
    }
  });
}else {
}
