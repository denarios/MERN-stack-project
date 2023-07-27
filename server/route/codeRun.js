import express from 'express'
import generateFile from '../generateFile.js';
import executeCpp from '../executeCpp.js';
import { compareFiles } from '../comparefile.js';
import Submission from "../models/addProblem.js";
import SubmitedProblem from '../models/problemSbmitUser.js';
const coderunRoute = express.Router();
coderunRoute.post("/problem/submit/:id", async (req, res) => {
  const userId = req.userId; // Access the user ID from the req object
  const finding = await Submission.findById(req.params.id);
  const inputFile = await finding.inputFile;
  const verdictFile = await finding.verdictFile;
  // console.log(inputFile);
  // console.log(verdictFile);
  const { language = 'cpp', code } = req.body;
  if (code === undefined) {
    return res.status(201).json({ message: "empty code" });
  }
  try {
    const filePath = await generateFile(language, code);
    const output = await executeCpp(filePath,inputFile);
    const compare= await compareFiles(verdictFile, output)
    if(compare)
    {
      const result=await SubmitedProblem.create({
        id:req.params.id,
        path:output,
        status:"Accepted"
      })
      return res.status(400).json({ message: "Accepted" });
    }
    const result=await SubmitedProblem.create({
      id:req.params.id,
      path:output,
      status:"Reject"
    })
    res.status(400).json({ message: "Rejected" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});
export default coderunRoute;