function concat(array, ...arguments) {
    let arrayMerged = [array, ...arguments];
    
    for (let i = 0; i < array.length; i++) {

        array[array.length] = array[i]
    }
    for (let f = 0; f < array.length; f++) {

        array[array.length] = arguments[i]
    }
        
    return arrayMerged
}


// El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
// Prende il valore di un array, lo somma al valore di un'altro array e crea un nuovo array dalla somma dei due.
