const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(json())
app.use(morgan())
app.use(cors())

module.exports = app 
