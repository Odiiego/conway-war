import "./UserProfile.css";

const UserProfile = (props) => {
  const getUser = async () => {
    const userName = document.getElementById(`${props.inputName}`).value;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify({
        "query": `query {
          user(login: "${userName}") {
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
        }`
      }),
      headers: {
        Authorization: "bearer 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"
      }
    })
    const data = await response.json()
    console.log(data)
    return data
  }

  

  return (
    <div>
      <input
        type="text"
        name={`${props.inputName}`}
        id={`${props.inputName}`}
      />
      <input type="submit" value="Submit" onClick={getUser} />
    </div>
  );
};

export default UserProfile;
