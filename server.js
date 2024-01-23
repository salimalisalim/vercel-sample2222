const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:"./config.env"});

app.use("/uploads",express.static("uploads"))

app.get("/api/home", (req,res)=>{
    res.send("Home route");
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port 4000");
})