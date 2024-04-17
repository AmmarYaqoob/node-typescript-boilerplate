"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var userservice_1 = require("../services/userservice");
var response_1 = require("../interfaces/response");
exports.default = {
    getUsers: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var content, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userservice_1.default.getUsers()];
                case 1:
                    content = _a.sent();
                    (0, response_1.sendApiResponse)(res, true, "Request Successfull", content);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    (0, response_1.sendApiResponse)(res, false, e_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getById: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, content, e_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    id = Number((_a = req.query) === null || _a === void 0 ? void 0 : _a.ID);
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, userservice_1.default.getById(id)];
                case 1:
                    content = _b.sent();
                    (0, response_1.sendApiResponse)(res, true, "Request Successfull", content);
                    _b.label = 2;
                case 2:
                    (0, response_1.sendApiResponse)(res, true, "Required ID");
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _b.sent();
                    (0, response_1.sendApiResponse)(res, false, e_2.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    createUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var userData, content, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userData = { UserName: req.body.UserName, Email: req.body.Email };
                    return [4 /*yield*/, userservice_1.default.createUser(userData)];
                case 1:
                    content = _a.sent();
                    (0, response_1.sendApiResponse)(res, true, "Request Successfull", content);
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    (0, response_1.sendApiResponse)(res, false, e_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    updateUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var a, ID;
        return __generator(this, function (_a) {
            a = { username: req.body.UserName, email: req.body.Email };
            ID = req.query.ID;
            return [2 /*return*/];
        });
    }); },
    deleteUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, content, e_4;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    id = Number((_a = req.query) === null || _a === void 0 ? void 0 : _a.ID);
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, userservice_1.default.deleteUser(id)];
                case 1:
                    content = _b.sent();
                    (0, response_1.sendApiResponse)(res, true, "Request Successfull", content);
                    _b.label = 2;
                case 2:
                    (0, response_1.sendApiResponse)(res, true, "Required ID");
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _b.sent();
                    (0, response_1.sendApiResponse)(res, false, e_4.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
};
//# sourceMappingURL=usercontroller.js.map