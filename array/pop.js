function pop(array) {
    let lastElement = array[array.length - 1]
    if (array.length > 0) {
        array.length = array.length - 1
    }
    return lastElement
}
/*
El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
Valor devuelto
El elemento que ha sido eliminado del array; undefined si el array está vacío.
Descripción
El método pop elimina el último elemento de un array y devuelve su valor al método que lo llamó.

Passo 3: Parametri
Il primo paramentro sarà un array dal cuale vogliamo eliminare un elemento.
Poi un'altro array dove vogliamo che restituisca l'elemento eliminato.

Passo 4: Il valore che resituirà sarà una variabile array con l'elemento finale tolto al primo array.
Il valore length del primo array sarà quindi ridimensionato e più corto visto la mancanza dell'ultimo elemento.

Passo 5: Cosa deve fare la funzione in linguaggio umano e dopo in pseudocodice.
Linguaggio umano.
La funzione pop deve leggere quanti elementi ha una funzione, togliere l'ultimo elemento e restituirlo in una variabile array.
Pseudocodice.
    accedere all'ultimo elemento dell'array e conservarlo nella variabile risultato
            se la lunghezza dell'array è superiore a 0 accorciare di 1 elemento la lunghezza, (invece, se l'array è 0 lasciarlo così)(questo è sottinteso)
                restituire la variabile risultato che conterrà dentro l'elemento tolto all'array

Passo 6: Convertire lo pseudocodice in codice.
    let lastElement = array[array.length - 1] 
Questo serve a dire che il contenuto della variabile è uguale all'ultimo elemento dell'array.
    if (array.length > 0) {
        array.length = array.length - 1
Questo spiega che si applica la cosa di togliere un elemento all'array solo se il contenuto è superiore a 0.
Infatti altrimenti andrebbe fuori rango con un numero -1 e sarebbe un errore.
    return lastElement
Per dirgli che una volta trovato l'ultimo elemento e messo nella variabile, che lo restituisca come risultato    

*/