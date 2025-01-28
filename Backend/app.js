 const express = require("express")
 const cors = require("cors")
 const app = express()
 app.use(cors()) 
 app.get("/", (req, res) => {
    res.send("Hello World")
 })
//  app.listen(PORT,()=>{
//     console.log(`Running the server on http://localhost:${PORT}`)
//  }) 
 module.exports = app;  