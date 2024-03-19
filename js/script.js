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
console.log(arrayNumbersCpu)
// faccio un ciclo for per 5 volte dove  pusho 5 numeri casuali tramite una funzione che mi genera numeri casuali
for (let i = 0; i < 5; i++) {
    arrayNumbersCpu.push(getRndInteger(1, 100))

}
// stampo in pagina i 5 numeri dell'array
containerDom.innerHTML += arrayNumbersCpu
// faccio una funzione che mi fa scomparire dopo 30 secondi i numeri generati
// TROVA FUNZIONE NELLA SEZIONE FUNCTIONS

// confronto i numeri inseriti dall'utente con quelli che erano stampati in pagina
// stampo il risultato sempre in pagina di quanti numeri sono stati indovinati

// FUNCTIONS
// funzione trovata sul w3school https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// funzione per eliminare l'array di numeri dalla pagina 
setTimeout(function () {

    containerDom.innerHTML = ''
}, 3000)

setTimeout(function () {
    for (let i = 0; i < 5; i++) {
        const askNumber = parseInt(prompt('Indovina i 5 numeri presenti in pagina poco fa'))
        console.log(askNumber)
    }
}, 4000)






