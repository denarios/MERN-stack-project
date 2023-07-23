import { readFile } from 'fs/promises';

// Function to compare two files
async function compareFiles(file1Path, file2Path) {
  try {
    const data1 = await readFile(file1Path, 'utf8');
    const data2 = await readFile(file2Path, 'utf8');

    // Compare the contents of the two files
    return data1 === data2;
  } catch (error) {
    // Catch and rethrow the error with a more detailed message
    throw new Error(`Error reading files or comparing contents: ${error.message}`);
  }
}

// Export the compareFiles function to be used in other files
export { compareFiles };
