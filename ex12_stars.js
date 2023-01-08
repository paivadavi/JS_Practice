function stars(number) {
    for(let i = 1; i <= number; i++) {
        console.log(starLine(i));
    }
    console.log("\n-------------------");
}

function starLine(number) {
    let line = "";
    for(let i = 1; i <= number; i++) {
        line += "*"
    }
    return line;
}

stars(1);
stars(3);
stars(5);
stars(10);
