// Code your solution here:
function driversWithRevenueOver(drivers, revenueCap){
    return drivers.filter(function(driver){return driver.revenue>revenueCap;});
}

function driverNamesWithRevenueOver(drivers, revenueCap){
    return driversWithRevenueOver(drivers, revenueCap).map(function(driver){return driver.name;});
}

function exactMatch(drivers, object){
    return drivers.filter(function(driver){
        let ret = false; 
        for (const att in object) {
            if (driver[att] === object[att]) {
                ret = true;
            } 
        }
        return ret; 
    });
}

function exactMatchToList(drivers, object){
    return exactMatch(drivers, object).map(function(driver){return driver.name;});
}