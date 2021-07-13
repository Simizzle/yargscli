const fs = require("fs");
let movieList = [];
const { add, remove, list, update } = require("./utils");

try {
  let tempJson = fs.readFileSync("./netflix.json");
  let tempNetflix = JSON.parse(tempJson);
  movieList.push(tempNetflix);
} catch (error) {
  movieList = [];
}

add(movieList);
remove(movieList);
list(movieList);
update(movieList);

// node src/app.js add --movie "Captain America" --actor "Chris Evans" <- this is how you write a command line