const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors0ptions = {
  origin: "*",
  credentials: true,
  optionSuccesStatus: 200,
};

app.use(cors(cors0ptions));
app.use("/", router);

const port = 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
