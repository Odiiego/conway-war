import { useContext } from "react";
import PlayersContext from "../store/players-context";
import fetchUser from "../api/services";
import "./UserInput.css";

const UserInput = (props) => {
  const playersCtx = useContext(PlayersContext);

  return (
    <div>
      <input
        type="text"
        name={`${props.inputName}`}
        id={`${props.inputName}`}
        required
      />

      <input
        type="submit"
        value="Submit"
        onClick={async () => {
          const username = document.getElementById(`${props.inputName}`).value;
          playersCtx[`${props.inputName}`] = await fetchUser(username);
        }}
      />
    </div>
  );
};

export default UserInput;
