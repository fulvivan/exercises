function concat(string, ...arg) {
    let res = ''

    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
        
    }

    return res
}
/*
El método concat() combina dos o más cadenas de texto y devuelve una cadena de texto nueva.

La arguments.length proprietà contiene il numero di argomenti passati alla funzione.

La proprietà arguments.length fornisce il numero di argomenti effettivamente passati a una funzione. Questo può essere più o meno del conteggio del parametro definito (vedi Function.length).

Passo 3: Parametros: str  ...arg
Cadenas que se concatenarán con str.

Passo 4: Valor devuelto
Una nueva cadena que contiene el texto combinado de las cadenas proporcionadas.

Passo 5: in umano
La funzione legge tutta la lunghezza degli argomenti che vogliamo concatenare e li somma finchè la variavile res non avrà la stessa lunghezza della linghezza degli argomenti.

Passo 6: in pseudocodice
La variabile risultato sarà uno string.
    Se l'indice della variabile è meno della lunghezza degli argomenti 
    Va avanti
    res è più o uguale a argoments[i]? No
    Torna indietro
    Aggiunge una posizione all'indice o argomento.
        Controlla di nuovo, 
    L'indice della variabile è ancora meno della lunghezza degli argomenti? Si
    Avanti
    res ora è più o uguale a argoments[i]? No
    Torna indietro
    Aggiunge una posizione all'indice o argomento.
        Controlla di nuovo, 
Quando l'indice non sarà più meno della lunghezza dell'argomento.
Restituisce il res completo di tutti gli argomenti.
*/
