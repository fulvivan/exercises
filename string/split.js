// function split(str, separator = '') {
    
//     let res = []
//         // (str.substring(str, separator))
    
//     for (let i = 0; i < str.length; i++) {
        
//         if (separator !== str[i]) {
//             res += str[i]
//         }
//         else if (separator === str[i]) {
//             res += g[i]
//         }
//         res = 'f'+ 'g'
//     }
//     return res
// }

function split(string, separator) {
    var parts = []

    if (separator === '') {
        for (var i = 0; i < string.length; i++) {
            var character = string[i]

            parts[i] = character
        }
    } else if (typeof separator !== 'string') {
        parts = [string]
    }
    
    else {
        var part = ''
        var j = 0

        for (var i = 0; i < string.length; i++) {
            var character = string[i]

            if (character === separator[j]) {
                j++
                if (j === separator.length) {
                    parts[parts.length] = part
    
                    part = ''

                    j = 0
                }
            } else {
                part += character 
            }
        }

        parts[parts.length] = part
    }

    return parts
}

/*
Il metodo split() divide uno String in un elenco ordinato di sottostringhe, inserisce queste sottostringhe in un array e restituisce l'array. La divisione avviene ricercando uno schema; dove il modello viene fornito come primo parametro nella chiamata del metodo.

Sintassi:
split()
split(separator)
split(separator, limit)

3 Parametri:
- separator Opzionale
Il modello che descrive dove dovrebbe verificarsi ogni divisione. L'  separator può essere una stringa semplice o può essere un espressione regolare .

Il caso più semplice è quando  separator è solo un singolo carattere; questo è usato per dividere una stringa delimitata. Ad esempio, una stringa contenente valori separati da tabulazione (TSV) potrebbe essere analizzata passando un carattere di tabulazione come separatore, in questo modo: myString.split("\t").

Se separator contiene più caratteri, è necessario trovare l'intera sequenza di caratteri per dividere.

Se separator viene omesso o non si verifica in str, l'array restituito contiene un elemento costituito dall'intera stringa.

Se separator appare all'inizio (o alla fine) della stringa, ha ancora l'effetto di dividere. Il risultato è una stringa vuota (cioè di lunghezza zero), che appare nella prima (o nell'ultima) posizione dell'array restituito.

Se separatorè una stringa vuota ( ""), str viene convertita in un array di ciascuno dei suoi "caratteri" UTF-16.

- limit Opzionale
Un numero intero non negativo che specifica un limite al numero di sottostringhe da includere nell'array. Se fornito, divide la stringa a ogni occorrenza dell'oggetto specificato separator, ma si interrompe quando le limit voci sono state inserite nell'array. Il testo rimanente non è affatto incluso nell'array.

L'array può contenere meno voci rispetto a limit quando viene raggiunta la fine della stringa prima che venga raggiunto il limite.
Se limitè 0, viene restituito [].

4 Valore di ritorno:
Una Array di stringhe, divisa in ogni punto in cui si separator verifica nella stringa data.

5 Cosa deve fare la funzione:
La funzione entra nello string e copia in un array ogni ogni carattere dello string che non è uguale al carattere separator.
Quando arriva al carattere string uguale a separator chiude questo array e ne apre un'altro con il carattere seguente quello uguale a separator e continua come sopra fino alla fine della stringa.
A questo punto restituisce un array che è la somma di tutti gli array creati
*/