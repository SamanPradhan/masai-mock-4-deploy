const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connection } = require("./config/db");
const { Router } = require("./routes/router");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api", Router);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DATABASE");
  } catch (error) {
    console.log("Can't connect to DATABASE");
  }
  console.log("server is running at ", PORT);
});
