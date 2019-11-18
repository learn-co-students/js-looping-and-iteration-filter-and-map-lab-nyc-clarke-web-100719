// Code your solution here:
// FILTER: [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
// MAP arr.map(element => element.doSomethingToItttt) 
// OR
// MAP [1, 2, 3].map(function(num) {return num * num;});

function driversWithRevenueOver(drivers, revenue) {
// It returns an array of driver objects 
// that have a revenue attribute 
// that is greater than the passed-in 
// revenue argument
    let filtered = drivers.filter(d => d.revenue > revenue);
    return filtered
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let filtered = drivers.filter(d => d.revenue > revenue);
    let driverNames = filtered.map(d => d.name)
        return driverNames;
}

function exactMatch(drivers, obj) {
   let driver = drivers.filter(driver => driver.name == obj.name || driver.revenue == obj.revenue)
   return driver;
}

function exactMatchToList(drivers, obj) {
    // let driver = drivers.filter(driver => driver.name == obj.name || driver.revenue == obj.revenue)
    let resultArr = [];
    for (const d of drivers) {
        // console.log(d.name);
        if (d.name === obj.name || d.revenue === obj.revenue) {
            resultArr.push(d.name);
        }
    }
    return resultArr;
}