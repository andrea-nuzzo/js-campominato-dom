// Selezioniamo Play
document.getElementById("play").addEventListener("click", function(){
    Minesweeper()
})

// La funzione crea la grglia con il gioco
function Minesweeper(){
    
    // Seleziona la toolbar e faccio scegliere il livello
    const selectLevel = parseInt(document.getElementById("level").value);

    // BoxNumb rappresenta il totale dei box che sranno presenti
    let boxNumb;

    switch(selectLevel){
        //Easy
        case 1:
            boxNumb = 100;
            break;
        //Medium
        case 2:
            boxNumb = 81;
            break;
        //Hard
        case 3:
            boxNumb = 49;
            break;
    }
    // boxRow rappresenta il numero di box per riga
    boxRow = Math.sqrt(boxNumb);

    console.log(boxNumb);
    console.log(boxRow);



}

