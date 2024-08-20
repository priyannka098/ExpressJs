const express= require("express")
const app=express()
const PORT=9000
const hostname="127.0.0.9"
//middleware for naormal data
app.use(express.json())

//middleware for url data
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("HELLO FROM EXPRESS SERVER")
})
app.get("/msg",(req,res)=>{
    res.status(200).send("Postman is working successfully")
})
app.post("/data",(req,res)=>{
    res.send("API is working")
})
app.post("/urldata",(req,res)=>{
    console.log(req.body)
    res.send("Data Received");
})
//query
 app.get("/query",(req,res)=>{   
console.log(req.query);
res.send(req.query)             
 })
 //params

app.get("/data/:id",(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})



app.listen(PORT,hostname,()=>{
    console.log(`server satrted at http://${hostname}:${PORT}`)
})
