import fs from 'fs'
import path from 'path';
import SubmitedProblem from './models/problemSbmitUser.js';
import {fileURLToPath} from 'url';
const __generateFile = fileURLToPath(import.meta.url);
import {v4 as uuid} from 'uuid';
const __dirname = path.dirname(__generateFile);
const dirCodes =path.join(__dirname,'codes');
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
}
// console.log(dirCodes);
const generateFile=async(format,content) => {
  const jobId=uuid();
  const fileName=`${jobId}.${format}`;
  const filePath=path.join(dirCodes,fileName);
  fs.writeFileSync(filePath,content);
  await fs.writeFileSync(filePath,content);
  return filePath;
};
export default generateFile;

