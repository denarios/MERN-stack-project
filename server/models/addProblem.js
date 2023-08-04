import mongoose from 'mongoose';
const TestCaseSchema = new mongoose.Schema({
  input: String,
  expectedOutput: String,
});
const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
  inputFile: String,
  verdictFile: String,
  testCases: [TestCaseSchema], 
});
const Submission = new mongoose.model('Submission', SubmissionSchema);
export default Submission;