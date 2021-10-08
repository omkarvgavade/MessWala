const express = require('express')
const connect = require('./config/db')


const usersController = require('./controllers/user.controller')
const app = express();
const cors = require("cors")
app.use(cors())

app.use(express.json())


app.use("/users", usersController)
app.listen(8000, async function () {
    await connect()
    console.log("listening on port 8000")
});