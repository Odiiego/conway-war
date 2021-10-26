import { useContext, useState } from "react";
import PlayersContext from "../store/players-context";
import "./UserInput.css";

const UserInput = (props) => {
  const [userProfile, setUserProfile] = useState({});
  const playersCtx = useContext(PlayersContext);

  const formatContributions = (arr) => {
    const userContributions = [];
    arr.map((weekArr) => {
      return weekArr.contributionDays.map((day) => {
        return userContributions.push(day.contributionCount > 0 ? 1 : 0);
      });
    });
    return userContributions
  };

  const getUser = async () => {
    const userName = document.getElementById(`${props.inputName}`).value;
    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        body: JSON.stringify({
          query: `query {
            user(login: "${userName}") {
              avatarUrl,
              name,
              login,
              bio,
              contributionsCollection {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      contributionCount
                    }
                  }
                }
              }
            }
          }`,
        }),
        headers: {
          Authorization: "bearer ",
        },
      });
      const data = await response.json();
      const userData = data.data.user;

      setUserProfile({
        avatarUrl: userData.avatarUrl,
        name: userData.name,
        login: userData.login,
        bio: userData.bio,
        contributions: formatContributions(
          userData.contributionsCollection.contributionCalendar.weeks
        ),
      });
    } catch (e) {
      console.log(e);
    }
  };

  playersCtx[`${props.inputName}`] = userProfile;

  return (
    <div>
      <input
        type="text"
        name={`${props.inputName}`}
        id={`${props.inputName}`}
        required
      />
      <input type="submit" value="Submit" onClick={getUser} />
    </div>
  );
};

export default UserInput;
