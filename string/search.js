function search(string, regEx) {
    var search = string.match(regEx)
    var res = -1
    var j = 0

    for (var i = 0; i < string.length; i++) {
        var character = string[i]

        if (character === search[j]) {
            j++

            if (j === search.length) {
                res = i - j + 1

            } else {  
                j = 0
            }
        }
    } 
    
    return res
}




// El método search() ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama.
// Sintaxis:
// str.search(expresionregular)
// regexp:
// Un objeto expresión regular. Si se pasa un objeto obj que no sea una expresión regular, se convierte implícitamente en una expresión regular usando new RegExp(obj).
// Valor devuelto: El índice de la primera coincidencia entre la expresión regular y la cadena de texto proporcionada, si no se encuentra devuelve -1.


/* Per il significato di ogni segno vedere in MDN articolo : Character classes - Groups and ranges - Quantifiers - Regular expressions*/

/*
El método  search() ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama.

3: parametri
regexp
Un objeto expresión regular . 
Si se pasa un objeto obj que no sea una expresión regular, se convierte implicitamente en una expresión regualar usando new RegExp(obj).

4: Valor devuelto
El índice de la primera coincidencia entre la expresión regular y la cadena de texto proporcionada, si no se encuentra devuelve -1 .

Descrizione
Cuando se desee saber en qué casos un patrón se encuentra en una cadena de texto utiliza  search()
*/