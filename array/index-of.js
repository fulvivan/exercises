function indexOf(array, searchElement, fromIndex = 0) {
    var risultato = -1;

    for (var i = fromIndex; (i < array.length && risultato === -1); i++) 
        if (array[i] === searchElement)
            {risultato = i
    }
//             break;
        
        // else { risultato = -1; }
    
    return risultato
}

/*
For LOOP si usa per fare ricerche
if-else if-else: si usa per dare istruzione a cosa restituire nella variante a seconda del risultato della ricerca con Loop.

Spegazione del funzionamento di for e  if:
La variabile i è uguale al fromIndex che normalmente inizia con la posizione 0, se non indichiamo diversamente.
Se la variabile i è più piccola della lunghezza dell'array, allora può eseguire l'if. (Deve essere sempre più piccola perchè per esempio in presenza di 4 numeri, l'ultimo numero sarà l'indice 3, cominciando da 0. Ma la linghezza dell'array è 4)
A questo punto if chiede: array [i] è uguale all'elemento cercato? il primo sarà il codice 0 e così via...
Se non è uguale torna sopra da for e legge i++. Così aggiunge una posizione alla variabile i e diventa 1......e continuando.
Quando trova l'array[i] uguale all'elemento cercato prosegue cambia il risultato della variabile risultato da -1 che gli avevamo dato, al numero dell'indice dove ha trovato l'elemento richiesto.
Dopo ritorna, da il risultato trovato.
Se non lo trova darà il risultato come lo avevamo gia messo noi nella variabile risultato, senza cambiarlo. E sarà -1.
Se vogliamo cambiarlo possiamo aggiungere else.....oppure else if.....
*/

// Questa funzione ritorna un numero.
// El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

// Tra parentesi dopo il nome della funzione ci sono i parametri. Questi sono i dati o valori che useremo per far funzionare la funzione. 
//  Mettiamo array che conterrà i dati.Per esempio numeri o parole.
// Mettiamo searchElement che sarà quello che vogliamo che la funzione cerchi.Mettiamo fromIndex = 0 per dirgli da dove vogliamo che inizi la ricerca. 
// Alcune volte i parametri si chiamano argomenti. Quando si parla di cose concrete. Parametro è solo nel modello.

  // La funzione permette a un codice di essere usato tutte le volte che viene chiamato.
// Prima cosa si dichiara cosa vogliamo creare, in questo caso una funzione.
// Dopo si aggiunge un nome alla funzione. Le funzioni normalmente sono azioni, quindi se possibile il nome sarà un verbo che descrive quello che farà la funzione.
// La creazione di una funzione sarà in modo dichiarazione. Ma una volta creata la userò tutte le volte che voglio sotto forma di espressione dentro una variabile.
// Questa funzione mi dirà se ha trovato quello che gli chiedo e in che posizione dentro dell'array, indice. Per questo si chiamerà indexOf. Per esempio, se chiedo di trovare il numero 5, e questo si trova in questa posizione [0, 3, 5] mi risponderà che si trova in posizione o indice 2.
    
    // questa variabile è quella che darà il risultato finale.
    /* 
    PSEUDOCODICE: leggere ogni elemento dell'array cominciando dall'indice indicato in fromIndex
        Se l'elemento dove si trova è uguale all'elemento cercato
            scrive nella variabile risultato il numero dell'indice di questo elemento
            fine della ricerca
            restituisce la variabile risultato
        Se l'elemento dove si trova non è uguale all'elemento cercato
            passa al seguente elemento dell'array
        Se arrivato all'ultimo elemento dell'array nessun elemento è uguale all'elemento richiesto
            Scrive nella variabile risultato -1
            restituisce la avriabile risultato
    */