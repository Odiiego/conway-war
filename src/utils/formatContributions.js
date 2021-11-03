const formatContributions = (arr) => {
  const userContributions = [];
  arr.map((weekArr) => {
    return weekArr.contributionDays.map((day) => {
      return userContributions.push(day.contributionCount > 0 ? 1 : 0);
    });
  });
  return userContributions;
};

export default formatContributions;
