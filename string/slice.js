function slice(string, beginIndex, endIndex = string.length ) {
    let res = ''
    var start = beginIndex < 0 ? string.length + beginIndex
        : beginIndex ? beginIndex
        : res = string
    var finish = endIndex < 0 ? string.length + endIndex : endIndex

    for (s = start; s < finish; s++) {
    res = res + string[s]
}
    
    return res
}

// function slice(string, init, end) {
//     var res = init ? '' : string
//     var start = init < 0 ? string.length + init : init
//     var finish = end ? (end < 0 ? string.length + end : end) : string.length

//     for (var i = start; i < finish; i++){
//         var char = string[i]

//         res += char
//     }
    
//     return res
// }

// El método slice() extrae una sección de una cadena y devuelve una cadena nueva.
// Sintaxis: cadena.slice(inicioTrozo[, finTrozo])
// inicioTrozo: El índice basado en cero en el cual empieza la extracción.  Si es negativo, se trata como longCadena + inicioTrozo donde longCadena es la longitud de la cadena (por ejemplo, si inicioTrozo es -3 se trata como longCadena - 3)
// finTrozo: Opcional. El índice basado en cero en el que termina la extracción. Si se omite, slice extrae hasta el final de la cadena.  Si es negativo, se trata como longCadena + finTrozo donde longCadena es la longitud de la cadena (por ejemplo, si finTrozo es -3 se trata como longCadena - 3)


/*
El método slice() extrae una sección de una cadena y devuelve una cadena nueva.

3: Parametri: (beginIndex, endIndex)
-beginIndex
L'indice in base zero da cui iniziare l'estrazione.

Se beginIndex è negativo, slice()inizia l'estrazione da str.length + beginIndex. (ad es. "test".slice(-2)ritorni "st")

Se beginIndex viene omesso, non definito o non può essere convertito in un numero (usando Number(beginIndex)), slice()inizia l'estrazione dall'inizio della stringa. (ad es. "test".slice()ritorni "test")

Se beginIndex è maggiore o uguale a str.length, viene restituita una stringa vuota. (ad es. "test".slice(4)ritorni "")

-endIndex Opzionale
L'indice in base zero prima del quale terminare l'estrazione. Il carattere in questo indice non verrà incluso.

Se endIndex viene omesso, non definito o non può essere convertito in un numero (usando Number(endIndex)) viene slice()estratto alla fine della stringa. (ad es. "test".slice(2)ritorni "st")

Se endIndex è maggiore di str.length, slice()estrae anche fino alla fine della stringa. (ad es. "test".slice(2, 10)ritorni "st")

Se endIndex è negativo, slice()viene trattato come str.length + endIndex. (Ad esempio, se endIndex è -2, viene trattato come str.length - 2 e "test".slice(1, -2)restituisce "e") .

Se endIndex rappresenta una posizione precedente a quella rappresentata da startIndex, slice()restituisce "". (Es "test".slice(2, -10), "test".slice(-1, -2)o "test".slice(3, 2)).

4: Valore di ritorno
Una nuova stringa contenente la sezione estratta della stringa.

5: Spiegazione funzione
La funzione inizia la ricerca dall'indice dato dal parametro beginIndex.
Quindi copierà in un'altra stringa il pezzo di catena che si trova tra l'indice di beginIndex e la fine dello string, o fino a endIndex.
Se...
Se...
Se...
Ritorna come risultato res la stringa

6: Pseudocodice
La variabile ris sarà uno string.
Se il beginIndex è maggiore di s=0 la funzione esegue il for loop.
Aggiunge un punto alla variabile s e così via fino ad arrivare all'indice beginIndex.
Ogni volta cambia res con quello che ha nel momento più il nuovo che ha trovato.
Alla fine restituisce res completo

*/