// CONDIZIONI
// if, else if, else

let condition = 10;

if (condition === 7) {
    console.log("La condizione è vera");
} else {
    console.log("La condizioneè falsa");
}

let logedId = true;

if (logedId) {
    console.log("Benvenuto");
} else {
    console.log("Devi effettuare il login");
}

// switch
let day = 2;

switch (day) {
    case 1:
        console.log("Lunedi");        
        break;
    case 2:
        console.log("Martedi");        
        break;
    case 3:
        console.log("Mercoledi");        
        break;
    case 4:
        console.log("Giovedi");        
        break;
    case 5:
        console.log("Venerdi");        
        break;
    case 6:
        console.log("Sabato");        
        break;
    case 7:
        console.log("Domenica");        
        break;
    default:
        console.log("Giorno non valido");
        break;
}