import React, { useEffect, useState } from "react";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setcurrQues] = useState(0);
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions]);
  const handleShuffle = (opt) => {
    return opt.sort(() => Math.random() - 0.5);
  };
  return (
    <div>
      <span>Welcome to the app {name}</span>
    </div>
  );
};

export default Quiz;
