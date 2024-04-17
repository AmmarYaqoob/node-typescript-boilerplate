"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("./bootstrap/index");
var userroutes_1 = require("./routes/userroutes");
var ping_1 = require("./routes/ping");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
var bodyParser = express_1.default.json;
app.use(bodyParser());
(0, index_1.bootstrapDatabase)().then(function () {
    var port = process.env.PORT || 3001;
    app.use('/api/user', userroutes_1.default);
    app.use('/api/ping', ping_1.default);
    app.use('/', ping_1.default);
    app.listen(port, function () {
        console.log("Server is running at http://localhost:".concat(port));
    });
});
exports.default = app;
//# sourceMappingURL=index.js.map