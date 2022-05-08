function indexOf(string, searchValue, fromIndex = 0) {
    let res = -1
    let j = 0

    for (let i = fromIndex; (i < string.length && res === -1); i++) {
        // var char = string[i]

        if (string[i] === searchValue[j]) {
            j++

            if (j === searchValue.length) {
                res = i - j + 1
            }
        } else {
                j = 0
            }
        }

    return res
}


/*
El método indexOf()devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde fromIndex; o -1 si no se encuentra dicho valor.

Passo 3 Parámetros
Catena: string
searchValue:
Una cadena que representa el valor de búsqueda.
fromIndex:
La localización dentro de la cadena llamada desde la que empezará la búsqueda. Puede ser un entero entre 0 y la longitud de la cadena. El valor predeterminado es 0.

Passo 4 Valore di ritorno
Ritorna la prima posizione dove incontra un searchValue, o -1 se non lo trova.
una stringa vuota da risultati strani

passo 5 Descrizione in termini umani
La funzione entra in una catena, 
cerca l'elemento richiesto (numero, lettera o parola) 
e ne restituisce la posizione, l'indice. 
Se non trova l'elemento richiesto restituisce un -1.

passo 6 Descrizione in pseudocodice
    Parte la funzione.
    Legge la presenza di una catena, un searchElement  e un fromIndex
    Legge la presenza di due variabili: res = -1 e j = 0
    Va avanti

    Inizia la ricerca 
    Se l'indice dove si trova adesso (0) è minore della lunghezza della catena e let res è -1 
    Va avanti
    Se lo string[i] (0=prima posizione della catena) non è uguale al searchElement[j] (0=prima posizione dell'elemento cercato)
    else j=0
    Torna al pricipio e ripete l'operazione aumentando di un indice string e così sempre fino a che ...

    Se lo string[i] è uguale al searchElement[j] continua e aumennta di un valore il searchValue[j]
    Continua e
    Se j adesso non è uguale alla lunghezza di searchValue torna all'inizio del for e 
    Ripete tutto il percorso fino a che
    Se j (l'indice dell'elemento cercato) è uguale alla lunghezza dell'elemento cercato 
    Passa a res che sarà uguale all'indice dello string - l'indice dell'elemento cercato + 1.
    Lo scrive su res
    Torna all'inizio del for
    Adesso si i < string.length, ma res non è più === a -1
    Interrompe la ricerca
    Salta ogni altro passo e
    Return res




*/