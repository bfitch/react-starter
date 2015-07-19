import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
const app    = express();
const port   = process.env.PORT || 8081;
const router = express.Router();

import messages from "../fixtures/message.json";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"))

router.get("/", function(req, res) {
  res.json({"mama": "gaaaa"});
});

app.use("/api", router);

app.listen(port);
console.log("Magic happens on port " + port);
