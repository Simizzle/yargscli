const fs = require("fs");
const yargs = require("yargs");
const command = process.argv[2];

exports.add = (movieList) => {
  if (command === "add") {
    const entry = { title: yargs.argv.movie, actor: yargs.argv.actor };
    movieList.push(entry);
    console.log(movieList);
    let stringMovieList = JSON.stringify(movieList.flat(1));
    fs.writeFileSync("./netflix.json", stringMovieList);
    console.log(movieList);
  }
};


