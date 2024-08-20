const express=require("express")

const app =express()
//application -level middleware
// app.use(()=>{
//     console.log("hi");
// })
// app.use("/",(req,res,next)=>{
//     console.log("this is initial function");
// })
// app.use("/",(req,res,next)=>{
//     console.log("this is 2nd function");
// })
// function ThirdMid(req,res,next){
//     console.log("this is 3rd middleware");  
// }
// app.use("/",ThirdMid,(req,res)=>{
//     console.log("this is last function ")
//     res.send("Hello world")
// })


//Router-level-middleware

// let userRouter=express.Router()

// let studentRouter=express.Router()

// app.use("/user",userRouter) //user Router
// app.use("/student",studentRouter) //student Router

// userRouter.get("/",(req,res)=>{
//     console.log("hi");
//     res.send("this is a userRouter get method")
// })
// userRouter.get("/user",(req,res)=>{
//     console.log("This from userRouter get method")
//    res.send("this is from user path")
//  })
// userRouter.get("/address",(req,res)=>{
//     console.log("this is address api")
//     res.send({address:"Odisha"})
// })
// studentRouter.get("/",(req,res)=>{
//     res.send("this is from student router")
// })

//Error-handling middleware
app.use((err,req,res,next)=>{
    //to handle error
    res.send(err.message)
})

app.get("/",(req,res)=>{
    throw new Error("Can't process right now")
    // res.send("hi")
})
app.listen(4000,"127.0.0.4",()=>{
    console.log("server is running in http://127.0.04:4000");
})