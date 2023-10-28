import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="app">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label htmlFor="dob">Enter your Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {age !== null && (
        <div className="age-result">
          <p ><b>You are {age} years old .</b></p>
        </div>
      )}
    </div>
  );
}

export default App;

