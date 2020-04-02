//////////////////// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserire parola');

var result = palindromo(parola);

console.log(result);

function palindromo (pal) {

  // var reverse = pal.split('').reverse().join('');
  //
  // if (reverse === pal) {
  //
  //   return ('Palindromo = ') + reverse + ' = ' + pal;
  //
  // }
  //
  //   return ('Non è palindromo = ') + reverse + ' = ' + pal;

  for (var i = 0; i < pal.length / 2; i++) {


    if (pal[i] !== pal[pal.length - 1 - i])

    return ('Non è palindromo = ') + pal;
  }

    return ('Palindromo = ') + pal;

}


//////////////////// Pari e Dispari
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function pariEdispari () {
  var pariOdispari = prompt('Pari o Dispari?');
  var numeroUser = parseInt( prompt('Numero da 1 a 5') );

  var numeroPC = Math.floor( Math.random() * 5) + 1;
  console.log(numeroPC + ' Numero del PC');
  console.log(numeroUser + ' Numero User');
  console.log(pariOdispari);

  var numeroTot = numeroUser + numeroPC;
  console.log(numeroTot + ' Somma Totale');
    if (numeroTot % 2 == 0 && pariOdispari == 'Pari') {
      console.log('Hai vinto!');
    } else if (numeroTot % 2 != 0 && pariOdispari == 'Dispari') {
      console.log('Hai vinto!');
    } else {
      console.log('Hai perso!');
    }
}
