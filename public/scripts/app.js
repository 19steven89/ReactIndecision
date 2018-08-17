"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("App is running");

var VizibilityToggle = function (_React$Component) {
    _inherits(VizibilityToggle, _React$Component);

    function VizibilityToggle(props) {
        _classCallCheck(this, VizibilityToggle);

        var _this = _possibleConstructorReturn(this, (VizibilityToggle.__proto__ || Object.getPrototypeOf(VizibilityToggle)).call(this, props));

        _this.handleToggleVizibility = _this.handleToggleVizibility.bind(_this);

        _this.state = {
            vizibility: false
        };
        return _this;
    }

    _createClass(VizibilityToggle, [{
        key: "handleToggleVizibility",
        value: function handleToggleVizibility() {
            this.setState(function (prevState) {
                return {
                    vizibility: !prevState.vizibility
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Vizibility Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleToggleVizibility },
                    this.state.vizibility ? "Hide Details" : "Show Details"
                ),
                this.state.vizibility && React.createElement(
                    "p",
                    null,
                    "Hey, these are the details!"
                )
            );
        }
    }]);

    return VizibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VizibilityToggle, null), document.getElementById("app"));
//renderPage();
