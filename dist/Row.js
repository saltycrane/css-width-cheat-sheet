"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
exports.rowCss = "\n  #cwcs .code-row {\n    display: grid;\n    grid-gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    width: 600px;\n  }\n";
function Row(_a) {
    var children = _a.children;
    return react_1["default"].createElement("div", { className: "code-row" }, children);
}
exports["default"] = Row;