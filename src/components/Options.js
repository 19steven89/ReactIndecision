import React from "react";
import Option from "./Option.js";

const Options = (props) => (
    //use the JS method bind to bind the "this" keyword to be in the same context as the this keyword used below
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                //add the options from the array to the list displayed to the user using the prop defined above in the IndecisionApp class
                props.options.map((option) => (
                    //imported Option to use the Option component below
                    <Option 
                        key ={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            )}
        </div>
);

export default Options;