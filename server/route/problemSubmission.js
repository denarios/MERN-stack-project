import express from 'express';
const ProblemSubmissionCodeRouter = express.Router();
import SubmitedProblem from '../models/problemSbmitUser.js';
import fs from 'fs';

ProblemSubmissionCodeRouter.get('/problem/submission/:id', async (req, res) => {
    try {
        const idToFind = req.params.id;
        const submission = await SubmitedProblem.findById(idToFind);

        if (!submission) {
            return res.status(404).json({ message: 'No submission found for the given ID.' });
        }

        // Assuming the 'path' field contains the path to the file you want to send
        const filePath = submission.path;
        console.log(filePath);
        // Read the file content
        await fs.readFile(filePath, (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Error reading the file.' });
            }

            // Assuming the file is a text file, you can set the appropriate content type
            res.setHeader('Content-Type', 'text');
            // Send the file content to the UI
            res.send(data);
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.' });
    }
});
export default ProblemSubmissionCodeRouter;
