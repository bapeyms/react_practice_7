import './Test.css';
import React, { use, useState } from 'react';

export function Test(props) {

  const [selectedAnswer, setSelectedAnswer] = useState("");

  function handleSelect() {
    if (selectedAnswer === "") {
      alert("Choose an answer!");
      return;
    }

    const answerNumber = {
      A: 1,
      B: 2,
      C: 3,
      D: 4
    }

    props.nextQuestion(answerNumber[selectedAnswer]);
    setSelectedAnswer("");
  }
  function handleSkip() {
    setSelectedAnswer("");
    props.skipQuestion();
  }

  return <>
  <div className="Test">
    <p>{props.obj.question}</p>
    <ol type="A">
      {props.obj.options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </ol>
    <p>Select an answer:</p>
    <div className="answer-buttons">
      <button className={selectedAnswer === "A"?"active":"non-active"}
      onClick={() => {setSelectedAnswer("A"); }}>A</button>
      
      <button className={selectedAnswer === "B"?"active":"non-active"}
      onClick={() => setSelectedAnswer("B")}>B</button>
      
      <button className={selectedAnswer === "C"?"active":"non-active"}
      onClick={() => setSelectedAnswer("C")}>C</button>
      
      <button className={selectedAnswer === "D"?"active":"non-active"}
      onClick={() => setSelectedAnswer("D")}>D</button>
    </div>

    <div className="choice-buttons">
      <button onClick={handleSkip}>Skip</button>
      <button onClick={handleSelect}>Select</button>
      {props.finished && (
        <button onClick={handleSelect}>Finish</button>
      )}
      
    </div>
    
  </div>
  </>
}

export default Test;
