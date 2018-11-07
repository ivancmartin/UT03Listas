# UT03Listas
UT03 Práctica Listas y Listas Ordenadas

#version 0.0.1
documento lista.html preparado aunque sujeto a cambios
documento lista.js - funciones:
    - addElem: función principal.
    - create: crea el array con un tamaño fijo.
    - size: devuelve tamaño de nuestro array según se va llenando.
    - capacity: muestra la capacidad total del array.
    - isFull: devuelve si esta lleno o no el array.
    - isEmpty: devuelve si esta vacío o no el array.
    - add: añade un elemento al array.
    - toString: devuelve una cadena con los valores del array separados con "-".
    - testList: funciones de testeo (aún por implementar)

    los archivos y documentos no mencionados aparecen vacíos o muy incompletos en esta versión.

#version 0.0.2
modificaciones sobre el documento lista.js - funciones:
    - funciones añadidas:
        + get: devuelve el elemento encontrado en el indice selecionado dentro del array.
        + indexOf: devuelve la primera coincidencia del elemento buscado; si no lo encuentra devuelve -1.
        + lastIndexOf: devuelve la ultima coincidencia del elemento buscado; si no lo encuentra devuelve -1.
        + firstElement: devuelve el 1º elemento de un array.
        + lastElement: devuelve el último elemento de un array.
        + addAt: Incompleta.
    - funciones de testeo añadidas.

    los archivos y documentos no mencionados aparecen vacíos o muy incompletos en esta versión.

#version 0.0.3
modificaciones sobre el documento lista.js - funciones:
    - Modificación del orden de las funciones dentro del archivo.
    - funciones añadidas:
        + addAt: añade un elemento en la posición indicada si es posible. Completa.
        + clear: vacia la lista.
        + set: sustituye el valor de un indice por otro indicado.
        + remove: elimina el valor del indice seleccionado.
    - funciones modificadas: 
        + capacty.

    los archivos y documentos no mencionados aparecen vacíos o muy incompletos en esta versión.

#version 0.0.4
modificaciones sobre el documento lista.js - funciones:
    - corrección del metodo addAt.
    - corrección del metodo remove.
    - funciones añadidas:
        + removeElement: borra un elemento concreto del array.
        + rmvElem: función principal.
    - funciones de testeo modificadas.
modificaciones sobre el documento lista.html:
    - correciones de funcionalidad de los botones.
    - instrucciones de uso añadidas.

    los archivos y documentos no mencionados aparecen vacíos o muy incompletos en esta versión.

#version 0.0.5
modificaciones sobre los documentos listasOrdenadas.html
    - funciones principales añadidas para su funcionamiento
modificaciones sobre los documentos listasOrdenadas.js
    - funciones añadidas:
        + addElem: función principal.
        + create: crea el array con un tamaño fijo.
        + size: devuelve tamaño de nuestro array según se va llenando.
        + capacity: muestra la capacidad total del array.
        + isFull: devuelve si esta lleno o no el array.
        + isEmpty: devuelve si esta vacío o no el array.
        + add: añade un elemento al array.
        + toString: devuelve una cadena con los valores del array separados con "-".
        + testList: funciones de testeo (aún por implementar).
        + get: devuelve el elemento encontrado en el indice selecionado dentro del array.
        + indexOf: devuelve la primera coincidencia del elemento buscado; si no lo encuentra devuelve -1.
        + firstElement: devuelve el 1º elemento de un array.
        + lastElement: devuelve el último elemento de un array.
        + removeElement: borra un elemento concreto del array.
        + rmvElem: función principal.
    - aun en mal funcionamiento.

#version 0.1.0
modificaciones sobre los documentos listasOrdenadas.js y listas.js
    - comprobación del estado de las funciones del documento listasOrdenadas.js.
    - corrección de la función toString(ambos): indica si la lista está vacía.
    - corrección de la funcion add (listasOrdenadas.js): obtienen el indice con el valor más alto que elemento dado y lo introduce en esa posición moviendo el resto.
    - corrección de las funciones de testeo de ambos documentos: las funciones son más especificas para cada documento.