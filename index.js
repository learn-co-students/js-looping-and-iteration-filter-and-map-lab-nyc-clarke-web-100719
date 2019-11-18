function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (ele) {
        return ele.revenue > revenue
    })
}
function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue)
        .map(function (ele) {
            return ele.name
    })
}
function exactMatch (drivers, matcher) {
    return drivers.filter(function (driver) {
        let matches
        for (const key in matcher) {
            matches = driver[key] === matcher[key]
        }
    return matches
    })
}
function exactMatchToList(drivers, matcher) {
    return exactMatch(drivers, matcher)
        .map(function (ele) {
            return ele.name
        })
}

