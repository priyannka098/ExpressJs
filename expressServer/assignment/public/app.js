//static folder middleware
app.use(express.static(join(__dirname,"public")))
//json
app.use(express.json())
//url

app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{

})
app.post("/send",(req,res)=>{

})
app.get("/getdata",(req,res)=>{

})
app.post("/login",(req,res)=>{
    console.log(req.body);
    res.sendFile(join(__dirname,"public","index.html"))
})