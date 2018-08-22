"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//used as a React component called from the jsx const below. Components must begin with upper case.
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        //set up binding for "this" to be used within the render function below
        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {

            if (!option) {
                // if option is empty string propmt user to enter valid value
                return "Enter Valid Value to Add Item";
            } else if (this.state.options.indexOf(option) > -1) {
                // if option exists in array already propmt user of invalid entry. 
                // -1 would mean it doesn't exist in the array at all
                return "This option already exists";
            }

            this.setState(function (prevState) {
                return {
                    // add the new option the user enters to the array using prevState to concat the new value
                    // and return the new array with the added option value
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subtitle = "Put your life in the hands of a computer";

            // render the components listed below as children on the IndecisionApp as nested components 
            return (
                // component to handle access the method via "this"     
                React.createElement(
                    "div",
                    null,
                    React.createElement(Header, { title: title, subtitle: subtitle }),
                    React.createElement(Action, { hasOptions: this.state.options.length > 0,
                        handlePick: this.handlePick }),
                    React.createElement(Options, {
                        options: this.state.options,
                        handleDeleteOptions: this.handleDeleteOptions }),
                    React.createElement(AddOption, {
                        handleAddOption: this.handleAddOption })
                )
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handlePick,
                disabled: !props.hasOptions },
            "What Should I Do?"
        )
    );
};

var Options = function Options(props) {
    //use the JS method bind to bind the "this" keyword to be in the same context as the this keyword used below
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All"
        ),

        //add the options from the array to the list displayed to the user using the prop defined above in the IndecisionApp class
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
    );
};

var Option = function Option(props) {
    // add the optiontext prop defined in the parent class: Options defined above, used to display each option to the user
    return React.createElement(
        "div",
        null,
        props.optionText
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            // by default no error exists by ading an option to the arra in the handleAddOption function above
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            //e.target is the form element, then into its elements to target the option value input by user
            var option = e.target.elements.option.value.trim();
            // pass in the option text input by the user to the function above to be added to the optiosn array
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return (
                // call handleAddOption mathod defined just above. within the if statement call handleAddOption
                // from the IndecisionApp class
                // if the error exists then output error msg returned from handleAddOption from IndecisionApp
                React.createElement(
                    "div",
                    null,
                    this.state.error && React.createElement(
                        "p",
                        null,
                        this.state.error
                    ),
                    React.createElement(
                        "form",
                        { onSubmit: this.handleAddOption },
                        React.createElement("input", { type: "text", name: "option" }),
                        React.createElement(
                            "button",
                            null,
                            "Add Option"
                        )
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

;

// const User = (props) => {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
