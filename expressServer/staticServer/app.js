const express =require("express")
const {join}=require("path")

const app =express()

const PORT=5000
const hostname="127.0.0.5"

//middleware
//static folder  middleware
//json
app.use(express.json())

app.use(express.static(join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.sendFile(join(__dirname,"public","index.html"))
})

app.post("/send",(req,res)=>{
    console.log(req.body);
    res.send({message:"Data Received"})
})

app.get("/getdata",(req,res)=>{
    res.send({name:"Priyanka",age:27,address:"Bangalore"})
})


app.listen(PORT,hostname,()=>{
    console.log(`server running in http://${hostname}:${PORT}`);
})