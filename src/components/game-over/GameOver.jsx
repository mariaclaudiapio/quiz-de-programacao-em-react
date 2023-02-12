import { useContext } from "react";

import "./GameOver.css";

import WellDone from "../../img/welldone.svg";

import { QuizContext } from "../../context/quiz";

const GameOver = () => {
  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: x</p>
      <p>Você acertou y de z perguntas.</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button>Reiniciar</button>
    </div>
  );
};

export default GameOver;
