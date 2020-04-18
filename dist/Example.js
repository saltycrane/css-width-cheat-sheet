"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var CodeBlock_1 = __importDefault(require("./CodeBlock"));
var LabelOverlay_1 = __importDefault(require("./LabelOverlay"));
var Row_1 = __importDefault(require("./Row"));
var Spacer_1 = __importDefault(require("./Spacer"));
var constants_1 = require("./constants");
var dedent_1 = __importDefault(require("./dedent"));
exports.examplePageCss = "\n  .cntr {\n    border: 1px solid " + constants_1.colors.gray400 + ";\n    padding: 2rem;\n  }\n  .cont {\n    background-color: " + constants_1.colors.white + ";\n    border: 1px solid " + constants_1.colors.gray400 + ";\n    display: block;\n    height: 60px;\n    width: 120px;\n  }\n  .expl {\n    border: 1px solid " + constants_1.colors.blue + ";\n    padding: 2rem;\n  }\n";
function Example(props) {
    var _a = props.dedentSpaces, dedentSpaces = _a === void 0 ? 8 : _a, id = props.id;
    var containerCss = "#container-" + id + " {" + dedent_1["default"](props.containerCss, dedentSpaces) + "}";
    var exampleCss = "#example-" + id + " {" + dedent_1["default"](props.exampleCss, dedentSpaces) + "}";
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("b", { id: id }, props.heading),
            " - ",
            props.description),
        react_1["default"].createElement(Spacer_1["default"], { y: 4 }),
        react_1["default"].createElement(LabelOverlay_1["default"], { id: id },
            react_1["default"].createElement("style", { dangerouslySetInnerHTML: {
                    __html: containerCss + "\n" + exampleCss
                } }),
            react_1["default"].createElement("div", { className: "cntr", id: "container-" + id },
                react_1["default"].createElement("div", { className: "expl", id: "example-" + id },
                    react_1["default"].createElement("div", { className: "cont" })))),
        react_1["default"].createElement(Spacer_1["default"], { y: 3 }),
        react_1["default"].createElement(Row_1["default"], null,
            react_1["default"].createElement(CodeBlock_1["default"], null, containerCss),
            react_1["default"].createElement(CodeBlock_1["default"], null, exampleCss)),
        react_1["default"].createElement(Spacer_1["default"], { y: 5 })));
}
exports["default"] = Example;