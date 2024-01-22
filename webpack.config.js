const path = require("path");

module.exports = {
    mode:"development",
   entry: {
    main:'./src/index.js',
    sub:"./src/strange.js"
   },
   output:{
    filename:"[name].bundle.js",
    path:path.join(__dirname,"dist")
 
}
}