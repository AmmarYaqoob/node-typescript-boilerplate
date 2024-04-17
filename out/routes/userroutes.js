"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usercontroller_1 = require("../controllers/usercontroller");
var router = express_1.default.Router();
router.get('/', usercontroller_1.default.getUsers);
router.get('/:id', usercontroller_1.default.getById);
router.post('/', usercontroller_1.default.createUser);
router.put('/:id', usercontroller_1.default.updateUser);
router.delete('/:id', usercontroller_1.default.deleteUser);
exports.default = router;
//# sourceMappingURL=userroutes.js.map