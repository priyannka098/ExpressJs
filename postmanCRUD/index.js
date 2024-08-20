const express=require('express')

const app=express()
const PORT=5000
const hostname='127.0.0.3'

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//API
app.get('/',(req,res)=>{
    res.send("server is working")
})

//listen
app.listen(PORT,hostname,()=>{
    console.log(`server is running at http://${hostname}:${PORT}`)
})