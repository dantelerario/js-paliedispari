//////////////////// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserire parola');

var result = palindromo(parola);

console.log(result);

function palindromo(pal) {

  var reverse = pal.split('').reverse().join('');

  if (reverse === pal) {

    return ('Sono palindromi = ') + reverse + ' = ' + pal;

  } else {

    return ('Non sono palindromi = ') + reverse + ' = ' + pal;

  }

}






//////////////////// Pari e Dispari
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
