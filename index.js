// Code your solution here:

function driversWithRevenueOver(arr, rev) {

   return arr.filter(function (ele) {
       return ele.revenue > rev; 
    });
}

// let drivers = [ { name: 'Sally',   revenue: 400 },
// { name: 'Annette', revenue: 200 },
// { name: 'Jim',     revenue: 150 }]

// console.log(driversWithRevenueOver(drivers, 250))

function driverNamesWithRevenueOver(arr, rev) {
   return driversWithRevenueOver(arr,rev).map(function (ele) {
       return ele.name;
   });
}


function exactMatch(arr, hash) {
return arr.filter(function (ele) {
   if (ele.name == hash.name || ele.revenue == hash.revenue) {
       return ele;
   }
});    
}


function exactMatchToList(arr, hash) {
    return exactMatch(arr,hash).map(function (ele) {
       return ele.name; 
    });
}