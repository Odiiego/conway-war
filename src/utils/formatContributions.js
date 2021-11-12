const formatContributions = (arr, team) => {
  const userContributions = [];
  arr.map((weekArr) => {
    return weekArr.contributionDays.map((day) => {
      return team === "playerA"
        ? userContributions.push(day.contributionCount > 0 ? 1 : 0)
        : userContributions.unshift(day.contributionCount > 0 ? 1 : 0);
    });
  });
  while (userContributions.length < 371) {
    team === "playerA"
      ? userContributions.push(0)
      : userContributions.unshift(0);
  }
  return userContributions;
};

export default formatContributions;
