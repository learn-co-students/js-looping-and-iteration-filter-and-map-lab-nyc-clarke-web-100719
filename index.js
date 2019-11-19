// Code your solution here:

function log(msg) {
  console.log(msg);
}

function driversWithRevenueOver(arrObjDrivers, intRevenue) {
  return arrObjDrivers
    .filter(objDriver => objDriver.revenue >= intRevenue);
}

function driverNamesWithRevenueOver(arrObjDrivers, intRevenue) {
  return driversWithRevenueOver(arrObjDrivers, intRevenue).map(objDriver => objDriver.name);
}

function exactMatch(arrObjDrivers, objPerson) {
  if (objPerson.name) {
    return arrObjDrivers
      .filter(objDriver => objDriver.name === objPerson.name);
  } else if(objPerson.revenue) {
    return arrObjDrivers
      .filter(objDriver => objDriver.revenue === objPerson.revenue);
  }
}

function exactMatchToList(arrObjDrivers, objPerson) {
  if (objPerson.name) {
    return exactMatch(arrObjDrivers, objPerson).map(objDriver => objDriver.name);
  } else if(objPerson.revenue) {
    return exactMatch(arrObjDrivers, objPerson).map(objDriver => objDriver.name);
    // .map((objDriver) => {
      //   if(objDriver.revenue === objPerson.revenue) {
      //     return objPerson.revenue;
      //   }
      // });
  }
}


