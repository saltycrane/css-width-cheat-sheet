"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var CodeBlock_1 = require("./CodeBlock");
var CodeRow_1 = require("./CodeRow");
var WidthExample_1 = __importStar(require("./WidthExample"));
var LabelOverlay_1 = require("./LabelOverlay");
function CssWidthCheatSheet() {
    var miscCss = "\n    #cwcs a {\n      border-bottom: 1px dotted;\n    }\n    #cwcs ul {\n      margin-left: 10px;\n    }\n  ";
    var pageCss = miscCss +
        CodeBlock_1.codeBlockCss +
        CodeRow_1.codeRowCss +
        LabelOverlay_1.labelOverlayPageCss +
        WidthExample_1.widthExamplePageCss;
    return (react_1["default"].createElement("div", { id: "cwcs" },
        react_1["default"].createElement("style", { dangerouslySetInnerHTML: { __html: pageCss } }),
        react_1["default"].createElement("p", null,
            "In CSS, I'm often confused about when an element expands to the width of its container and when it adjusts to the width of its content. I made some experiments to test the CSS behavior in various conditions. The script to generate the experiments is",
            " ",
            react_1["default"].createElement("a", { href: "https://github.com/saltycrane/css-width-cheat-sheet" }, "on github"),
            " ",
            "and the results are shown below."),
        react_1["default"].createElement("div", null,
            "By default, elements expand to the ",
            react_1["default"].createElement("b", null, "width of their container"),
            " when they are"),
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#101" }, "block elements in block containers")),
            react_1["default"].createElement("li", null,
                "elements in ",
                react_1["default"].createElement("a", { href: "#102" }, "flex column containers")),
            react_1["default"].createElement("li", null,
                "elements in ",
                react_1["default"].createElement("a", { href: "#103" }, "grid containers"))),
        react_1["default"].createElement("div", null,
            "By default, elements adjust to ",
            react_1["default"].createElement("b", null, "width of their content"),
            " when they are"),
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#201" }, "inline elements in block containers")),
            react_1["default"].createElement("li", null,
                "elements in ",
                react_1["default"].createElement("a", { href: "#202" }, "flex row containers")),
            react_1["default"].createElement("li", null,
                "elements that are ",
                react_1["default"].createElement("a", { href: "#203" }, "absolutely positioned")),
            react_1["default"].createElement("li", null,
                "elements that are ",
                react_1["default"].createElement("a", { href: "#204" }, "floated"))),
        react_1["default"].createElement("div", null,
            "Some elements can be made to expand to the",
            " ",
            react_1["default"].createElement("b", null, "width of their container"),
            " by"),
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#104" }, "setting their width"),
                " ",
                react_1["default"].createElement("a", { href: "#105" }, "to 100%"),
                " ",
                "(tip: if there are intermediate elements, their width may need to be set to 100% also)"),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#106" },
                    "setting ",
                    react_1["default"].createElement("code", null, "flex-grow")),
                " ",
                "for flex row containers")),
        react_1["default"].createElement("div", null,
            "Some elements can be made to adjust to the ",
            react_1["default"].createElement("b", null, "width of their content"),
            " ",
            "by"),
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#205" },
                    "using ",
                    react_1["default"].createElement("code", null, "fit-content")),
                " ",
                "(not supported by IE)"),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#206" },
                    "setting ",
                    react_1["default"].createElement("code", null, "align-items")),
                " ",
                "to something other than ",
                react_1["default"].createElement("code", null, "stretch"),
                " for elements in flex column containers"),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("a", { href: "#207" },
                    "setting ",
                    react_1["default"].createElement("code", null, "justify-items")),
                " ",
                react_1["default"].createElement("a", { href: "#208" },
                    "or ",
                    react_1["default"].createElement("code", null, "justify-self")),
                " ",
                "to something other than ",
                react_1["default"].createElement("code", null, "stretch"),
                " for elements in grid containers")),
        react_1["default"].createElement("h4", { id: "see-also" }, "See also"),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("ul", { className: "list-inline" },
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/display" }, "MDN documentation on display")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/width" }, "MDN documentation on width")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "https://www.w3.org/TR/css-display-3/#the-display-properties" }, "CSS specification on display")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "https://www.w3.org/TR/css-sizing-3/" }, "CSS specification on sizing")))),
        react_1["default"].createElement("h4", { id: "by-container" }, "Examples - width determined by container"),
        react_1["default"].createElement(WidthExample_1["default"], { heading: "Block elements", description: "block elements expand to the width of their container by default", id: "101", containerCss: "\n          display: block;  /* default */\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: "Flex column container", description: react_1["default"].createElement(react_1["default"].Fragment, null, "if the container is a flex column, then elements will expand to the width of the container by default"), id: "102", containerCss: "\n          display: flex;\n          align-items: normal;  /* default - behaves like stretch in this case */\n          flex-direction: column;\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: "Grid container", description: "elements will expand to the width of a grid container by default", id: "103", containerCss: "\n          display: grid;\n          justify-items: normal;  /* default - behaves like stretch in this case */\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: "Inline elements, width 100%", description: "inline elements will expand to the width of their container if width is set to 100%", id: "104", containerCss: "\n          display: block;  /* default */\n          width: 600px;\n        ", exampleCss: "\n          display: inline-block;\n          width: 100%;\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: "Flex row container, width: 100%", description: react_1["default"].createElement(react_1["default"].Fragment, null,
                "by default, block elements in a flex container will not expand to the width of the container. Setting ",
                react_1["default"].createElement("code", null, "width: 100%"),
                " will cause it to expand."), id: "105", containerCss: "\n          display: flex;\n          flex-direction: row;  /* default */\n          justify-content: normal;  /* default - behaves as flex-start in this case */\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n          width: 100%;\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: "Flex row container, flex-grow: 1", description: react_1["default"].createElement(react_1["default"].Fragment, null,
                "by default, block elements in a flex container will not expand to the width of the container. But setting ",
                react_1["default"].createElement("code", null, "flex-grow: 1"),
                " ",
                "will cause it to expand.",
                " ",
                react_1["default"].createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" },
                    "MDN docs on ",
                    react_1["default"].createElement("code", null, "flex-grow")),
                "."), id: "106", containerCss: "\n          display: flex;\n          flex-direction: row;  /* default */\n          justify-content: normal;  /* default - behaves as flex-start in this case */\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n          flex-grow: 1;\n        " }),
        react_1["default"].createElement("h4", { id: "by-content" }, "Examples - width determined by content"),
        react_1["default"].createElement(WidthExample_1["default"], { heading: "Inline elements", description: "inline elements adjust to the width of their content by default", id: "201", containerCss: "\n          display: block;  /* default */\n          width: 600px;\n        ", exampleCss: "\n          display: inline-block;\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: react_1["default"].createElement(react_1["default"].Fragment, null, "Flex row container"), description: react_1["default"].createElement(react_1["default"].Fragment, null,
                "if the container uses ",
                react_1["default"].createElement("code", null, "display: flex"),
                ", the element will set its width to match its content even for block elements."), id: "202", containerCss: "\n          display: flex;\n          flex-direction: row;  /* default */\n          justify-content: normal;  /* default - behaves as flex-start in this case */\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: "Absolutely positioned", description: react_1["default"].createElement(react_1["default"].Fragment, null,
                "when ",
                react_1["default"].createElement("code", null, "position: absolute"),
                " is used, the element will adjust to the width of its content.",
                " ",
                react_1["default"].createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/position#Absolute_positioning" },
                    "MDN docs on ",
                    react_1["default"].createElement("code", null, "position: absolute")),
                "."), id: "203", containerCss: "\n          display: block;  /* default */\n          position: relative;\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n          position: absolute;\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: "Floated elements", description: react_1["default"].createElement(react_1["default"].Fragment, null,
                "elements that set ",
                react_1["default"].createElement("code", null, "float"),
                " adjust to the width of their content.",
                " ",
                react_1["default"].createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/float" },
                    "MDN docs on ",
                    react_1["default"].createElement("code", null, "float")),
                "."), id: "204", containerCss: "\n          display: block;  /* default */\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n          float: left;\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: react_1["default"].createElement(react_1["default"].Fragment, null,
                "Block elements, using ",
                react_1["default"].createElement("code", null, "fit-content")), description: react_1["default"].createElement(react_1["default"].Fragment, null,
                "block elements adjust to the width of their container by default but can use ",
                react_1["default"].createElement("code", null, "fit-content"),
                " to set their width to match that of their content.",
                " ",
                react_1["default"].createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/width" },
                    "MDN docs on ",
                    react_1["default"].createElement("code", null, "width")),
                ". NOTE: ",
                react_1["default"].createElement("code", null, "fit-content"),
                " is",
                " ",
                react_1["default"].createElement("a", { href: "https://caniuse.com/#feat=mdn-css_properties_width_fit-content" }, "not supported by IE"),
                "."), id: "205", containerCss: "\n          display: block;  /* default */\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n          width: fit-content;\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: react_1["default"].createElement(react_1["default"].Fragment, null,
                "Flex column container with ",
                react_1["default"].createElement("code", null, "align-items"),
                " set"), description: react_1["default"].createElement(react_1["default"].Fragment, null,
                "elements in a flex column container expand to the width of the container by default, but setting ",
                react_1["default"].createElement("code", null, "align-items"),
                " to something other than ",
                react_1["default"].createElement("code", null, "stretch"),
                " (e.g.",
                " ",
                react_1["default"].createElement("code", null, "flex-start"),
                "), causes the element to adjust to the width of its content.",
                " ",
                react_1["default"].createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" },
                    "MDN docs on ",
                    react_1["default"].createElement("code", null, "align-items")),
                "."), id: "206", containerCss: "\n          display: flex;\n          align-items: flex-start;\n          flex-direction: column;\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: react_1["default"].createElement(react_1["default"].Fragment, null,
                "Grid container, with ",
                react_1["default"].createElement("code", null, "justify-items"),
                " set"), description: react_1["default"].createElement(react_1["default"].Fragment, null,
                "if a grid container sets ",
                react_1["default"].createElement("code", null, "justify-items"),
                " to something other than ",
                react_1["default"].createElement("code", null, "stretch"),
                " (the default), then the element will set its width to match its content by default.",
                " ",
                react_1["default"].createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items" },
                    "MDN docs on ",
                    react_1["default"].createElement("code", null, "justify-items")),
                "."), id: "207", containerCss: "\n          display: grid;\n          justify-items: start;\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n        " }),
        react_1["default"].createElement(WidthExample_1["default"], { heading: react_1["default"].createElement(react_1["default"].Fragment, null,
                "Grid container, with ",
                react_1["default"].createElement("code", null, "justify-self"),
                " set"), description: react_1["default"].createElement(react_1["default"].Fragment, null,
                "if an element sets ",
                react_1["default"].createElement("code", null, "justify-self"),
                " to something other than",
                " ",
                react_1["default"].createElement("code", null, "stretch"),
                " (the default), inside a grid container, it will set its width to match its content by default.",
                " ",
                react_1["default"].createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self" },
                    "MDN docs on ",
                    react_1["default"].createElement("code", null, "justify-self")),
                "."), id: "208", containerCss: "\n          display: grid;\n          width: 600px;\n        ", exampleCss: "\n          display: block;  /* default */\n          justify-self: start;\n        " })));
}
exports["default"] = CssWidthCheatSheet;
