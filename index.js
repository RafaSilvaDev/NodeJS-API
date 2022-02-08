const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

const defaultUrl = "http://localhost:21262";

const routes = require('./config/routes')

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes)

app.listen(21262, () => {
  console.log("Express started at " + defaultUrl);
});

axios
  .post(defaultUrl + "/add", {
    4: {
      nome: "Mário",
      idade: "33",
    },
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });