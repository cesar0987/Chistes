const moongoose = require("mongoose");

const JokesSchema = new moongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup is required"],
    minlength: [10, "Setup must be at least 10 characters long"],
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required"],
    minlength: [3, "Punchline must be at least 3 characters long"],
  },
});

const Jokes = moongoose.model("Jokes", JokesSchema);

module.exports = Jokes;
