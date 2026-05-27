import './App.css';
import Test from './components/Test/Test';
import React, { useState } from 'react';

const testArr = [
  {
    question: "Question 1?",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    correct: 3
  },
  {
    question: "Question 2?",
    options: [
      "Option 11",
      "Option 22",
      "Option 33",
      "Option 44"
    ],
    correct: 1
  },
  {
    question: "Question 3?",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    correct: 2
  },
  {
    question: "Question 4?",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    correct: 4
  },
  {
    question: "Question 5?",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    correct: 1
  }
]

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function nextQuestion(selectedAnswer) {
    if(selectedAnswer === testArr[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion === testArr.length - 1){
      setFinished(true);
    }
    else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  function skipQuestion() {
    if (currentQuestion === testArr.length - 1){
      setFinished(true);
    }
    else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  if(finished) {
    return (
    <div className="finishedTest">
      <h1>Test finished!</h1>
      <h2>
        Correct answers: {score} / {testArr.length}
        </h2>
    </div>
    )
  }
  return (
    <div className="App">
      <Test 
      obj={testArr[currentQuestion]} 
      nextQuestion={nextQuestion}
      skipQuestion={skipQuestion}
      finished={currentQuestion === testArr.length - 1}
      />
    </div>
  );
}

export default App;
