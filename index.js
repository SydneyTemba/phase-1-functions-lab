// Code your solution in this file!
const headquarter = 42;
const block = 264;
function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    return Math.abs(pickupLocation - headquarter)
  }
  distanceFromHqInBlocks()

function distanceFromHqInFeet(pickupLocation) {
    return (Math.abs(pickupLocation - headquarter) *block)
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  distanceFromHqInFeet()

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (Math.abs(destination - start) *block)
  }
  distanceTravelledInFeet()

  function calculatesFarePrice(start, destination) {
    const feet = (Math.abs(destination-start)* block)
    if (feet < 400) {
        return 0;
    } else if (feet <2000) {
        return 2.56;
    } else if(feet <2500) {
        return 25
    }else{
        return "cannot travel that far"
    }
    //returns the fare for the customer
  }