// ARRAY

// Definizione di un array
let numeri = [1, 2, 3, 4, 5]; // Array di numeri

let lettere = ['a', 'b', 'c', 'd']; // Array di stringhe

let vario = [1, 'a', true, null]; // Array di diversi tipi di dati

// Accedere agli elementi dell'array
console.log(numeri[0]); // Stampa 1
console.log(lettere[1]); // Stampa 'b'
console.log(vario[2]); // Stampa true
console.log(numeri[5]); // Stampa undefined (l'array ha solo 5 elementi, da 0 a 4)

// Modificare un elemento dell'array
numeri[0] = 10; // Modifica il primo elemento dell'array
console.log(numeri[0]); // Stampa 10

// Aggiungere un elemento all'array
numeri.push(6); // Aggiunge il numero 6 all'array
console.log(numeri[5]); // Stampa 6

// Rimuovere un elemento dall'array
numeri.pop(); // Rimuove l'ultimo elemento dall'array
console.log(numeri[4]); // Stampa undefined (l'array ha solo 5 elementi, da 0 a 4)

// Rimuovere il primo elemento dell'array
numeri.shift(); // Rimuove il primo elemento dall'array
console.log(numeri[0]); // Stampa 2

// Aggiungere un elemento all'inizio dell'array
numeri.unshift(0); // Aggiunge il numero 0 all'inizio dell'array
console.log(numeri[0]); // Stampa 0

// Stampa l'intero array
console.log(numeri); // Stampa [0, 2, 3, 4, 5]

// Stampa la lunghezza dell'array
console.log(numeri.length); // Stampa 5

// Stampa l'array in modo ordinato
console.log(numeri.sort()); // Stampa [0, 2, 3, 4, 5]
console.log(lettere.sort()); // Stampa ['a', 'b', 'c', 'd']
console.log(vario.sort()); // Stampa [1, 'a', null, true]

// Stampa l'array in modo inverso
console.log(vario.reverse()); // Stampa [true, null, 'a', 1]
console.log(lettere.reverse()); // Stampa ['d', 'c', 'b', 'a']
console.log(numeri.reverse()); // Stampa [5, 4, 3, 2, 0]

// Stampa l'array in modo casuale
console.log(numeri.sort(() => Math.random() - 0.5)); // Stampa l'array in modo casuale
console.log(lettere.sort(() => Math.random() - 0.5)); // Stampa l'array in modo casuale
console.log(vario.sort(() => Math.random() - 0.5)); // Stampa l'array in modo casuale
