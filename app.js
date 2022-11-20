const express  = require("express")
const getAllSquirrels = require("./dynamo").getAllSquirrels
const getSquirrelById = require("./dynamo").getSquirrelById
const app = express()

const port = process.env.port || 3000

//all of the express routes will go in here

app.get("/squirrels", async (req,res) =>{
    const data  = await getAllSquirrels()
    res.json(data.Items)
    res.end()
})

app.get("/squirrels/:id", async (req,res) => {
    const data = await getSquirrelById(parseInt(req.params.id))
    console.log(parseInt(req.params.id))
    res.json(data)
    res.end()
})

app.listen(port, ()=>{
    console.log("listening on " + port)
})