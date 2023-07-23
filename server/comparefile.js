import { readFile } from 'fs/promises';
import crypto from 'crypto';

// Function to calculate the MD5 hash of a file
function calculateMD5(content) {
  const hash = crypto.createHash('md5').update(content);
  return hash.digest('hex');
}

// Function to compare two files based on their MD5 hashes
async function compareFiles(file1Path, file2Path) {
  try {
    const data1 = await readFile(file1Path, 'utf8');
    const data2 = await readFile(file2Path, 'utf8');

    // Compare the MD5 hash of the two files' content
    const md5File1 = await calculateMD5(data1);
    const md5File2 = await calculateMD5(data2);

    console.log('File 1 MD5:', md5File1);
    console.log('File 2 MD5:', md5File2);

    return md5File1 === md5File2;
  } catch (error) {
    throw new Error(`Error reading files or comparing contents: ${error.message}`);
  }
}

// Export the compareFiles function to be used in other files
export { compareFiles };