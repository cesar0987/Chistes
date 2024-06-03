const Express = require("express");
const app = Express();
const JokesRoutes = require("./routes/jokes.routes");
const port = 8000;

require("./configuration/configuration.mongoose");

app.use(Express.json(), Express.urlencoded({ extended: true }));

JokesRoutes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
