
// VARIABILI:

// Dichiarazione di una variabile
var numero;
var nome;
var totale;

// Assegnazione di un valore a una variabile
nome = "Mario";
numero = 10;
totale = 20 + 30;

// Dichiarazione e assegnazione di una variabile
var cognome = "Rossi";

console.log(nome); // Stampa "Mario"
console.log(cognome); // Stampa "Rossi"
console.log(numero); // Stampa 10
console.log(totale); // Stampa 50

// Tipi di dato:
// Stringa, numero, booleano, oggetto, array

// Stringa
var cognome = "Rossi";

// Numero
var numero = 10;

// Booleano
var vero = true;

// Oggetto
var persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30
};

logger.log(persona.nome); // Stampa "Mario"
logger.log(persona.cognome); // Stampa "Rossi"
logger.log(persona.eta); // Stampa 30

// Array
var numeri = [1, 2, 3, 4, 5];

// Tipi di variabile
// let, const

// let: variabile che può essere modificata
let numero = 10;
numero = 20; // Modifica il valore della variabile
console.log(numero); // Stampa 20

// const: variabile che non puoi modificare
const numero = 10;  // Dichiarazione di una costante

// esempio di utilizzo di const
const pi = 3.14; // Dichiarazione di una costante
console.log(pi); // Stampa 3.14

// pi = 3.14159; // Errore: non puoi modificare una costante
// console.log(pi); // Stampa 3.14