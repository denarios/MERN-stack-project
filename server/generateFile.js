const fs=require('fs');
const path =require('path');
const {v4: uuid}=require('uuid');
const dirCodes =path.join(__dirname,'codes');
if(!fs.existsSync(dirCodes)){
    fs.mkdir(dirCodes,{recursive:true});
}
const generrateFile=async(format,content) => {
  const jobId=uuid();
  const fileName=`${jobId}.${format}`;
  const filePath=path.join(dirCodes,fileName);
  await fs.writeFileSync(filePath,content);
  return filePath;
};
module.exports={
    generrateFile,
}