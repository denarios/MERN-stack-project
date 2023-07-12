const fs=require('fs');
const path =require('path');
// console.log("pranjal");
const {v4: uuid}=require('uuid');
const dirCodes =path.join(__dirname,'codes');
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
}
// console.log(dirCodes);
const generrateFile=async(format,content) => {
  const jobId=uuid();
  const fileName=`${jobId}.${format}`;
  const filePath=path.join(dirCodes,fileName);
  fs.writeFileSync(filePath,content);
  await fs.writeFileSync(filePath,content);
  return filePath;
};
module.exports={
    generrateFile,
}
