const cors = require("cors");
const express = require("express");
const apiRouter = require("./routes");
const bodyParser = require("body-parser");

const app = express();
let port = process.env.PORT || "8080";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", apiRouter);

app.listen(port || "8080", () => {
  console.log(`Server is running on port: ${port}`);
});
