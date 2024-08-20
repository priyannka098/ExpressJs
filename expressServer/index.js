const express= require("express")
const {join} =require("path");
const {abort}=require("process");

//server initilalization 
// const path=require("path")
const app=express()
const PORT=5000;
const hostname="127.0.0.5"
app.use(express.static(join(__dirname,"public")))
app.use(express.json())

//API
app.get("/",(req,res)=>{
    // res.write("hello Express js")
    // res.end()
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.get("/index.css",(req,res)=>{
    console.log("hi");
    
    res.sendFile(path.join(__dirname,"public","css","index.css"))
})

app.get("/form.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","js","form.js"))
})

app.get("/about",(req,res)=>{
    res.send("<h1>This is about page</h1>")
})

app.get("/getStudent",(req,res)=>{
    let student={
        name:"Virat",age:35,
        address:"Delhi"
    }
    // res.send(student)
    res.json(student)
})

app.post("/postData",(req,res)=>{
    console.log(req.body) //to get body data
    console.log(req.headers);//to get all headers
    let student=req.body
    res.send({message:"data received"})
})

// app.get("/contact",(req,res)=>{
//     res.send("<h1>this is contact pages</h1>")
// })
//listen to the  PORT and hostname
app.listen(5000,"127.0.0.7",()=>{
    console.log("server is starting at http://127.0.0.7:5000");

})
