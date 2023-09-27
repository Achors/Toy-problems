let carSpeed = parseInt(prompt("Enter your speed!"));
const speedLimit = 70;
const speedInterval = 5;
const interval = Math.floor((carSpeed - speedLimit)/speedInterval)
function speedDetector () {
    if (carSpeed <= speedLimit){
        return ("Ok");
    } else if (interval >= 1 && interval < 12) {        
        return (`Points: ${interval}`);

    } else if (interval >= 12) {
        return ("License suspended!");
    } else {
        return ("Kindly do numbers!");
    }
}
console.log(speedDetector());