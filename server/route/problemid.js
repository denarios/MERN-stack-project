import express from 'express'
const ProblemidRouter=express.Router();
import Submission from '../models/addProblem.js';
ProblemidRouter.get('/problem/:id', async (req, res) => {
    try {
      const submissions = await Submission.findById(req.params.id);
      if (!submissions) {
        return res.status(404).json({ message: 'No submission found for the given ID.' });
      }
      const problemData = {
        name: submissions.name,
        description: submissions.description
      };
      res.json(problemData);
    } catch (error) {
      console.error('Error fetching problem data:', error.message);
      res.status(500).json({ message: 'Failed to fetch problem data.' });
    }
  });
  
export default ProblemidRouter;