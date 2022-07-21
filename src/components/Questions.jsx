import React, { useState, useEffect } from "react";

const operatorsOptions = [
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

const Questions = ({
  questions,
  setQuestions,
  range,
  questionCount,
  operatorSelected,
}) => {
  const [questonToAsk, setQuestonToAsk] = useState(defaultQuestion);
  const { num1, num2, selectedOperator } = questonToAsk;
  const [operators, setOperators] = useState(operatorsOptions);

  // let operators = operatorsOptions

  useEffect(() => {
    setOperators(selectOperators());
  }, []);

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
    let selectedOperator = Math.floor(Math.random() * operatorSelected.length);

    setQuestonToAsk({ num1, num2, selectedOperator });
  };

  const selectOperators = () => {
    if (operatorSelected.length) {
      let res = [];
      for (let i = 0; i < operatorSelected.length; i++) {
        res[i] = operatorsOptions[operatorSelected[i].value];
      }

      return res;
    } else {
      return operatorsOptions;
    }
  };

  return (
    <div>
      <h4>Question {questionCount + 1}</h4>

      <h3 className="question">
        {num1} {operators[selectedOperator].sign} {num2}
      </h3>
    </div>
  );
};

export default Questions;
