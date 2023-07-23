import express  from 'express';
const getInputFilerouter = express.Router();
import Submission from '../models/addProblem.js';
import verdictfilePath from '../verdictfilePath.js';
import inputfilePath from '../inputfilePath.js';
getInputFilerouter.post('/submit', async (req, res) => {
  try {
    const { name, email, description,inputFile, verdictFile } = req.body;
    const inputFilePath=await inputfilePath(inputFile);
    const verdictFilePath=await verdictfilePath(verdictFile);
    console.log(inputFilePath);
    console.log(verdictFilePath);
    // Save the metadata and file information to the database
    const newSubmission=new Submission({
      name: name,
      email: email,
      description: description,
      inputFile: inputFilePath,
      verdictFile: verdictFilePath,
    });
    await newSubmission.save();
    return res.status(201).json({ message: 'Submission created successfully', Submission });
  } catch (error) {
    console.error('Error while submitting:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

export default getInputFilerouter;