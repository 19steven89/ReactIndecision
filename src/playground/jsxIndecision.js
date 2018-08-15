console.log("App.js is running");

const app = {
    title: "Indecision App",
    subtitle: "Live Forever",
    options: []
};

//e param is the event
const onFormSubmit = (e) => {
    e.preventDefault();
    //e.target points to the element that the event was started on 
    const option = e.target.elements.option.value;

    if(option){
        //add the value to the array to be displayed to the user
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }else{

    }
    
};

const onRemoveAll = () => {
    //clear the array
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * (app.options.length));
    const option = app.options[randomNum];

    alert(option);
};

const renderApp = () => {
    // if app.subtitle exists then display the subtitile using && operator
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? "Here are your options" : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>            
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
               {
                   //add the options from the array to the list displayed to the user
                   app.options.map((option) => <li key={option}>{option}</li>)
               }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
//render app on startup
renderApp();