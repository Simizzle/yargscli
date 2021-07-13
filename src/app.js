const fs = require("fs");
let movieList = [];
const { add } = require("./utils");

try {
  let tempJson = fs.readFileSync("./netflix.json");
  let tempNetflix = JSON.parse(tempJson);
  movieList.push(tempNetflix);
} catch (error) {
  movieList = [];
}

add(movieList);

// node src/app.js add --movie "Captain America" --actor "Chris Evans" <- this is how you write a command line