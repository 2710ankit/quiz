import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Questions from "../../components/Questions";
import Score from "../../components/Score";
import Timer from "../../components/Timer";

const Quiz1 = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [range, setRange] = useState(10);
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);

  const startQuiz = () => {
    setIsActive(true);
    setQuizStarted(true);
  };

  const resetTImer = () => {
    setSeconds(20);
  };

  const inputChangleHandler = (e) => {
    setAnswer(e.target.value);
  };

  const submitAnswer = (count) => {
    if (
      count &&
      Math.round(questions[count][0]?.answer * 100) / 100 == answer
    ) {
      questions[count][0].correct = true;
      setScore(score + 1);
    }
    if (questionCount >= 19) {
      setQuizEnded(true);
      // clearInterval(interval)
      return;
    }
    setAnswer("");
    resetTImer();
    setQuestionCount(questionCount + 1);
  };

  const rangeChangeHandler = (e) => {
    e.target.value = e.target.value;
    setRange(e.target.value);
  };

  return (
    <div className='quiz'>
      {quizStarted ? (
        <>
          {!quizEnded ? (
            <div>
              <Questions
                questions={questions}
                setQuestions={setQuestions}
                range={range}
                questionCount={questionCount}
              />
              <div>
                Answer:
                <Input
                  inputChangleHandler={inputChangleHandler}
                  value={answer}
                />
              </div>
              <div>
                <Button
                  name="Submit"
                  clickHandler={() => submitAnswer(questionCount + 1)}
                />
              </div>
            </div>
          ) : (
            questions.map((question, index) => {
              if (index > 0) {
                return <div key={index}>{question[0].question}</div>;
              }
            })
          )}
          <Timer
            seconds={seconds}
            isActive={isActive}
            submitAnswer={submitAnswer}
            setSeconds={setSeconds}
          />
          <Score score={score} />
        </>
      ) : (
        <div>
          <div>
            Select Number Range
            <Input inputChangleHandler={rangeChangeHandler} value={range} />
          </div>
          <Button name="Start Quiz 1" clickHandler={startQuiz} />
        </div>
      )}
    </div>
  );
};

export default Quiz1;
