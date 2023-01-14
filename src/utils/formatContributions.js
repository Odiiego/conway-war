const formatContributions = (arr, playerId) => {
    const year = [...arr]
    let contributions = []

    year.forEach((week) => {
        week.forEach((day) => {
            contributions.push(day.contributionCount > 0 ? 
                { status: 1, playerId: playerId } : 
                { status: 0, playerId: 3 })
        })
    })

    contributions = contributions.slice(contributions.length - 364)

    return contributions
}

export default formatContributions;