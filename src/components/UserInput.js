import { useContext, useState } from "react";
import "./UserInput.css";

import PlayersContext from "../store/players-context";
import fetchUser from "../api/services/github";

const UserInput = (props) => {
  const playersCtx = useContext(PlayersContext);
  const status = playersCtx.status;

  const [inputClass, setInputClass] = useState(false);

  return (
    <div className={"input"}>
      <input
        type="text"
        name={`${props.inputName}`}
        id={`${props.inputName}`}
        className={inputClass ? "input--active" : "input--inactive"}
        placeholder={"Github Login"}
        required
        onBlur={async () => {
          const username = document.getElementById(`${props.inputName}`).value;
          playersCtx[`${props.inputName}`] = await fetchUser(
            username,
            props.inputName
          ).then((status[`${props.inputName}`] = true), setInputClass(true));
        }}
      />
    </div>
  );
};

export default UserInput;
