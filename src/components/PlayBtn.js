import { Link } from "react-router-dom";
import { useContext } from "react";
import PlayersContext from "../store/players-context";

const PlayBtn = () => {
  const playersCtx = useContext(PlayersContext);

  const checkContext = () => {
    const playerA = playersCtx.playerA;
    const playerB = playersCtx.playerB;

    if (
      Object.keys(playerA).length !== 0 &&
      Object.keys(playerB).length !== 0
    ) {
      return true
    } else {
      return false
    }
  };

  return (
    <Link to={checkContext ? "/game" : "#"}>
      Play
    </Link>
  );
};

export default PlayBtn;
