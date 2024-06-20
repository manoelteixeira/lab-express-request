const express = require("express");
const pokemon = require("./models/pokemon.json");

// console.log(pokemon[0]);

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noum", (req, res) => {
  const { verb, adjective, noum } = req.params;
  const msg = `<h1>New Project Name Generator</h1><p>Congratulations on starting a new project called ${verb}-${adjective}-${noum}!</p>`;
  res
    .status(200)
    .send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noum}!`
    );
});

app.get("/bugs", (req, res) => {
  res
    .status(200)
    .send(
      `<p>99 little bugs in the code</p><a href="/bugs/101">pull one down, patch it around</a>`
    );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  let { numberOfBugs } = req.params;
  numberOfBugs = Number(numberOfBugs);
  if (numberOfBugs >= 200) {
    res.send(
      '<p>Too many bugs!! Start over!</p><a href="/bugs">pull one down</a>'
    );
  } else {
    res.send(
      `<p>${numberOfBugs} little bugs in the code</p><a href="/bugs/${
        numberOfBugs + 2
      }">pull one down, patch it around</a>`
    );
  }
});

app.get("/pokemon", (req, res) => {
  res.status(200).send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const search = pokemon.filter(
    (item) => item.name.toLowerCase() == name.toLocaleLowerCase()
  );
  res.status(200).send(search);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (indexOfArray >= pokemon.length) {
    res.status(404).send(`Sorry, no pokemon found at ${indexOfArray}`);
  } else {
    res.status(200).send(pokemon[indexOfArray]);
  }
});

module.exports = app;
