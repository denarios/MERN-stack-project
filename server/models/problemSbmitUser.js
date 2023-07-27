import mongoose from "mongoose";
 const SubmitedProblemSchema=new mongoose.Schema({
    id:String,
    path:String,
    status:String
 });
 const SubmitedProblem=new mongoose.model('SubmitedProblem',SubmitedProblemSchema);
 export default SubmitedProblem;