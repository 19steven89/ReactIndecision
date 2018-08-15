let count = 0;

const addOne = () => {
    count += 1;
    renderCountApp()
};

const minusOne = () => {
    count -= 1;
    renderCountApp();    
};

const reset = () => {
    count = 0;
    renderCountApp();    
};

const appRoot = document.getElementById("app");

const renderCountApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    //render the var template in the appRoot id tag 
    ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();