const express = require("express");
const app = express();
const contactUsRoute = require("./Contact");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const PORT = process.env.PORT || 4000;

//middlewares
app.use(
	cors({
		origin:"*",
		credentials:true,
	})
)

// Parse JSON bodies for POST requests
app.use(bodyParser.json());

//routes

app.use("/api/v1/reach", contactUsRoute);


//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

