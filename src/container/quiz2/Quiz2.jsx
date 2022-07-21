import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Questions from "../../components/Questions";
import Score from "../../components/Score";
import Timer from "../../components/Timer";
import Heading from "../../components/Heading";

const Quiz2 = ({setTotalScore, totalScore}) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [range, setRange] = useState(10);
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);



  useEffect(() => {
    if(score != 0)
    setTotalScore(totalScore + 1);
  }, [score]);

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
    <div className="quiz">
      <Heading heading="Quiz 2" />
      {quizStarted ? (
        <>
          {!quizEnded ? (
            <div className="quiz-start">
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
            <div className="result">
              <h4>Result</h4>
              {questions.map((question, index) => {
                if (index > 0) {
                  return (
                    <div
                      className={
                        question[0].correct
                          ? "correct-answer"
                          : "incorrect-answer"
                      }
                      key={index}
                    >
                       Ques:- {question[0].question}, Ans:- {Math.round(question[0].answer * 100) / 100}
                    </div>
                  );
                }
              })}
            </div>
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
        <div className="quiz-ready">
          <p style={{ margin: "0px" }}>Select Number Range</p>

          <Input inputChangleHandler={rangeChangeHandler} value={range} />

          <Button name="Start Quiz 2" clickHandler={startQuiz} />
        </div>
      )}
    </div>
  );
};

export default Quiz2;
