import logo from "./logo.svg";
import "./App.css";
import Quiz1 from "./container/quiz1/Quiz1";
import Quiz2 from "./container/quiz2/Quiz2";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [totalScore, setTotalScore] = useState(0);
  return (
    <div>
      <Nav totalScore={totalScore} />
      <div className="quiz-container">
        <Quiz1 setTotalScore={setTotalScore} totalScore={totalScore} />
        <Quiz2 setTotalScore={setTotalScore} totalScore={totalScore} />
      </div>
    </div>
  );
}

export default App;

// On a web page, there will be two quizzes running simultaneously.
// - When the user loads that web page, the web page should be divided into two quiz sections.
// - Each quiz section will show a "Start Quiz" button on clicking that button, the quiz will start and asks 20 mathematical questions
// - Not all 20 questions will be asked at once, the application will show questions one by one.
// - The quiz should generate two random numbers less than 10 and then pick an operator randomly (add, subtract, divide, multiply).
// - User should be able to enter his answer and click the next button (until all questions are not attempted).
// - The application should evaluate the answer when the user moves to the next screen and show the score at the bottom.
// - User should not be allowed to go back and edit answers.
// - For each question, a timer of 20 seconds will be running. The user should either submit his answer within 20 seconds or the application automatically move the user to the next question when the timer is over.
// - Once all questions are attempted, show the user the final score and all questions asked in the quiz. Highlight questions (in red) that the user did not answer or answer were incorrect. Show correct answers to the questions.
// - Cumulative Scorecard: Somewhere, on the top of the page. There should be a cumulative scoreboard that should display a cumulative score of all quizzes running on the page.
