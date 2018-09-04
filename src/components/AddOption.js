import React from "react";


export default class AddOption extends React.Component{

    state = {
           // by default no error exists by ading an option to the arra in the handleAddOption function above
           error: undefined
    };

    handleAddOption = (e) =>{
        e.preventDefault();
        //e.target is the form element, then into its elements to target the option value input by user
        const option = e.target.elements.option.value.trim();
        // pass in the option text input by the user to the function above to be added to the optiosn array
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error} ));

        if(!error){
            //clear the option text field input if the user enters a valid value into the options array
            e.target.elements.option.value = "";
        }
    }

    render(){
        return (
            // call handleAddOption mathod defined just above. within the if statement call handleAddOption
            // from the IndecisionApp class
            // if the error exists then output error msg returned from handleAddOption from IndecisionApp
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                </form>
            </div>
        );
    };
};