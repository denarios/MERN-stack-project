import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle the onClick event of the Login button
  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the /login route when the button is clicked
  };
  const handleRegisterClick = () => {
    navigate('/register'); // Redirect to the /register route when the button is clicked
  };


  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div>
            <h1 className="logo">My Website</h1>
          </div>
          <div>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <div className="login">
                  {/* Attach the handleLoginClick function to the onClick event */}
                  <button onClick={handleLoginClick}>Login</button>
                </div>
              </li>
              <li>
                <div className="login">
                  {/* Attach the handleLoginClick function to the onClick event */}
                  <button onClick={handleRegisterClick}>Register</button>
                </div>
              </li>
            </ul>
            
          </div>
        </nav>
      </header>
      <main className="main">
        <h2 className="page-title">Welcome to our website!</h2>
        <p className="paragraph">This is the home page content. You can add more content here.</p>
      </main>
    </div>
  );
};

export default HomePage;