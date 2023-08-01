import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProblemSubmissionCode = ({ id }) => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    // Fetch the file content from the backend using the provided ID
    axios.get(`/problem/submission/${id}`)
      .then(response => {
        setFileContent(response.data); // Assuming the backend sends the file content as plain text
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with an error status code
          console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
        }
      });
  }, [id]);

  return (
    <div className="submission-container">
      <h1>Problem Submission</h1>
      <div className="file-content">
        <pre>{fileContent}</pre>
      </div>
    </div>
  );
};

export default ProblemSubmissionCode;
