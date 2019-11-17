// Code your solution here:
function driversWithRevenueOver(arr, amount){
    return arr.filter(function(driver){return driver.revenue > amount});
};

function driverNamesWithRevenueOver(arr,amount){
    return driversWithRevenueOver(arr,amount).map(function(rider){return rider.name;});
};

function exactMatch(arr,hash){
   return arr.filter(function(driver){
        for(const key in hash){
            if(driver[key] === hash[key]) return true;
        }
        return false;
    });
};

function exactMatchToList(arr,hash){
    return exactMatch(arr,hash).map(function(driver){return driver.name;});
};