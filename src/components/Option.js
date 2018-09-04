import React from "react";

const Option = (props) => (
    // add the optiontext prop defined in the parent class: Options defined above, used to display each option to the user
         <div>
            {props.optionText}
            <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}
                    >Remove</button>
         </div>
);

export default Option;