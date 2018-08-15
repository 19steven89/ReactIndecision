console.log("App is running");
let vizibility = false;

const show = () => {
    vizibility = !vizibility;
    renderPage();
};

const renderPage = () => {
    const template = (
        <div>
            <h1>Vizibility Toggle</h1>
            <button onClick={show}>{vizibility ? "Hide Details" : "Show Details"}</button>
            {vizibility && <p>Hey, these are the details!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderPage();