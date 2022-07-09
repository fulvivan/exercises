function repeat(string, count) {
    var res = ''

    count = Math.floor(count)

    while (count > 0 && count !== Infinity) {
        res += string

        count--
    }

    res = count === 0 ? res : 'rangeError'

    return res
}

// El método repeat() construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados. Si el parámetro count es un número decimal lo convertirá al integer justamente inferior.

/*El método repeat() construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados.

Math.floor():
Devuelve el máximo entero menor o igual a un número.
Sintaxis:
Math.floor(x) - Parámetros x Es número.
Descripción:
Como floor es un método estático de Math, siempre debe usarse como Math.floor(), en lugar de usarlo como un método de un objeto Math creado.

Conditional (ternary) operator:
(Operatore condizionale (ternario)):
L' operatore condizionale (ternario) è l'unico operatore JavaScript che accetta tre operandi: una condizione seguita da un punto interrogativo ( ?), quindi un'espressione da eseguire se la condizione è veritiera seguita da due punti ( :) e infine l'espressione da eseguire se la condizione è falsa . Questo operatore viene spesso utilizzato come scorciatoia per l' if istruzione.

Passo 3: Parámetros
count
Un entero entre 0 y +Infinity, indicando el número de veces a repetir la cadena en la nueva cadenada creada que será devuelta.

Passo 4: Valor devuelto
Un nuevo string que contiene el número especificado de copias del string original.

Excepciones
RangeError: El número de repeticiones no debe ser negativo.
RangeError: El número de repeticiones debe ser menor que infinito y no desbordar el tamaño máximo para un string.

Passo 5: in umano
La funzione legge lo string. 
Poi legge il count, quante v

Passo 6: in pseudocodice
*/