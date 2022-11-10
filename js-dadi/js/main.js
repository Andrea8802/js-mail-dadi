// Gioco in cui si scommette control il pc con un lancio di dadi virtuale, generando un numero da 1 a 6 e stabilendo il vincitore in base a chi lancia il numero più alto.

// Generare un numero casuale da 1 a 6 per il giocatore.
const numeroGiocatore = Math.floor(Math.random() * 6 + 1);

// Generare un numero casuale da 1 a 6 per il pc.
const numeroPc = Math.floor(Math.random() * 6 + 1);

if (numeroGiocatore > numeroPc){
    console.log("Hai vinto!");

} else if (numeroGiocatore === numeroPc){
    console.log("Pareggio!");

} else{
    console.log("Hai perso!");
}
// Output vincitore.