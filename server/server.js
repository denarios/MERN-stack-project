const express =require ('express');
const app=express();
app.get("/",(req,res)=>{
    res.json({online:"coompiler"})
});
app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
});