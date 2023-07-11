// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const twoDrivers = [];
    
    for(let i=0;i<2;i++){
    twoDrivers.push(drivers[i])
    }

    return twoDrivers
}

function returnLastTwoDrivers(drivers){
    const twoDrivers = [];
    return drivers.slice(2)
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    function fareMultiplier(fare){
        fare = fare*multiplier
        return fare
    }
    return fareMultiplier
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers,returnDrivers){
    return returnDrivers(drivers)
}
