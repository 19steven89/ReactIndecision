console.log("App is running");

class VizibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVizibility = this.handleToggleVizibility.bind(this);

        this.state = {
            vizibility: false
        };
    }

     handleToggleVizibility(){
        this.setState((prevState) => {
            return{
                vizibility: !prevState.vizibility
            };
        });
    };

    render(){
        return (
            <div>
                <h1>Vizibility Toggle</h1>
                <button onClick={this.handleToggleVizibility}>{this.state.vizibility ? "Hide Details" : "Show Details"}</button>
                {this.state.vizibility && <p>Hey, these are the details!</p>}
            </div>
        );
    };
}


ReactDOM.render(<VizibilityToggle/>, document.getElementById("app"));
//renderPage();