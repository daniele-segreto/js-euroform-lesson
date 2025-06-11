// Crea un oggetto vuoto
let oggetto = {};

// Crea un oggetto con proprietà e metodi  
let persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    saluta: function() {
        console.log("Ciao, sono " + this.nome + " " + this.cognome);
    }
}

// Accedi alle proprietà dell'oggetto
console.log(persona.nome); // "Mario"
console.log(persona.cognome); // "Rossi"
console.log(persona.eta); // 30

// Accedi ai metodi dell'oggetto
persona.saluta(); // Stampa "Ciao, sono Mario Rossi"

// Modifica le proprietà dell'oggetto
persona.eta = 31;
console.log(persona.eta); // 31

// Aggiungi una nuova proprietà all'oggetto
persona.citta = "Roma";
console.log(persona.citta); // "Roma"

// Rimuovi una proprietà dall'oggetto
delete persona.citta;
console.log(persona.citta); // undefined

// Crea un oggetto con un costruttore
function Persona(nome, cognome, eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.saluta = function() {
        console.log("Ciao, sono " + this.nome + " " + this.cognome);
    }
}

// Crea un oggetto utilizzando il costruttore
let persona2 = new Persona("Luigi", "Bianchi", 25);
console.log(persona2.nome); // "Luigi"
console.log(persona2.cognome); // "Bianchi"
console.log(persona2.eta); // 25
persona2.saluta(); // Stampa "Ciao, sono Luigi Bianchi"

// Modifica le proprietà dell'oggetto
persona2.eta = 26;
console.log(persona2.eta); // 26

// Aggiungi una nuova proprietà all'oggetto
persona2.citta = "Milano";
console.log(persona2.citta); // "Milano"

// Rimuovi una proprietà dall'oggetto
delete persona2.citta;
console.log(persona2.citta); // undefined