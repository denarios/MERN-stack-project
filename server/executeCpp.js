const {exec}=require('child_process');
const fs=require('fs');
const path =require('path');
const {stderr,stdout} =require('process')
const {v4: uuid}=require('uuid');
const outputPath =path.join(__dirname,'output');
console.log(outputPath);
if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath ,{recursive:true});
}
const executeCpp=(filePath)=>{
  const jobId=path.basename(filePath).split(".")[0];
  const outPath=path.join(outputPath,`${jobId}.exe`);
  return new Promise((resolve,reject)=>{
    exec(
    `g++ ${filePath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe `,
     (error,stdout,stderr) =>{
      // console.log(error);
       if(error){
        reject({error,stderr});
       }
       if(stderr){
        reject(stderr);
       }
       resolve(stdout);
       });    
  });
}
module.exports={
    executeCpp,
}
