import PlayerInfo from "../components/PlayerInfo";
import Board from "../components/Board";

const Game = () => {
  return (
    <main>
      <PlayerInfo player={"playerA"} />
      <Board />
      <PlayerInfo player={"playerB"} />
    </main>
  );
};

export default Game;
