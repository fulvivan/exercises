function countNumbers(array) {

    let res = []
    let positive = 0
    let negative = 0
    // let num = array.legth > 0 && 

    for (let f = 0; f < array.length; f++) {
    array[f] > 0 ? positive += array[f] : negative += array[f]
    // if (array[f] > 0) {
    //     positive += array[f];
    // } else {
    //     negative += array[f]; 
    // } 
    
    
}
    res = [positive, negative, positive + negative]
    
    return res 
}

// La función debe devolver un array con 3 posiciones.

// La primera posición debe ser la suma de los números positivos

// La segunda posición debe ser la suma de los números negativos

// La tercera posición debe ser el resultado de positivos - negativos