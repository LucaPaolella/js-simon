"use strict";
//Step 1

//Primo try, poi scartato. Forse era la strada giusta però.

/*let randomNum = [];
for (let i=1; i<=5; i++) {
    randomNum.push(Math.round(Math.random() * 1000)+1)
}*/

//Seconda strada Step 1
let randomNum = [];

const primoRandomNum = (Math.round(Math.random() * 1000)+1);
const secondoRandomNum = (Math.round(Math.random() * 1000)+1);
const terzoRandomNum = (Math.round(Math.random() * 1000)+1);
const quartoRandomNum = (Math.round(Math.random() * 1000)+1);
const quintoRandomNum = (Math.round(Math.random() * 1000)+1);

randomNum.push(primoRandomNum, secondoRandomNum, terzoRandomNum, quartoRandomNum, quintoRandomNum);
console.log(randomNum);
//Step 2
document.querySelector ('h1').innerHTML = randomNum;

//Step 3

const indovinaNum = document.getElementById("indovina-num");

setTimeout(function () {
    indovinaNum.classList.add("none");
}, 30000);

//Step 4

setTimeout(function () {
    let risposte = [];

    const primoNum=Number(prompt("Quale era il primo numero?"));
    const secondoNum=Number (prompt("Quale era il secondo numero?"));
    const terzoNum=Number (prompt("Quale era il terzo numero?"));
    const quartoNum=Number (prompt("Quale era il quarto numero?"));
    const quintoNum= Number (prompt("Quale era il quinto numero?"));

    risposte.push(primoNum, secondoNum, terzoNum, quartoNum, quintoNum)
    console.log(risposte)

    //Step 5

    //confronto primo num
    if (primoNum == primoRandomNum){
        alert("Questo è il risultato del primo numero: BRV");
    }
    else {
        alert ("Questo è il risultato del primo numero: noBRV") ;
    }

    //confronto secondo num
    if (secondoNum == secondoRandomNum){
        alert("Questo è il risultato del secondo numero: BRV");
    }
    else {
        alert ("Questo è il risultato del secondo numero: noBRV") ;
    }

    //confronto terzo num
    if (terzoNum == terzoRandomNum){
        alert("Questo è il risultato del terzo numero: BRV");
    }
    else {
        alert("Questo è il risultato del terzo numero: noBRV");
    }

    //confronto quarto num
    if (quartoNum == quartoRandomNum){
        alert("Questo è il risultato del quarto numero: BRV");
    }
    else {
        alert ("Questo è il risultato del quarto numero: noBRV") ;
    }

    //confronto quinto num
    if (quintoNum == quintoRandomNum){
        alert("Questo è il risultato del quinto numero: BRV");
    }
    else {
        alert ("Questo è il risultato del quinto numero: noBRV") ;
    }

}, 31000);


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