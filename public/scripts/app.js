"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var stringCount = localStorage.getItem("count");
                //the param 10 is base 10 
                var count = parseInt(stringCount, 10);

                //if count is a number then set the count value as the new state for local storage 
                if (!isNaN(count)) {
                    this.setState(function () {
                        return { count: count };
                    });
                }
            } catch (e) {
                //do nothing
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                //set new count value in local storage if the value has changed
                localStorage.setItem("count", this.state.count);
                console.log("componentDidUpdate");
            }
        }
    }, {
        key: "handleAddOne",
        value: function handleAddOne() {
            // setState is a React component fucntion. 
            //prevState is the params used to access the previous state of the var count used below. 
            //this rerenders the count var and changes state in the UI, without having to use function calls all the time.
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "handleMinusOne",
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "handleReset",
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
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
                    "Count: ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleAddOne },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleMinusOne },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleReset },
                    "Reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));

// let count = 0;

// const addOne = () => {
//     count += 1;
//     renderCountApp()
// };

// const minusOne = () => {
//     count -= 1;
//     renderCountApp();    
// };

// const reset = () => {
//     count = 0;
//     renderCountApp();    
// };

// const appRoot = document.getElementById("app");

// const renderCountApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     //render the var template in the appRoot id tag 
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCountApp();
