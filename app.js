const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.post("/add",(req,res)=>{
    res.send("tooooooooooo")
})

app.listen(8080,()=>{
    console.log("server started")
})