import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Questions from "../../components/Questions";
import Score from "../../components/Score";
import Timer from "../../components/Timer";

const operatorsOptions = [
  { value: "0", label: "+" },
  { value: "1", label: "-" },
  { value: "2", label: "*" },
  { value: "3", label: "/" },
];

const Quiz = ({ setTotalScore, totalScore, heading, resetClicked }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [range, setRange] = useState(10);
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(20);
  const [operatorSelected, setOperatorSelected] = useState([]);

  useEffect(() => {
    resetAll();
  }, [resetClicked]);

  useEffect(() => {
    if (score != 0) setTotalScore(totalScore + 1);
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
    if (questionCount >= questionNumber - 1) {
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

  const questionNumberChangeHandler = (e) => {
    e.target.value = e.target.value;
    setQuestionNumber(e.target.value);
  };

  const operatorsSelector = (e) => {
    setOperatorSelected(e);
  };

  const resetAll = () => {
    setQuizStarted(false);
    setQuestionCount(0);
    setRange(10);
    setAnswer("");
    setQuestions([]);
    setScore(0);
    setSeconds(20);
    setIsActive(false);
    setQuestionNumber(20);
    setOperatorSelected([]);
    setQuizEnded(false);
  };

  return (
    <div className="quiz">
      <Heading heading={heading} />
      {quizStarted ? (
        <>
          {!quizEnded ? (
            <div className="quiz-start">
              <Questions
                questions={questions}
                setQuestions={setQuestions}
                range={range}
                questionCount={questionCount}
                operatorSelected={operatorSelected}
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
                      Ques:- {question[0].question}, Ans:-{" "}
                      {Math.round(question[0].answer * 100) / 100}
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
          <br />
          <p style={{ margin: "0px" }}>Select Number of Questions</p>
          <Input
            inputChangleHandler={questionNumberChangeHandler}
            value={questionNumber}
          />
          <p style={{ margin: "0px" }}>Select Number of Questions</p>
          <Select
            isMulti
            name="colors"
            options={operatorsOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={operatorsSelector}
          />

          <Button name="Start Quiz 1" clickHandler={startQuiz} />
        </div>
      )}
    </div>
  );
};

export default Quiz;
