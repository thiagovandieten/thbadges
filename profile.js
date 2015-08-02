var http = require("http");

function printMessage(username, badges, points) {
  var message = username + " has " + badges + " total badge(s) and " + points + " points in JS";
  console.log(message);
};

function printError(error) {
  console.log("Got error: " + error.message );
};

function get(username) {
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var BODY = "";
  //Lees Data
    response.on('data', function (chunk) {
      BODY += chunk;
    });

    response.on('end', function() {
      if(response.statusCode === 200) {
        try {
          //Parse data
          var profile = JSON.parse(BODY);
          //Print Data out
          printMessage(profile.name, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          printError(error.message); 
        }
      } else {
        //Status code error
        printError({message: http.STATUS_CODES[response.statusCode]}); 
      }
    });
  });

  request.on('error', function(e) {
    printError(e); 
  });

};

module.exports.get = get;

