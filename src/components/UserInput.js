import { useContext, useState } from "react";
import "./UserInput.css";

import PlayersContext from "../store/players-context";
import fetchUser from "../api/services/github";

const UserInput = (props) => {
  const gameContext = useContext(PlayersContext);
  const status = gameContext.status;

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
          gameContext[`${props.inputName}`] = await fetchUser(
            username,
            props.inputName
          ).then((data) => {
            status[`${props.inputName}`] = true;
            setInputClass(true);
            return data;
          }, (e) => {
            status[`${props.inputName}`] = false;
            setInputClass(false);
            console.log(e)
          });
          localStorage.setItem("gameContext", JSON.stringify(gameContext));
        }}
      />
    </div>
  );
};

export default UserInput;
