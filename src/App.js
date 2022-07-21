import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import Quiz from "./container/quiz/Quiz";

function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [resetClicked, setResetClicked] = useState(false)
  const resetQuiz = ()=>{
    setTotalScore(0);
    setResetClicked(!resetClicked);
    // resetClicked = false
  }

  return (
    <div>
      <Nav totalScore={totalScore} resetQuizz= {resetQuiz} />
      <div className="quiz-container">
        <Quiz setTotalScore={setTotalScore} totalScore={totalScore} heading='Quiz 1' resetClicked={resetClicked} />
        <Quiz setTotalScore={setTotalScore} totalScore={totalScore} heading='Quiz 2' resetClicked={resetClicked}/>
      </div>
    </div>
  );
}

export default App;
