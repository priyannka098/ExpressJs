
 const express=require("express")
const {join} = require('path')

//to create server
const app=express()
//listen to the server
const PORT=7000
const hostname="localhost"
//setting the template engine
app.set("view engine", "ejs")
app.set("views",join(__dirname,"views","pages")) // if make  name to folderder other than views

//middlewares
app.use(express.json())//
app.use(express.static(join(__dirname,"views")))

// //api
// app.get("/",(req,res)=>{
//     res.render("index")
// })
app.get("/",(req,res)=>{
    res.render("index",{name:"Priyanka",age:"24",address:"Bangalore"})

})



app.get("/about",(req,res)=>{
    let user={name:"Virat",age:34,address:"Delhi"}
    let fruits=["apple","banana","mango","kiwi"]
    res.render("about",{user,fruits})
    
})




app.listen(PORT,hostname,()=>{
    console.log("server running in http://"+hostname +":"+PORT)
})
