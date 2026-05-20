import './App.css';
import Test from './components/Test/Test';

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
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
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
  return (
    <div className="App">
      <Test obj={testArr[0]}></Test>
    </div>
  );
}

export default App;
