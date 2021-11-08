import { useContext } from "react";
import PlayersContext from "../store/players-context";
import fetchUser from "../api/services/github";
import "./UserInput.css";

const UserInput = (props) => {
  const playersCtx = useContext(PlayersContext);
  const status = playersCtx.status;

  return (
    <div>
      <input
        type="text"
        name={`${props.inputName}`}
        id={`${props.inputName}`}
        required
        onChange={async () => {
          const username = document.getElementById(`${props.inputName}`).value;
          playersCtx[`${props.inputName}`] = await fetchUser(username).then(
            (status[`${props.inputName}`] = true)
          );
        }}
      />
    </div>
  );
};

export default UserInput;
