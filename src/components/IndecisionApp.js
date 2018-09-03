import React from "react";
import AddOption from "./AddOption.js";
import Action from "./Action.js";
import Header from "./Header.js";
import Options from "./Options.js";

//used as a React component called from the jsx const below. Components must begin with upper case.
export default class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        //set up binding for "this" to be used within the render function below
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    //react lifecycle method
    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
    
            if(options){
                //set local storage if options exist within the array
                this.setState(() => ({options}));
            } 
        }catch(e){
            //do nothing at all. Try block is used to add items to local storage only if the data is valid.
        }  
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            //save the array options to local storage to keep the items in the array when app is closed
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("componentDidUpdate");
        }        
    }

    //set the options array to [] if the user clicks removeAll button
    handleDeleteOptions(){
        this.setState(() => ({options: [] }));
    }

    handleDeleteOption(optionToRemove){
        //console.log("HDO", option);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * (this.state.options.length));
        var option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){

        if(!option){
            // if option is empty string propmt user to enter valid value
            return "Enter Valid Value to Add Item";
        }else if(this.state.options.indexOf(option) > -1){
            // if option exists in array already propmt user of invalid entry. 
            // -1 would mean it doesn't exist in the array at all
            return "This option already exists";
        }

        // add the new option the user enters to the array using prevState to concat the new value
        // and return the new array with the added option value
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        // render the components listed below as children on the IndecisionApp as nested components 
        return (
                // component to handle access the method via "this"     
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}/>
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}/>
                <AddOption
                handleAddOption={this.handleAddOption}/>
             </div>
        );
    }
}