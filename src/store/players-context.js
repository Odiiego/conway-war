import { createContext } from "react";

const PlayersContext = createContext({
  playerA: {},
  playerB: {},
  status: {
    playerA: false,
    playerB: false,
  }
});

export default PlayersContext;
