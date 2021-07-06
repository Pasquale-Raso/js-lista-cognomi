// Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente sia in console che in pagina
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var cognomeUtente = prompt('digita il tuo cognome?')

var listaCognomi = [ 'nero', 'verde', 'bianco', 'giallo', 'blu', 'viola', 'arancio' ];

listaCognomi.push(cognomeUtente.toLowerCase());

listaCognomi.sort();

var a = listaCognomi.indexOf(cognomeUtente.toLowerCase());

console.log(a);
console.log(listaCognomi);

var posizione = document.getElementById('posizione');
posizione.innerHTML ='Il tuo cognome è stato inserito alla posizione n° ' + (a + 1) + ' della lista cognomi';

var lista = document.getElementById('lista');
lista.innerHTML = listaCognomi + ' ';