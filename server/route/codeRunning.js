import express from 'express';
import generateFile from '../generateFile.js';
import executeCpp from '../executeCpp.js';
import inputFileRun from '../inputfileRun.js';
import fs from 'fs/promises'; // Import fs.promises for awaitable file operations
import { unlink } from 'fs'; // Import fs.unlink to delete files

const CoderunningRoute = express.Router();

CoderunningRoute.post("/problem/run", async (req, res) => {
  const { language, code, input } = req.body;
  if (code === undefined) {
    return res.status(201).json({ message: "empty code" });
  }
  try {
    const inputFile = await inputFileRun(input);
    console.log(inputFile);

    const filePath = await generateFile(language, code);
    console.log(filePath);

    const output = await executeCpp(filePath, inputFile);
    console.log(output);
    const outputdataBuffer = await fs.readFile(output);
    const outputdataString = outputdataBuffer.toString();

    await fs.unlink(inputFile);
    await fs.unlink(output);

    // console.log(outputdataString);
    return res.status(200).json({ outputData: outputdataString });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default CoderunningRoute;
