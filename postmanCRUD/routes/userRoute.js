const express= require('express')

const {userSignup,getUser,updateUser,deleteUser}=require('../controllers/userController')

const userRouter=express.Router()

userRouter.get("/",(req,res)=>{
    res.send("This is user route")
})

userRouter.post("/signup",userSignup)

userRouter.post("/getUser",getUser)

userRouter.put("/update/:mobile",updatedUser)
 userRouter.delete("/delete",deleteUser)


module.exports={userRouter,getUser,updatedUser,deleteUser}






