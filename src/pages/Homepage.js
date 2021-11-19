import UserInput from "../components/UserInput";
import PlayBtn from "../components/PlayBtn";

const Homepage = () => {
  return (
    <main className={"homepage"}>
      <UserInput inputName={"playerA"} />
      <PlayBtn />
      <UserInput inputName={"playerB"} />
    </main>
  );
};

export default Homepage;
