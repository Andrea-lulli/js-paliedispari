// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let parola = prompt("Inseirisci una parola");


function palindroma() {
    let inverso = "";

for (let i = parola.length - 1; i >= 0; i--) {

    inverso += parola[i];
}

    return inverso;
}

if (parola === palindroma()) {
    console.log("ok e palindroma");
} else {
    console.log("non è palindroma");
}



