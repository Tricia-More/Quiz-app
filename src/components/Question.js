import React from 'react';

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div className="question">
      <h2 className='question-header'>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
