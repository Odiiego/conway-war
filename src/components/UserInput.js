import { useContext, useState } from "react";
import PlayersContext from "../store/players-context";
import fetchUser from "../api/services/github";
import "./UserInput.css";

const UserInput = (props) => {
  const playersCtx = useContext(PlayersContext);
  const status = playersCtx.status;

  const [inputClass, setInputClass] = useState(false);

  return (
    <div>
      <input
        type="text"
        name={`${props.inputName}`}
        id={`${props.inputName}`}
        className={inputClass ? "activeInput" : "inactiveInput"}
        required
        onBlur={async () => {
          const username = document.getElementById(`${props.inputName}`).value;
          playersCtx[`${props.inputName}`] = await fetchUser(username, props.inputName).then(
            (status[`${props.inputName}`] = true),
            setInputClass(true)
          );
        }}
      />
    </div>
  );
};

export default UserInput;
