import formatContributions from "../../utils/formatContributions";

const fetchUser = async (username, team) => {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: `query {
          user(login: "${username}") {
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
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    });
    const data = await response.json();
    const userData = data.data.user;
    return {
      avatarUrl: userData.avatarUrl,
      name: userData.name,
      login: userData.login,
      bio: userData.bio,
      contributions: formatContributions(
        userData.contributionsCollection.contributionCalendar.weeks,
        team
      ),
    };
  } catch (e) {
    return {
      avatarUrl:
        "https://cdn.themis-media.com/media/global/images/library/deriv/1291/1291107.gif",
      name: "(-(-_(-_-)_-)-)",
      login: "Your unfinished projects",
      bio: `Unlike your unfinished projects, this player doesn't exist.`,
      contributions: new Array(365)
        .fill(null)
        .map((n) => (n = Math.floor(Math.random() * 2))),
    };
  }
};

export default fetchUser;
