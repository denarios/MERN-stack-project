import express from 'express'
import generateFile from '../generateFile.js';
import executeCpp from '../executeCpp.js';
import { compareFiles } from '../comparefile.js';
import Submission from "../models/addProblem.js";
const coderunRoute = express.Router();
coderunRoute.post("/:id", async (req, res) => {
  const finding = await Submission.findById(req.params.id);
  const inputFile = await finding .inputFile;
  const verdictFile = await finding .verdictFile;
  console.log(inputFile);
  console.log(verdictFile);
  const { language = 'cpp', code } = req.body;
  if (code === undefined) {
    return res.send({ message: "empty code" });
  }
  try {
    const filePath = await generateFile(language, code);
    const output = await executeCpp(filePath,inputFile);
    console.log(output);
    compareFiles(verdictFile, output)
      .then((areSame) => {
        if (areSame) {
          res.send({ message: "your code is giving correct output" })
        } else {
          res.send({ message: "your code is giving Wrong output" })
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});
export default coderunRoute;