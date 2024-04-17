"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pingcontroller_1 = require("../controllers/pingcontroller");
var router = express_1.default.Router();
router.get('/', pingcontroller_1.default.ping);
exports.default = router;
//# sourceMappingURL=ping.js.map