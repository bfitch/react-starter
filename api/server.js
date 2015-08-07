import poylfill from "babel/polyfill";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
const app    = express();
const port   = process.env.PORT || 8081;
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use("/api", router);

router.post("/messages", function(req, res, next) {
  let messages = require("../fixtures/message");
  messages.push(req.body);
  res.json(messages.pop());
  next();
});

router.get("/messages", function(req, res) {
  let messages = require("../fixtures/message");
  res.json({messages: messages});
});

router.delete("/messages/:id", function(req, res, next) {
  let messages = require("../fixtures/message");
  let i = messages.findIndex(message => message.id === parseInt(req.params.id));
  messages.splice(i, 1);
  res.json({});
  next();
});

router.put("/messages/:id", function(req, res, next) {
  let messages = require("../fixtures/message");
  let i = messages.findIndex(message => message.id === parseInt(req.params.id));
  messages[i] = Object.assign(messages[i], req.body);
  res.json(messages[i]);
  next();
});

router.get("/messages/:id", function(req, res) {
  let messages = require("../fixtures/message");
  let msg = messages.find(message => message.id === parseInt(req.params.id));
  res.json(msg);
});

app.listen(port);
console.log("Magic happens on port " + port);
