import express from 'express';
const app = express();
import coderunRoute from './route/codeRun.js';
import DBConnection from './dbConnection/dbConnection.js';
import getInputFilerouter from './route/getInputFile.js';
import loginRoute from './route/loginRoute.js';
import registrationRouter from './route/registration.js';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
DBConnection();
app.use("/",coderunRoute);
app.use("/",getInputFilerouter);
// app.use("/",loginRoute);
// app.use("/",registrationRouter);
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
