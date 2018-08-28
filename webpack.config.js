//the 2 things than must be done for webpack to run are the following; 
// entry: app.js in src folder
// output the final bundle file in this file!

const path = require("path");
//absolute path of the curent working directory from this file concat with the public folder to access the app.js file
//console.log(path.join(__dirname, "public"));

module.exports = {
    // entry is the file that gets loaded and executed
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js" 
    }
};
