const express = require("express");
const morgan = require("morgan"); //HTTP request logger middleware
const mongoose = require("mongoose");

const app = express(); //Tells express to log via morgan
const PORT = process.env.PORT || 5000;

app.use(morgan("dev")); //Morgan to log in the "dev" pre-defined format

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log(`App is listening on the following PORT: ${PORT}`);
});