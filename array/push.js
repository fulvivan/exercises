function push(array, ...elements) {
    for (var i = 0; i < elements.length; i++) {
        array[array.length] = elements[i]
    }

    return array.length
}

/*
Concepto clave que aprender en este ejercicio:
Parámetros Rest (Mirar el artículo de MDN)

Descripción de MDN del método push:
El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
Valor devuelto: Number. La nueva propiedad length del objeto sobre el cual se efectuó la llamada.

Paso 3: Parámetros.
El primer parámetro será el array al que queremos añadirle más elementos al final.
Esta función permitirá que incluyas tantos elementos como tú quieras añadir al array. Puedes dar sólo un elemento para añadir o puedes darle a la función 30 elementos que quieres añadir al final del array, o 200 elementos.
Cuando el número de parámetros es variable se usa el "parámetro rest" (...). Cuando se usa este parámetro, lo que hace JavaScript es coger todos los elementos que haya en su lugar y "empaquetarlos" en un array.
Es decir, en este caso, por ejemplo:
push([2, 4, 3, 0], 7, 10, 2, 4, 4)
[2, 4, 3, 0] es el array, y 7, 10, 2, 4, 4 es lo que en nuestra función hemos escrito como ...elements, que es lo que se conoce como un parámetro rest.
Javascript coge esos 5 números y los empaqueta en un array. Es decir que al entrar en la función es como si hubiera esto
push([2, 4, 3, 0], [7, 10, 2, 4, 4])
Si en el lugar del parámetro ...elements en vez de 5 elementos hubiera 20, javascript haría lo mismo, empaquetar los 20 elementos en un solo array. De esta manera, sea cual sea el número de elementos que queramos añadir al array inicial, siempre podremos acceder dentro de la función a este "array ...elements" que ha creado javascript y podremos recorrer este array de principio a fin (sea cual sea su longitud en cada caso) y podremos ir mandando uno por uno cada elemento de este array al final del primer array.

Paso 4: Valor devuelto.
El valor que tiene que devolver la función es la nueva longitud del array después de haberle añadido los elementos que se hayan incluido entre los paréntesis después del primer array.
Por eso, he puesto al final directamente return array.length. Eso devolverá la longitud del array al final, después de haber hecho todo el trabajo de la función de añadirle los elementos.
En este caso no parece necesario definir una variable result en la que se guarde el resultado que devuelves. Puedes simplemente acceder directamente al array.length al final y ya está.

Paso 5: Escribir lo que debe hacer el cuerpo de la función paso a paso, primero en tus palabras, y después en pseudocódigo.

En lenguaje humano:
Debe leer el array elements y mandar cada elemento de ese array al final del primer array. Como no se puede usar el método push de javascript, hay que hacerlo de otra manera. Al usar el método push para añadir un elemento a un array lo que hace javascript es crear un índice nuevo en el array y guardar dentro el valor del elemento que quieres mandar. Por ejemplo, si tengo el array [2, 4, 5] y uso el push de javascript para añadirle el número 7 al final, lo que hace javascript es coger el array y crear primero un índice nuevo, es decir, es como crear una posición nueva, como una habitación nueva en una casa, en este caso el índice 3, porque ese array ya tiene un índice 0, un índice 1 y un índice 2. Y ahora dentro de ese nuevo índice 3 guarda como valor el número 7 que tú querías añadir. Eso es lo que tenemos que hacer nosotros manualmente.

En pseudocódigo:
    leer cada elemento del array elements
        crear un índice nuevo en el array inicial y asignarle dentro el valor del elemento en el que está ahora parado dentro del array elements 

Paso 6: Convertir el pseudocódigo en código:
-Para recorrer el array elements se usa un for loop
for (var i = 0; i < elements.length; i++)
-Para crear un índice nuevo en un array se coge el array y se le pone entre corchetes (parentesi quadre) el número del índice que quieres crear. Es la misma sintaxis que se usa para acceder a un índice que ya existe en el array. En el ejemplo [2, 4, 5] si ponemos [2, 4, 5][1] accedemos al valor que haya en el índice 1, en este caso el número 4. Si escribimos esto [2, 4, 5][3] lo que hacemos es crearle un índice 3 a ese array, y ese índice estará de momento vacío. 
Pero en nuestra función no hay un número fijo de índices porque el número de elementos que hay que añadir es variable, unas veces serán 5, otras veces 1, otras veces pueden ser 100 ó 200. Además la longitud del primer array también es variable, cada vez puede ser distinta, así que el número del último índice del array inicial podrá ser en cada caso diferente. Por eso, hay que buscar una forma de que los índices se vayan creando de forma dinámica, tomando siempre como referencia el último índice del array inicial, sea cual sea su número.
Por eso, se usa lo siguiente:
array[array.length]
Esto coge el array y le crea un nuevo índice que es el número que hay en la propiedad length de ese array. Como los índices empiezan por 0, el último índice del array es array.length - 1. Así que si quieres crear un índice nuevo en el array puedes usar el número del array.length.
En el ejemplo anterior, push([2, 4, 3, 0], 7, 10, 2, 4, 4), lo que haría array[array.length] sería lo siguiente:
En la primera repetición del loop cogería el array [2, 4, 3, 0] y le crearía un índice nuevo. El número de ese índice sería el número del array.length. El último índice de este array ahora mismo es el número 3. El array.length ahora mismo es 4. Así que la máquina lo leerá como si estuviera escrito [2, 4, 3, 0][4]. Es decir, creará un índice nuevo, que de momento está vacío.
Ahora habría que asignar dentro el valor del elemento donde está ahora la máquina dentro del array elements, es decir, el primer elemento de ese array.
Eso se hace mediante usar el símbolo (=) y después elements[i]
Se usa la i porque esa i será dinámica, será un número más en cada repetición (i++), de manera que en cada repetición del loop accederá al elemento siguiente dentro del array elements.
En el ejemplo anterior, el array elements era [7, 10, 2, 4, 4]. Elements[i] en la primera iteración del loop será elements[0], es decir, el número 7. En la segunda será elements[1], es decir el número 10, y así sucesivamente.
array[array.length] = elements[i] en las dos primeras iteraciones del for loop sería así:
Primera iteración del loop:
[2, 4, 3, 0][4] = [7, 10, 2, 4, 4][0]
Crea un índice 4 en array y le asigna dentro el valor del índice 0 de elements, es decir el número 7. Array ahora es [2, 4, 3, 0, 7]
Segunda iteración del loop:
Ahora array[array.length] = elements[i] significa lo siguiente:
[2, 4, 3, 0, 7][5] = [7, 10, 2, 4, 4][1]
Crea un índice 5 (el array.length es 5 después de haberle añadido el número 7 en la primera iteración) y le asigna el valor del índice i de elements, que ahora ya no es 0 sino 1, por el i++. Elements[1] es el número 10, así que ese es el valor que se asigna al nuevo índice creado en array, array[5] = elements[1] 
De esta manera cada nuevo índice creado en array será uno más que el último que ahora existe, y se le irá asignando a cada uno de esos nuevos índices el valor del elements[i] en el que esté el for loop en ese momento.
*/