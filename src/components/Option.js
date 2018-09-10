import React from "react";

const Option = (props) => (
    // add the optiontext prop defined in the parent class: Options defined above, used to display each option to the user
    // the button uses 2 css classes for styling. button and button--link   
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button className="button button--link"
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}
                    >Remove</button>
         </div>
);

export default Option;