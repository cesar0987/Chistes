const Jokes = require("../models/jokes.models");

module.exports.findAllJokes = (req, res) => {
  Jokes.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
  Jokes.findOne({ _id: req.params.id })
    .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Jokes.create(req.body)
    .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Jokes.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
