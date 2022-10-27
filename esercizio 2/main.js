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


function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


 let som = InserisciNumero + (random(1,5)); 
console.log(som);


if (som % 2  == 0 ){
    console.log("pari");

}else {
    console.log("dispari");
}






