import { useContext, useEffect } from "react";

import "./App.css";

import { QuizContext } from "./context/quiz";
import Welcome from "./components/welcome/Welcome";
import Question from "./components/question/Question";
import GameOver from "./components/game-over/GameOver";
import PickCategory from "./components/PickCategory/PickCategory";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
