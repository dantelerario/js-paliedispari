//////////////////// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// var parola = prompt('Inserire parola');
//
// var result = palindromo(parola);
//
// console.log(result);

// function palindromo(pal) {
//
//   // var reverse = pal.split('').reverse().join('');
//   //
//   // if (reverse === pal) {
//   //
//   //   return ('Palindromo = ') + reverse + ' = ' + pal;
//   //
//   // }
//   //
//   //   return ('Non è palindromo = ') + reverse + ' = ' + pal;
//
//   for (var i = 0; i < pal.length / 2; i++) {
//
//
//     if (pal[i] !== pal[pal.length - 1 - i])
//
//     return ('Non è palindromo = ') + pal;
//   }
//
//     return ('Palindromo = ') + pal;
//
// }


//////////////////// Pari e Dispari
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var numero = parseInt( prompt('Inserisci numero da 1 a 5') );

var pariDispari = prompt('Scegli pari o dispari');

var risultato = pariOdispari();

console.log(risultato);

function pariOdispari() {
    if (numero < 1 && numero > 5) {
      var numero = parseInt( prompt('HO DETTO DA 1 a 5!!!') );
    }
    // Numero random da 1 a 5
    var numeroPC = Math.floor( Math.random() * 5) + 1;

    if (numero + numeroPC % 2 == 0) {
      return ('Vince il pari');
    }

    return ('Vince il dispari')
}
