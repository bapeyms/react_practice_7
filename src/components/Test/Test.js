import './Test.css';
import React, { use, useState } from 'react';

export function Test(props) {

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isSkipped, setIsSkipped] = useState(false);

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
      onClick={() => {setSelectedAnswer("A"); setIsSkipped(false)}}>A</button>
      
      <button className={selectedAnswer === "B"?"active":"non-active"}
      onClick={() => setSelectedAnswer("B")}>B</button>
      
      <button className={selectedAnswer === "C"?"active":"non-active"}
      onClick={() => setSelectedAnswer("C")}>C</button>
      
      <button className={selectedAnswer === "D"?"active":"non-active"}
      onClick={() => setSelectedAnswer("D")}>D</button>
    </div>

    <div className="choice-buttons">
      <button>Skip</button>
      <button onClick={props.nextQuestion}>Select</button>
      <button>Finish</button>
    </div>
    
  </div>
  </>
}

export default Test;
