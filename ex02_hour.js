//Hour
//If hour is between 6am and 12pm: Good Morning!
//If it is between 12pm and 6pm: Good afternoon!
//Otherwise: Good evening!

let hour = 20;

if (6 <= hour && hour < 12) 
    console.log('Good morning');
else if (12 <= hour && hour < 18)
    console.log('Good afternoon');
else 
    console.log('Good evening!');