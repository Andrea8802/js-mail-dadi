// Verificare che l'email inserita sia fra quelle all'interno della lista delle email ammesse.

// Stiliamo una lista con un array delle email che possono accedere.
const emailAutorizzate = ["giovanniaugello23@gmail.com", "lorenzoferrari009@yahoo.com", "mariastassi@libero.it"];

// Input dell'email dell'utente.
const esito = document.querySelector(".esito");
const accedi = document.getElementById("accedi");


accedi.addEventListener("click",
    function(){
        esito.innerHTML = "Inserisci il tuo nome e la tua email par accedere!"
        const nomeUtente = document.getElementById("nome");
        const emailUtente = document.getElementById("email");
        let autorizzato = 0;
        // Verifichiamo se l'email è autorizzata o meno.
        if (emailUtente.value === "" || nomeUtente.value === ""){
            alert("compila i campi per accedere!");
        } else{
            for (let i = 0; i < emailAutorizzate.length; i++){
                if (emailUtente.value === emailAutorizzate[i]){
                    // Output dell'esito.
                    esito.innerHTML = "Benvenuto " + nomeUtente.value + "!";
                    autorizzato = 1;
                }
            }
    
            if (autorizzato != 1){
                // Output dell'esito.
                esito.innerHTML = "Mi dispiace " + nomeUtente.value + ", ma la sua email non è autorizzata all'accesso.";
            }
    
            nomeUtente.value = "";
            emailUtente.value = "";
        }
        
    }
)


