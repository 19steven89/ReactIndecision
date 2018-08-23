//used as a React component called from the jsx const below. Components must begin with upper case.
class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        //set up binding for "this" to be used within the render function below
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
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

const Header = (props) => {
        return (
            <div>
             <h1>{props.title}</h1>
             {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
};

IndecisionApp.defaultProps = {
    options: []
};

//set up default value for the Header title value
Header.defaultProps = {
    title: "Indecision"
};

const Action = (props) => {
        return (
            <div>
                <button onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What Should I Do?</button>
            </div>
        );
};

const Options = (props) => {  
        //use the JS method bind to bind the "this" keyword to be in the same context as the this keyword used below
        return (
            <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.length === 0 && <p>Please add an option to get started!</p>}
                {
                    //add the options from the array to the list displayed to the user using the prop defined above in the IndecisionApp class
                    props.options.map((option) => (
                        <Option 
                            key ={option} 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )
                )}
            </div>
        );
};

const Option = (props) => {
        // add the optiontext prop defined in the parent class: Options defined above, used to display each option to the user
        return (
             <div>
                {props.optionText}
                <button 
                        onClick={(e) => {
                            props.handleDeleteOption(props.optionText);
                        }}
                        >Remove</button>
             </div>
        );
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));