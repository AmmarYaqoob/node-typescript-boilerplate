"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var bootstrap_1 = require("../bootstrap");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(sequelize_1.Model));
User.init({
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Profile_Picture: {
        type: sequelize_1.DataTypes.STRING
    },
    Profile_Picture_Thumbnail: {
        type: sequelize_1.DataTypes.STRING
    },
    Address: {
        type: sequelize_1.DataTypes.STRING
    },
    City: {
        type: sequelize_1.DataTypes.STRING
    },
    State: {
        type: sequelize_1.DataTypes.STRING
    },
    Country: {
        type: sequelize_1.DataTypes.STRING
    },
    Phone: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Password: {
        type: sequelize_1.DataTypes.STRING
    },
    Role_ID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Is_Active: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Created_By: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Created_Date: {
        type: sequelize_1.DataTypes.STRING
    },
    Updated_By: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Updated_Date: {
        type: sequelize_1.DataTypes.STRING
    },
    Deleted_By: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Deleted_Date: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    sequelize: bootstrap_1.default,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
});
exports.default = User;
//# sourceMappingURL=user.js.map