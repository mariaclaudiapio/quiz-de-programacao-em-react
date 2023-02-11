import { useContext } from "react";

import "./App.css";

import Welcome from "./components/welcome/Welcome";
import Question from "./components/question/Question";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  );
}

export default App;
