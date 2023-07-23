import express from 'express';
const app = express();
import coderunRoute from './route/codeRun.js';
import DBConnection from './dbConnection/dbConnection.js';
import getInputFilerouter from './route/getInputFile.js';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
DBConnection();
app.use("/",coderunRoute);
app.use("/",getInputFilerouter);
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
