import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const questions = [
  {
    question: "What is blockchain?",
    options: ["A type of cryptocurrency", "A distributed ledger", "A social network", "A gaming platform"],
    answer: "A distributed ledger"
  },
  {
    question: "Which blockchain is Shibarium built on?",
    options: ["Bitcoin", "Ethereum", "Solana", "Polkadot"],
    answer: "Ethereum"
  },
  {
    question: "What does decentralization mean?",
    options: ["Power is concentrated in one place", "Power is distributed among many participants", "Power is given to a central authority", "Power is limited to a single node"],
    answer: "Power is distributed among many participants"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
      toast.success("Correct answer! 🎉");
    } else {
      toast.error("Oops! That's not correct. 😔");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Decentralized Voting Quiz</h2>
      {showScore ? (
        <div className="text-2xl">
          <p>Your Score: {score}/{questions.length}</p>
          {score === questions.length ? (
            <p>Congratulations! You got all the questions right! 🎉</p>
          ) : (
            <p>Good try! Keep learning and try again. 😊</p>
          )}
        </div>
      ) : (
        <div>
          <p className="text-xl">{questions[currentQuestion].question}</p>
          <div className="mt-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="block bg-blue-500 text-white p-2 rounded mb-2 w-full"
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
