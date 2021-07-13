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

exports.remove = (movieList) => {
  if (command === "remove") {
    const remove = { title: yargs.argv.movie, actor: yargs.argv.actor };
    movieList[0].splice(remove, 1);
    let stringMovieList = JSON.stringify(movieList.flat(1));
    fs.writeFileSync("./netflix.json", stringMovieList);
  }
};

exports.list = (movieList) => {
  if (command === "list") {
    console.log(movieList);
  }
};

exports.update = (movieList) => {
  if (command === "update") {
    const update = { title: yargs.argv.movie, actor: yargs.argv.actor };
    target = process.argv[3];
    newMovie = process.argv[4];
    movieList[0].splice(update)
    for (let i = 0; i < movieList.length; i++) {
      if (target == movieList[i].movie) {
        movieList[i].movie = newMovie;
        let stringMovieList = JSON.stringify(movieList).flat(1);
        fs.writeFileSync("./netflix.json", stringMovieList);
        console.log(movieList);
        // console.log(`You have set the status of ${target} to ${newMovie}`)
      }
    }
  }
};
