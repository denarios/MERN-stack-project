const express =require ('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({online:"coompiler"})
});
app.post("/run",(req,res)=>{
    const language=req.body.language;
    const code =req.body.code;
    res.json({language,body});
});
app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
});