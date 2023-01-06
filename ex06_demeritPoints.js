function checkSpeed(speed) {
    if (speed < 75) {
        return "OK";
    }
    else if (speed >= 75) {
        let extraSpeed = speed - 70;
        let points = Math.floor(extraSpeed / 5);
        if (points < 12)
            return points;
        else
            return "License Suspended";

    }
    
}

console.log(checkSpeed(72));
console.log(checkSpeed(75));
console.log(checkSpeed(80));
console.log(checkSpeed(85));
console.log(checkSpeed(90));
console.log(checkSpeed(95));
console.log(checkSpeed(100));
console.log(checkSpeed(105));
console.log(checkSpeed(110));
console.log(checkSpeed(115));
console.log(checkSpeed(120));
console.log(checkSpeed(125));
console.log(checkSpeed(130));
console.log(checkSpeed(135));
console.log(checkSpeed(140));
console.log(checkSpeed(180));



