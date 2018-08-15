//used as a React component called from the jsx const below. Components must begin with upper case.
class IndecisionApp extends React.Component{
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["Thing One", "Thing Two", "Thing Four"];

        // render the components listed below as children on the IndecisionApp as nested components 
        return (
             <div>
                <Header title ={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
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
                <button>What Should I Do?</button>
            </div>
        );
    }
};

class Options extends React.Component{
    render(){
        return (
            <div>
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
    render(){
        return (
            <div>
                <p>AddOption Component Here</p>
            </div>
        );
    };
};

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));