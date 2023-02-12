import { useContext } from "react";

import "./Option.css";

import { QuizContext } from "../../context/quiz";

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""
      } ${quizState.answerSelected && option !== answer ? "wrong" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
