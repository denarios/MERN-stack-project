import jwt from 'jsonwebtoken';
const SECERET_KEY="NOTESAPI"
const auth =(req,res,next)=>{
   try {
    let token=req.header.authorization;
    if(token){
        token=token.split(" ")[1];
        let user=jwt.verify(token,SECERET_KEY);
        req.userId=user.id;

    }
    else{
        res.status(401).json({meassage:"unothorize User"});
    }
    next();
   } catch (error) {
    console.log(error);
    res.status(401).json({message:"unothorize user"});
   } 
}
export default auth;