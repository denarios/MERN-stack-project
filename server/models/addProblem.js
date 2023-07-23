import mongoose from 'mongoose';
const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
  inputFile: String,
  verdictFile: String,
});
const Submission = new mongoose.model('Submission', SubmissionSchema);
export default Submission;