import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Questions from "../../components/Questions";

const operators = [
  {
    sign: "+",
    method: function (a, b) {
      return a + b;
    },
  },
  {
    sign: "-",
    method: function (a, b) {
      return a - b;
    },
  },
  {
    sign: "*",
    method: function (a, b) {
      return a * b;
    },
  },
  {
    sign: "/",
    method: function (a, b) {
      return a / b;
    },
  },
];

const defaultQuestion = { num1: 0, num2: 0, selectedOperator: 0 };

const Quiz1 = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [range, setRange] = useState(10);

  const [questonToAsk, setQuestonToAsk] = useState(defaultQuestion);
  const { num1, num2, selectedOperator } = questonToAsk;
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);
  let interval = null;

  useEffect(() => {
    generateQuestion();
  }, []);

  useEffect(() => {
    const question = [
      {
        question: num1 + " " + operators[selectedOperator].sign + " " + num2,
        answer: operators[selectedOperator].method(num1, num2),
        correct: false,
      },
    ];

    const arr = [...questions];
    arr.push(question);

    setQuestions(arr);
  }, [questonToAsk]);

  useEffect(() => {
    
    if (seconds == 0) {
      submitAnswer();
      return;
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function reset() {
    setSeconds(20);
  }

  const startQuiz = () => {
    setIsActive(true);
    setQuizStarted(true);
  };
  const inputChangleHandler = (e) => {
    setAnswer(e.target.value);
  };
  const submitAnswer = (count) => {
    if (count && Math.round(questions[count][0]?.answer * 100) / 100 == answer) {
      questions[count][0].correct = true;
      setScore(score + 1);
    }
    if (questionCount >= 19) {
      setQuizEnded(true);
      clearInterval(interval)
      return;
    }
    setAnswer("");
    reset();
    generateQuestion();
    setQuestionCount(questionCount + 1);
  };

  const rangeChangeHandler = (e) => {
    e.target.value = e.target.value;
    setRange(e.target.value);
  };

  const generateQuestion = () => {
    let num1 = Math.floor(Math.random(0) * range);
    let num2 = Math.floor(Math.random(0) * range);
    let selectedOperator = Math.floor(Math.random() * operators.length);

    setQuestonToAsk({ num1, num2, selectedOperator });
  };

  return (
    <div>
      {quizStarted ? (
        <>
          {!quizEnded ? (
            <div>
              <Questions
                id={questionCount + 1}
                num1={num1}
                operator={operators[selectedOperator].sign}
                num2={num2}
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
          <div>Time : {seconds}</div>
          <div>Score : {score}</div>
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
