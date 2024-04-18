const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv/config");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.options("*", cors());

// Middlewares
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limi: "50mb" }));
app.use(morgan("tiny"));

const cityRoutes = require("./routes/cityRoutes");
const vehicleRoutes = require("./routes/vechileRoutes");
const captureRoutes = require("./routes/captureRoutes");

const api = process.env.API_URL;

app.use(`${api}/cities`, cityRoutes);
app.use(`${api}/vechiles`, vehicleRoutes);
app.use(`${api}/capture`, captureRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
