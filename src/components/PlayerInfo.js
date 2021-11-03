import { useContext } from "react";
import PlayersContext from "../store/players-context";

const PlayerInfo = (props) => {
  const playersCtx = useContext(PlayersContext);
  const playerProfile = playersCtx[`${props.player}`];

  return (
    <div>
      <img src={`${playerProfile.avatarUrl}`} alt="avatar" width="100" />

      <article>
        <h2>{playerProfile.name}</h2>
        <h3>{playerProfile.login}</h3>
        <p>{playerProfile.bio}</p>
      </article>
    </div>
  );
};

export default PlayerInfo;
