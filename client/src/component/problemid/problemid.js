import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './problemid.css';
import Navigationbar from '../navgiation/navigation';
const ProblemIdPage = () => {
  const { id } = useParams();
  const [problemData, setProblemData] = useState([]);
  const [language, setLanguage] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8000/problem/${id}`);
      console.log(response.data);
      setProblemData(response.data);
    } catch (error) {
      console.error('Failed to fetch problem data:', error.message);
    }
  }, [id]); // Include id as a dependency for useCallback

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Include fetchData in the dependency array of useEffect

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can send the language and code to the server for submission
    try {
      const response = await axios.post(`http://localhost:8000/problem/submit/${id}`, {
        language,
        code,
      });
      console.log('Submission response:', response.data);
      // Clear the form fields after successful submission
      setLanguage('');
      setCode('');
      // You may also want to show a success message to the user
      alert('Submission successful!');
    } catch (error) {
      console.error('Failed to submit the code:', error.message);
      // You may want to show an error message to the user
      alert('Submission failed!');
    }
  };
  const handleSubmissionButtonClick = () => {
    navigate(`/problem/${id}/submission`);
  };
  return (
    <div className="problem-id-page">
      {/* Display problem data */}
      <div className="problem-details">
      <Navigationbar/>
        <h2>{problemData.name}</h2>
        <p>{problemData.description}</p>
      </div>
      {/* Form for language and code submission */}
      <form className="submission-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            value={language}
            onChange={handleLanguageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="code">Code:</label>
          <textarea
            id="code"
            rows="10"
            value={code}
            onChange={handleCodeChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button className="submission-button" onClick={handleSubmissionButtonClick}>
        My Submission
      </button>
    </div>
  );
};

export default ProblemIdPage;
