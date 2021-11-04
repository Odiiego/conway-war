import formatContributions from "../../utils/formatContributions";


const fetchUser = async (username) => {
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
        userData.contributionsCollection.contributionCalendar.weeks
      ),
    };
  } catch (e) {
    console.log(e);
  }
};

export default fetchUser;