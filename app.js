//Problem: We need a simple way to look at a user's badge count and JS points.
//Solution: use Nods.js to connect to Treehouse's API to get profile's info to print out
var profile = require("./profile.js");
users = process.argv.slice(2);

//Check the profile's for each argument, else default to my own(thiagovandieteN)
if(users.length > 0) {
	users.forEach(function(val, index, array) {
		profile.get(val);
	});
} else {
	profile.get("thiagovandieten");
}



//Plan: Connect to API URL: http://teamtreehouse.com/thiagovandieten.json

//Parse data
//Print Data out