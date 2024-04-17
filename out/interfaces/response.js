"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendApiResponse = void 0;
var sendApiResponse = function (res, success, message, data) {
    var response = {
        success: success,
        message: message || (success ? 'Request successful' : 'Request failed'),
        data: data,
    };
    res.json(response);
};
exports.sendApiResponse = sendApiResponse;
//# sourceMappingURL=response.js.map