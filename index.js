function driversWithRevenueOver(drivers, revenueNum) {
    return drivers.filter(function (driver) {
        return driver.revenue > revenueNum;
    });
};

function driverNamesWithRevenueOver(drivers, revenueNum) {
    let newDrivers = drivers.filter(function (driver) { return driver.revenue > revenueNum});
    return newDrivers.map(function(driver) {
        return driver.name
    })
};

function exactMatch(drivers, attributeObj) {
    return drivers.filter(function (driver) {
        let attribute = Object.keys(attributeObj)
        let value = Object.values(attributeObj)
        for (const key in attributeObj) {
            if (driver[key] === attributeObj[key]) return driver;
          }
    });
};

function exactMatchToList(drivers, attributeObj) {
    let driversArray = exactMatch(drivers, attributeObj)
    return driversArray.map(function(driver) {
        return driver.name
    })
};