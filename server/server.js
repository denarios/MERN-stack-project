import express from 'express';
const app = express();
import cors from 'cors'
import coderunRoute from './route/codeRun.js';
import DBConnection from './dbConnection/dbConnection.js';
import getInputFilerouter from './route/getInputFile.js';
import loginRoute from './route/loginRoute.js';
import registrationRouter from './route/registration.js';
import authMiddleware from './middleware.js/auth.js';
import problemNameRouter from './route/problem.js';
import ProblemidRouter from './route/problemid.js';
import ProblemSubmittedRouter from './route/problemSubmitted.js';
import ProblemSubmissionCodeRouter from './route/problemSubmission.js';
import CoderunningRoute from './route/codeRunning.js';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
DBConnection();
app.use("/",registrationRouter);
app.use("/",loginRoute);
app.use("/",authMiddleware,CoderunningRoute)
app.use("/",authMiddleware,ProblemidRouter);
app.use("/",authMiddleware,problemNameRouter);
app.use("/",authMiddleware,coderunRoute);
app.use("/",authMiddleware,getInputFilerouter);
app.use("/",authMiddleware,ProblemSubmittedRouter);
app.use("/",authMiddleware,ProblemSubmissionCodeRouter);
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
