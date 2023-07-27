import { exec } from 'child_process';
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __executeCpp = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__executeCpp);
const outputPath = path.join(__dirname, 'output');
console.log(outputPath);
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}
function compareFiles(file1Path, file2Path) {
  return new Promise((resolve, reject) => {
    fs.readFile(file1Path, 'utf8', (err, data1) => {
      if (err) {
        reject(err);
        return;
      }

      fs.readFile(file2Path, 'utf8', (err, data2) => {
        if (err) {
          reject(err);
          return;
        }

        // Compare the contents of the two files
        const areFilesSame = data1 === data2;

        resolve(areFilesSame);
      });
    });
  });
}
const executeCpp = (filePath,inputPath) => {
  const jobId = path.basename(filePath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.exe`)
  // const inputPath = path.join(__dirname, './input_file/input.txt')
  const outputsPath = path.join(__dirname, `./output_file/${jobId}.txt`)
  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filePath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe < ${inputPath} > ${outputsPath} `,
      (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
        }
        if (stderr) {
          reject(stderr);
        }
        resolve(outputsPath);
      });
  });
}
export default executeCpp;

