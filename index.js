function driversWithRevenueOver(arr, rev) {
    let newArr = [];
    arr.filter(function(el){
        if (el.revenue > rev) 
            newArr.push(el);
    })
    return newArr
}

function driverNamesWithRevenueOver(arr, rev) {
    let newArr = [];
    arr.filter(function(el){
        if (el.revenue > rev) 
            newArr.push(el.name);
    })
    return newArr
}

function exactMatch(arr, obj) { 
    let newArr = [];
    let objValue = Object.values(obj)[0];
    arr.filter(function(el) {
        let driverKeys = Object.values(el);
        for (const element of driverKeys) {
            if (element === objValue) {
                newArr.push(el);
            }
        } 
    });
    return newArr
}

function exactMatchToList(arr, obj) {
    let newArr = [];
    let objValue = Object.values(obj)[0];
    arr.filter(function(el) {
        let driverKeys = Object.values(el);
        for (const element of driverKeys) {
            if (element === objValue) {
                newArr.push(el.name);
            }
        } 
    });
    return newArr
}