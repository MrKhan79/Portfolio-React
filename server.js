const express = require("express")
require("dotenv").config
const cors = require("cors")
const path = require("path")
const contactRoute = require('./route/contactRoute')

const app = express();

//The middleware
app.use(express.json())
app.use(cors())

app.use("/", contactRoute)


const port = process.env.PORT || 5000;

app.listen(port, console.log('server listening to port 5000 only'));
