// Gioco in cui si scommette control il pc con un lancio di dadi virtuale, generando un numero da 1 a 6 e stabilendo il vincitore in base a chi lancia il numero più alto.

// Generare un numero casuale da 1 a 6 per il giocatore.
const numeroGiocatore = Math.floor(Math.random() * 6 + 1);

// Generare un numero casuale da 1 a 6 per il pc.
const numeroPc = Math.floor(Math.random() * 6 + 1);

// Verificare chi ha vinto, perso o pareggiato.
if (numeroGiocatore > numeroPc){
    // Output vincita.
    console.log("Hai vinto!");

} else if (numeroGiocatore === numeroPc){
    // Output pareggio.
    console.log("Pareggio!");

} else{
    // Output sconfitta.
    console.log("Hai perso!");
}