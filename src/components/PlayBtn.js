import { Link } from "react-router-dom";
import { useContext } from "react";
import PlayersContext from "../store/players-context";

const PlayBtn = () => {
  const playersCtx = useContext(PlayersContext);
  const status = playersCtx.status;

  return (
    <Link to={status.playerA && status.playerB ? "/game" : "#"}>Play</Link>
  );
};

export default PlayBtn;
