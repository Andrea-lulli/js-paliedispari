// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// // Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione).
// // Sommiamo i due numeri
// // Stabiliamo se la somma dei due numeri è pari o dispari
//  (usando una funzione)
// // Dichiariamo chi ha vinto.


let sceltaUtente = prompt("scegli pari o dispari")

let InserisciNumero = parseInt(prompt("Inseirisci una numero"));

let pari;

let dispari;

function Random() {
    return Math.floor(Math.random() * 5) + 1;
}

let numeroRandom = Random()
console.log(numeroRandom);
let som = InserisciNumero + numeroRandom;
console.log(som);



function scelta(x, y) {


    if (x % 2 == 0) {
        pari = "pari";

    } else {
        dispari = "dispari";
    }


    if (y == pari) {
        console.log("hai vinto");

    } else {
        console.log("hai perso");
    }

}

scelta(som, sceltaUtente)

