const express =require ('express');
const app=express();
const {generateFile}=require('./generateFile')
const {executeCpp}=require('./executeCpp') 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({online:"coompiler"})
});
app.post("/run",async(req,res)=>{
    // console.log(req.body);
    // const language=req.body.language;
    // const code =req.body.code;
    const{language='cpp',code}=req.body;
    if(code===undefined)
    {
        return res.status(404).json({success :false,error:""});
    }
    const filePath=await generateFile(language,code);
    const output=await executeCpp(filePath);
    // console.log(filePath);
    res.json({filePath,output});
});
app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
});
