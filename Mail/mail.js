// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Tenete presente che non è permesso utilizzare funzioni built-in degli array come Array.includes() e Array.indexOf(), pena l'annullamento dell'esercizio.

const mailList = [
    "gino.ginetto@gmail.com",
    "pippo.pippetto@alice.it",
    "fido.golden.retreiver@bau.com",
    "rick.morty@rutto.it",
    "vittorio.sgarbi@capra.com",
    "carlo.conti@ghigliottina?.it",
    "spazzolini.sui@denti.com"
]

console.log (mailList)

const mailUtente = prompt ("Inserisci la tua e-mail per accedere")
let accessoEseguito = false

for (let i = 0 ; i < mailList.length ; i++) {
    if (mailUtente === mailList[i]) {
        accessoEseguito = true
    }
}

if (accessoEseguito === true) {
    console.log ("Accesso eseguito")
} else {
    console.log ("Accesso negato")
}
