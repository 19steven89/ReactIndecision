import React from "react";
import Option from "./Option.js";

const Options = (props) => (
    //use the JS method bind to bind the "this" keyword to be in the same context as the this keyword used below
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>

                <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>

            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
            {
                //add the options from the array to the list displayed to the user using the prop defined above in the IndecisionApp class
                props.options.map((option, index) => (
                    //imported Option to use the Option component below
                    <Option 
                        key ={option} 
                        optionText={option}
                        count={index+1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            )}
        </div>
);

export default Options;