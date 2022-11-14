// Verificare che l'email inserita sia fra quelle all'interno della lista delle email ammesse.

// Stiliamo una lista con un array delle email che possono accedere.
const emailAutorizzate = ["giovanniaugello23@gmail.com", "lorenzoferrari009@yahoo.com", "mariastassi@libero.it"];

// Input dell'email dell'utente.
let emailUtente = prompt("Inserisci la tua email");
let autorizzato = false;
// Verifichiamo se l'email è autorizzata o meno.
for (let i = 0; i < emailAutorizzate.length; i++){
    if (emailUtente === emailAutorizzate[i]){
        
        autorizzato = true;
    }
}

if (autorizzato === true){
    // Output dell'esito.
    console.log("Benvenuto!");
} else{
    // Output dell'esito.
    console.log("Mi dispiace, ma la sua email non è autorizzata all'accesso!");
} 


