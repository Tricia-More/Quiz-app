import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import questions from '../data/Questions';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-app">
      <div className="quiz">
        <h1>Quiz App</h1>
        {showResult ? (
          <Result score={score} total={questions.length} />
        ) : (
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            handleAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;



