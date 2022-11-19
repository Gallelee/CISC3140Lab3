const express  = require("express")
const app = express()

const port = process.env.port || 3000

//all of the express routes will go in here

app.listen(port, ()=>{
    console.log("listening on " + port)
})