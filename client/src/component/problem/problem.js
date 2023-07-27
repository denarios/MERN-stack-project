import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './problem.css';
import './NavBar.css'; // Import NavBar.css

const ProblemPage = () => {
  const [problemData, setProblemData] = useState([]);

  useEffect(() => {
    // Fetch the problem data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/problem');
      setProblemData(response.data);
    } catch (error) {
      console.error('Failed to fetch problem data:', error.message);
    }
  };

  // Render the problem data in the UI
  return (
    <div>
      {/* Navigation Bar */}
      <div className="navbar">
        <h1>Online Judge</h1>
      </div>
      {/* Problem Page */}
      <div className="problem-page">
        <h1>Problem Page</h1>
        <div className="problem-container">
          {problemData.length > 0 ? (
            problemData.map((problem) => (
              <div key={problem.id} className="problem-item">
                <Link to={`/problem/${problem.id}`}>{problem.name}</Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
