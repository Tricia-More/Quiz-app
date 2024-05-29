import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div className="result">
      <h2>Your Score: {score} / {total}</h2>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default Result;
