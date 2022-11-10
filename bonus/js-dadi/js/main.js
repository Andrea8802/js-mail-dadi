// Gioco in cui si scommette control il pc con un lancio di dadi virtuale, generando un numero da 1 a 6 e stabilendo il vincitore in base a chi lancia il numero più alto.

const esito = document.getElementById("esito");
const button = document.getElementById("button");
const labelScore = document.getElementById("score");
let score = 0;

button.addEventListener("click",
    function(){

        // Generare un numero casuale da 1 a 6 per il giocatore.
        const numeroGiocatore = Math.floor(Math.random() * 6 + 1);
        // Generare un numero casuale da 1 a 6 per il pc.
        const numeroPc = Math.floor(Math.random() * 6 + 1);

        // Verificare chi ha vinto, perso o pareggiato.
        if (numeroGiocatore > numeroPc){
            // Output vincita.
            esito.innerHTML = "Hai Vinto!"
            esito.style.color = "lime";
            score += 1;
            labelScore.innerHTML = score;

        } else if (numeroGiocatore === numeroPc){
            // Output pareggio.
            esito.innerHTML = "Pareggio!"
            esito.style.color = "blue";
            labelScore.innerHTML = score;


        } else{
            // Output sconfitta.
            esito.innerHTML = "Hai Perso!"
            esito.style.color = "red";
            score -= 1;
            labelScore.innerHTML = score;

        }

    }
)
