import "./PlayerInfo.css";

const PlayerInfo = (props) => {
  const gameContext = JSON.parse(localStorage.getItem("gameContext"));
  const playerProfile = gameContext[`${props.player}`];

  return (
    <div className={"info__container"}>
      <section className={"info"}>
        <img
          className={`info__avatar info__avatar--${props.player}`}
          src={playerProfile.avatarUrl}
          alt="avatar"
        />

        <h2 className={"info__name"}>{playerProfile.name}</h2>
        <h3 className={"info__login"}>{playerProfile.login}</h3>
        <p className={"info__bio"}>{playerProfile.bio}</p>
      </section>
    </div>
  );
};

export default PlayerInfo;
