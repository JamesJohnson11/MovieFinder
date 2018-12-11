"use strict";

let express = require("express");
let app = express();


app.set('view engine', 'ejs');


// <Routes>

app.get("/", function(request, response) {
	response.render("pages/index");
});

// </Routes>

app.listen(3000, function() {
	console.log("Listening on port " + this.address().port);
});