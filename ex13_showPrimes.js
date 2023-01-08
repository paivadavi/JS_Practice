showPrimes(20);

// takes a limt and shows all prime numbers up to this limit.;

function showPrimes(limit) {
    for (let i = 2; i < limit; i++) {
        if(isPrime(i))
            console.log(i);
    }
}

function isPrime(number) {
    if (number === 2 || number === 3)
        return true;

    for(let i = 2; i < number; i++) {
        if(number % i === 0)
            return false;
        if(number % 2 === 0)
            return false;
        if(number % 3 === 0)
            return false;
        else
            return true;
    }
}