//used as a React component called from the jsx const below. Components must begin with upper case.
class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        //set up binding for "this" to be used within the render function below
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
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

        this.setState((prevState) => {
            return {
                // add the new option the user enters to the array using prevState to concat the new value
                // and return the new array with the added option value
                options: prevState.options.concat(option)  
            };
        });
        
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        // render the components listed below as children on the IndecisionApp as nested components 
        return (
                // component to handle access the method via "this"     
            <div>
                <Header title ={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}/>
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption
                handleAddOption={this.handleAddOption}/>
             </div>
        );
    }
}

class Header extends React.Component {
    render() {        
        return (
            <div>
             <h1>{this.props.title}</h1>
             <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
};

class Action extends React.Component{

    render(){
        return (
            <div>
                <button onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}>
                What Should I Do?</button>
            </div>
        );
    }
};

class Options extends React.Component{  

    render(){
        //use the JS method bind to bind the "this" keyword to be in the same context as the this keyword used below
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>

                {
                    //add the options from the array to the list displayed to the user using the prop defined above in the IndecisionApp class
                    this.props.options.map((option) => <Option key ={option} optionText={option} />)
                }
            </div>
        );
    };
};

class Option extends React.Component{
    render() {
        // add the optiontext prop defined in the parent class: Options defined above, used to display each option to the user
        return (
             <div>
                {this.props.optionText}
             </div>
        );
    }
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            // by default no error exists by ading an option to the arra in the handleAddOption function above
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        //e.target is the form element, then into its elements to target the option value input by user
        const option = e.target.elements.option.value.trim();
        // pass in the option text input by the user to the function above to be added to the optiosn array
        const error = this.props.handleAddOption(option);

        this.setState(() => {return {error} });
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

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));