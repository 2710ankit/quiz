import React, { useState } from "react";
import Button from "../../components/Button";

const Quiz2 = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };
  return (
    <div>
      {quizStarted ? (
        <div>quiz</div>
      ) : (
        <div>
          <Button name="Start Quiz 2" clickHandler={startQuiz} />
        </div>
      )}
    </div>
  );
};

export default Quiz2;
