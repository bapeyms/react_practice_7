import './Test.css';

export function Test(props) {
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
      <button>A</button>
      <button>B</button>
      <button>C</button>
      <button>D</button>
    </div>

    <div className="choice-buttons">
      <button>Skip</button>
      <button>Select</button>
      <button>Finish</button>
    </div>
    
  </div>
  </>
}

export default Test;
