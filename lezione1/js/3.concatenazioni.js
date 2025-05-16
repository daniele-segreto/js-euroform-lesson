let nome = 'Paolo';
let cognome = 'Verdi';
let eta = 30;
let citta = 'Roma';
let professione = 'Sviluppatore';
let hobby = 'Calcio';

// conatenazione standard
let frase_a = 'Ciao mi chiamo ' + nome + ' ' + cognome + ', ho ' + eta + ' anni, vivo a ' + citta + ', sono un ' + professione + ' e mi piace ' + hobby + '.';

// concatenazione con backtick
let frase_b = `${nome} ${cognome} ha ${eta} anni e vive a ${citta}.`;

console.log(frase_a);
console.log(frase_b);

// concatenazione stringa + stringa numero (esempio 1)
// in questo caso il numero viene convertito in stringa
// quindi il risultato sarà 'Ciao10'
let stringa_1 = 'Ciao';
let numero_1 = 10;
let concat_1 = stringa_1 + numero_1;
console.log(concat_1);

// concatenazione stringa + numero (esempio 2)
// in questo caso il numero viene convertito in stringa
// quindi il risultato sarà '5' + 10 = '510'
let stringa_2 = '5';
let numero_2 = 10;
let concat_2 = stringa_2 + numero_2;
console.log(concat_2);

// parseInt: converte una stringa in un numero intero
// in questo caso il risultato sarà 5 + 10 = 15
let stringa_3 = '5';
let numero_3 = 10;
let concat_3 = parseInt(stringa_3) + numero_3;
console.log(concat_3);