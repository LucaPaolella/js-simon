"use strict";

let randomNum = [];
for (let i=1; i<=5; i++) {
    randomNum.push(Math.round(Math.random() * 1000)+1)
}
console.log(randomNum)

document.querySelector ('h1').innerHTML = randomNum;


/*function createBombs(nBombs, min, max) {
    const bombList = []; //0

    while (bombList.length < nBombs) {
        const bombNumber = getRndInteger(min, max);

        if (!bombList.includes(bombNumber)) {
            bombList.push(bombNumber);
        }
    }

    return bombList;

}*/