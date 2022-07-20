import React, { useState, useEffect } from "react";

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

const Questions = ({ questions, setQuestions, range, questionCount }) => {
  const [questonToAsk, setQuestonToAsk] = useState(defaultQuestion);
  const { num1, num2, selectedOperator } = questonToAsk;

  useEffect(() => {
    generateQuestion();
  }, [questionCount]);

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

  const generateQuestion = () => {
    let num1 = Math.floor(Math.random(0) * range);
    let num2 = Math.floor(Math.random(0) * range);
    let selectedOperator = Math.floor(Math.random() * operators.length);

    setQuestonToAsk({ num1, num2, selectedOperator });
  };

  return (
    <div>
      <h1>Question {questionCount + 1}</h1>
      <div>
        {num1} {operators[selectedOperator].sign} {num2}
      </div>
    </div>
  );
};

export default Questions;
