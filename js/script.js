// Selezioniamo Play
document.getElementById("play").addEventListener("click", function(){
    Minesweeper()
})

// La funzione crea la grglia con il gioco
function Minesweeper(){
    // Contatore che viene svuotato ad ogni partita
    localStorage.clickcount = 0;

    //Svuoto il container ad ogni inizio altrimenti i box si sommeranno sotto
    document.querySelector('.outerSquare').innerHTML = '';
    document.getElementById('conta').innerHTML = '';
    
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


    // Questa funzione crea i vari box
    function boxCreator(numbInsideBox) {
        const box = document.createElement("div");
        box.classList.add("square");
        const width =  `calc(100% / ${boxRow})`;
        box.style.width = width;
        box.innerHTML = numbInsideBox;
        return box;
    }


    
    
    //Questa mi restituisce un numero casuale secondo il range di livello
    const RandomBomb = () =>Math.floor(Math.random() * (boxNumb - 2) + 1);
    
    // Dichiaro il numero di bombe che voglio
    const bombs = 16;
    
    // Dichiaro una array vuoto che conterra le mie bombe
    const arrayBombs = [];
    
    // Ciclo per non creare duplicati di bombe
    for(let i = 0; i < bombs; i++){
        let bomb = RandomBomb();
        if(!arrayBombs.includes(bomb)){
            arrayBombs.push(bomb);
        }
    }
    

    console.log(arrayBombs);
    // Questo ciclo inserisce i box all'interno del container a seconda la seleziona che abbiamo fatto in precedenza
    const containerBox = document.querySelector('.outerSquare');
    


    // Questa funzione termina il gioco colorando tutti i box
    function gameOver(){
        document.querySelector('.outerSquare').innerHTML = '';
        
        for(let i = 1; i <= boxNumb; i++)
        {
            box = boxCreator(i);

            if (arrayBombs.includes(i)){
                box.classList.add("gameover");
            } 
            else{
                box.classList.add("selected");
            }
            containerBox.append(box);
        }
    }

    // Faccip aèrtire un ciclo per popolare  il quadrato
    for(let i = 1; i <= boxNumb; i++){
        box = boxCreator(i);

        // Inserisco la classe bomb come alert per finire il gioco
        if (arrayBombs.includes(i)){
            box.classList.add("bomb")
        }

        // Al click dei box ...
        box.addEventListener('click', function(){
            //... aumento il contatore click
            if (localStorage.clickcount) {localStorage.clickcount = Number(localStorage.clickcount) + 1;
            } else {localStorage.clickcount = 1;}

            // Se clicco su un box che contiene la classe bomb termino il gioco con la funzione gameover
            if(this.classList.contains('bomb')){
                gameOver();
                document.getElementById('conta').innerHTML = `Hai selezionato ${localStorage.clickcount} caselle prima di perdere`
            } 
            //Altrimenti coloro il box di blu con l'aggiunta della classe selected
            else {
                this.classList.add("selected");
            }
        });
        containerBox.append(box);
    }
}

