import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import Quiz from "./container/quiz/Quiz";

function App() {
  const [totalScore, setTotalScore] = useState(0);
  return (
    <div>
      <Nav totalScore={totalScore} />
      <div className="quiz-container">
        <Quiz setTotalScore={setTotalScore} totalScore={totalScore} heading='Quiz 1' />
        <Quiz setTotalScore={setTotalScore} totalScore={totalScore} heading='Quiz 2'/>
      </div>
    </div>
  );
}

export default App;
