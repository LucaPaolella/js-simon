"use strict";
//Step 1
let randomNum = [];
for (let i=1; i<=5; i++) {
    randomNum.push(Math.round(Math.random() * 1000)+1)
}
console.log(randomNum)
//Step 2
document.querySelector ('h1').innerHTML = randomNum;

//Step 3

const indovinaNum = document.getElementById("indovina-num");

setTimeout(function () {
    indovinaNum.classList.add("none");;
}, 30000);



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