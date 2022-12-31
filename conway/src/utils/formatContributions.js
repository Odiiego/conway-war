const formatContributions = (arr) => {
    const year = [...arr]
    let contributions = []

    year.forEach((week) => {
        week.forEach((day) => {
            contributions.push(day.contributionCount > 0 ? 1 : 0)
        })
    })

    contributions = contributions.slice(contributions.length - 365)

    return contributions
}

export default formatContributions;