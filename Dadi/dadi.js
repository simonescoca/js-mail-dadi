// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Teniamo presente che per il gioco dei dadi non serviranno gli array, ma per l'esercizio delle mail....

let numeroDadoGiocatore = parseInt( (Math.random() * 6) + 1)
let numeroDadoComputer = parseInt( (Math.random() * 6) + 1)

if (numeroDadoComputer > numeroDadoGiocatore) {
    console.log ("Il Giocatore tira il dado e ottiene un: " + numeroDadoGiocatore + ". Il computer tira il dado e ottiene un: " + numeroDadoComputer + ", vince il Computer!")
} else if (numeroDadoGiocatore > numeroDadoComputer) {
    console.log ("Il Computer tira il dado e ottiene un: " + numeroDadoComputer + ". Il giocatore tira il dado e ottiene un: " + numeroDadoGiocatore + ", vince il Giocatore!")
} else {
    console.log ("Il Giocatore tira il dado e ottiene un: " + numeroDadoGiocatore + ". Il computer tira il dado e ottiene un: " + numeroDadoComputer + ". Stesso risultato, si rigioca!")
}