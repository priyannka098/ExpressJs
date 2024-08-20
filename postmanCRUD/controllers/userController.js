const fs=require("fs")
const {join}=require("path")

//signup
    const userSignup= (req, res) => {
        // console.log(req.body);
        const { name, age, address, mobile } = req.body
        if (!name || !age || !address || !mobile) {
            res.status(400).send({ message: "Provide All Required Fields" })
        } else {
            let allUsers = JSON.parse(fs.readFileSync(join(__dirname, "..", "json", "users.json"), "utf-8"))
            let isUser = allUsers.find(e => e.mobile == mobile)
            if (isUser) {
                res.status(400).send({ message: "User Already Registered" })
            } else {
                allUsers.push({ name, age, address, mobile })
                fs.writeFileSync(join(__dirname, "..", "json", "users.json"), JSON.stringify(allUsers))
                res.status(201).send({ message: "User Registraion Successfull" })
            }
        }
    
    }


//getUser
const getUser=(req,res)=>{
    const{mobile}=req.body
    if(!mobile){
        return res.stattus(400).send({message:"Provide the require field"})
    } else{
        const allUsers=JSON.parse(fs.readFileSync(join(__dirname,"..","json","users.json"),"utf-8"))
        const user=allUsers.find(e=>e.mobile==mobile)
        if(user){
            return res.status(200).send(user)
    } 
    else{
        return res.status(401).send({message:"user is not registered"})
    }
    
}

//update
const updateUser=(req,res)=>{
    const{mobile}=req.params
    let allUsers=JSON.parse(fs.parse(fs.readFileSync(join(__dirname,"..",json,"user.json"),"utf-8")))
    let user=allUsers.find(e=>e.mobile==mobile)
    if(user){
        let updateData=req.body
        let updatedUser={...user,updatedData}
        allUsers=allUsers.map(e=>{
            if(e.mobile==updatedUser.mobile){
                return updatedUser
            }
            return e
        })
        fs.writeFileSync(join(__dirname,"..", "json","users.json"),JSON.stringify(allUsers))
        return res.status(200).send({message:"User updated"})
    }
    else{
        return res.status(404).send({message:"User not found"})
    }
}

//delete
const deletUser=(req,res)=>{
    //  console.log(req.query)
     const{mobile}=req.query
     if (mobile){
        let allUsers=JSON.parse(fs.readFileSync(join(__dirname,"..","json","users.json"),"utf-8"))
        let user=allUsers.find(e=>e.mobile==mobile)
        if(user){
            let updatedUsers=allUsers.filter(e=>e.mobile!=mobile)
            fs.writeFileSync(join(__dirname,"..","json","users.json"),JSON.stringify(updatedUsers))
            res.status(200).send({message:"User deleted successfully"})
        }
        else{
            return res.status(404).send({message:"User not found"})
        }
        else{
            return




            
        }
     }

}


module.exports = {userSignup,getUser,updateUser}
