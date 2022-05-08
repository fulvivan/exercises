function charAt(string, index = 0) {
    
    // let char = string[index]

    // if (index > string.length -1 || index <0 ) {
    //     char = ''
    // }

    // let char
    // if (index > string.length -1 || index <0 ) {
    //     char = ''
    // } else {
    //     char = string[index]
    // }

    let char = ''
    if (index >= 0 && index <= string.length -1) {
        char = string[index]
    }

    return char
}



/*
El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
Parámetros
indice
Un entero entre 0 y 1 menos que la longitud de la cadena. Si no se proporciona ningún indice charAt() utilizará 0.

passo 3. Parametri
indice. Sarà un numero intero che dovrà essere almeno 0 o 1 più basso della lunghezza della catena. In caso contrario la risposta sarà una catena o uno spazio vuoto.

passo 4. Il valore che restituisce sarà il carattere che corrisponde all'indice chiesto, dentro uno string.

passo 5. Comportamento in umano e poi in pseudocodice.
Umano:
Il metodo cercherà l'indice che gli abbiamo chiesto dentro una catena, frase. 
Trovato l'indice ne copierà il carattere e lo incollerà in un nuovo string.
Dopo darà lo string nuovo.
Se l'indice richiesto è più piccolo o più grande dello string restituirà una catena vuota ''
Pseudocodice:
    Mettersi in posizione indice richiesta.
    Copiare il carattere.
    Incollare il carattere nel nuovo string.
    Se l'indice è maggiore o minore della lunghezza dello string
        restituisco nel nuovo string una catena vuota
    In caso di indice vuoto, come predefinito, darà 0.
    Restituire il nuovo string
OPPURE
    La variabile sarà impostata come predefinita su '', cioè la catena vuota che restituirà la variante nel caso l'indice sia più alto o più basso della lunghezza dello string.
        Se l'indice è maggiore o uguale a 0 e è minore della lunghezza -1, 
        allora restituirà la variabile con il carattere che corrisponde all'indice.
*/