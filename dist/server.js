"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _fixturesMessageJson = require("../fixtures/message.json");

var _fixturesMessageJson2 = _interopRequireDefault(_fixturesMessageJson);

var app = (0, _express2["default"])();
var port = process.env.PORT || 8081;
var router = _express2["default"].Router();

app.use((0, _cors2["default"])());
app.use(_bodyParser2["default"].urlencoded({ extended: true }));
app.use(_bodyParser2["default"].json());
app.use((0, _morgan2["default"])("combined"));

router.get("/", function (req, res) {
  res.json(_fixturesMessageJson2["default"]);
});

app.use("/api", router);

app.listen(port);
console.log("Magic happens on port " + port);
//# sourceMappingURL=server.js.map