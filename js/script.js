// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// prendo l'elemento del dom dove inserire l'array di numeri
const containerDom = document.querySelector('.text')
console.log(containerDom)
// creo un array vuto
const arrayNumbersCpu = [];
// creo un array vuoto dell'utente 
const utentNumbers = [];
console.log(arrayNumbersCpu);
console.log(utentNumbers);
// creo aray vuoto di numeri indovinati
const arrayGuessedNumber = []
// faccio un ciclo for per 5 volte dove  pusho 5 numeri casuali tramite una funzione che mi genera numeri casuali
for (let i = 0; i < 5; i++) {
    arrayNumbersCpu.push(getRndInteger(1, 100))

}
// stampo in pagina i 5 numeri dell'array
containerDom.innerHTML += arrayNumbersCpu;
// faccio una funzione che mi fa scomparire dopo 30 secondi i numeri generati
// TROVA FUNZIONE NELLA SEZIONE FUNCTIONS





// FUNCTIONS
// funzione trovata sul w3school per generare numeri casuali https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// funzione per eliminare l'array di numeri dalla pagina 
setTimeout(function () {

    containerDom.innerHTML = '';
}, 3000)
// funzione per chiedere all'utente i numeri
// creo una variabile di numeri indovinati che parte da 0
let guessedNumbers = 0
setTimeout(function () {
    for (let i = 0; i < 5; i++) {
        const askNumber = parseInt(prompt(`Inserisci il ${i + 1}° numero:`));
        // inserisco i numeri dell'utente in un array
        utentNumbers.push(askNumber)

    }
    // confronto i numeri inseriti dall'utente con quelli che erano stampati in pagina

    // scorro l'array dell'utente per prendermi i numeri 
    for (i = 0; i < utentNumbers.length; i++) {
        // metto in una variabile ogni singolo numero dell'array 
        let numbers = utentNumbers[i]
        // controllo se i numeri dell'utente sono presenti nell'array del pc 
        if (arrayNumbersCpu.includes(numbers)) {
            guessedNumbers++
            arrayGuessedNumber.push(numbers)
            console.log(guessedNumbers)
        }

    }
}, 4000)

setTimeout(function () {
    // stampo il risultato sempre in pagina di quanti numeri sono stati indovinati e quali

    if (guessedNumbers != 0) {
        userMessage = prompt('hai indovinato ' + guessedNumbers + ' numeri')
        secondUserMessage = prompt('ecco i numeri indovinati ' + arrayGuessedNumber)
    } else {
        userMessage = prompt('Non hai indovinato nessun numero')
    }


}, 6000)








