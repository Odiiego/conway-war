import { createContext } from "react";

const PlayersContext = createContext({
  playerA: null,
  playerB: null,
});

export default PlayersContext;
