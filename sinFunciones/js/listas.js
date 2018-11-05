"use strict";

//máximo de lementos de un array
var MAX_ELEMENT_LIST = 5;

// array 
var elemntList = create(); 

// crea un array con un valor máximo
function create(){
    var list = [];
    for (var i=0; i<MAX_ELEMENT_LIST; i++){
        list[i] = Number.NaN;
    }
    return list;
}

//Comprobar si el array está vacío: devuelve false si NO lo está; true si lo está.
function isEmpty(list){
    return ( isNaN(list[0]) ? true : false );
}

//Comprobar si el array está lleno: devuelve false si NO lo está; true si lo está.
function isFull(list){
    return ( size(list) > MAX_ELEMENT_LIST-1 ? true : false );
}

//Devuelve el tamaño de un array
function size(list){
    var length = 0;
    //mientras length sea menor que el máximo de elemento y el elemento sea un número entero
    while(length<MAX_ELEMENT_LIST && !isNaN(list[length]) ){
        length++;
    }
    return length;
}

//añade a la lista un elemento de tipo Number y devuelve el tamaño actual del array
function add(list,elem){
    
    var tam = size(list);
    elem = parseInt(elem);
    
    //si el elemento NO es un número
    if(isNaN(elem)){
        throw "Eso no es un número sesñ@r";
    }
    
    //si la lista está llena
    if(!isFull(list)){
        list[tam] = elem;
    }else{
        throw "esto está lleno!";
    }

    return size(list);
}

//Incompleto: añade a la lista un elemento de tipo Number y devuelve el tamaño actual del array
function addAt(list,elem,index){
    //recogemos el tamaño actual del array
    var tam = size(list);
    
    //pasamos a entero
    elem = parseInt(elem);

    console.log("index " + index);
    //si el elemento NO es un número
    if(isNaN(elem)){
        throw "Eso no es un número sesñ@r";
    }

    //control sobre el indice: si esta fuera de rango o no es un numero  
    if(isNaN(index) || (index < 0 || index > capacity(list))){
        throw "Me parece que eso no es un indice válido (max " + tam + " )...";
    }

    //si la lista NO está llena
    if(!isFull(list)){
        //si está vacía se añade al principio
        if(isEmpty(list)){
            list[0] = elem;
        }else if(isNaN(list[index-1])){
            //si el indice anterior está vacío, se añade en la última posición
            list[size(list)] = elem;
        }else if(!isNaN(list[index])){
            //si el elemento es un numero y hay espacio para introducirlo
            //guardamos el valor a sustituir
            var aux = list[index];
            //sustituimos el indice con el nuevo valor
            list[index] = elem;
            //desde el siguiente indice al ya sustituido, movemos los elementos
            for (var i = (index+1); i < capacity(list); i++) {
                var next = list[i];
                list[i] = aux;
                aux = next;
            }     
        }
    }else{
        throw "esto está lleno!";
    }
    return size(list);
}

// devuelve el elemento encontrado en el indice selecionado dentro del array
function get(list,index){
    var range = size(list);
    if(index > range || index < 0){    
        throw "El indice es incorrecto: debe estar entre el 0 y " + range;
    }
    if( isNaN(list[index]) ){
        throw "El el indice está vacío";    
    }
    return list[index];
}

//devuelve una cadena con la lista en texto formateado
function toString(list){
    var string = "";
    if (!isEmpty(list)) {
        for (var i = 0; i < size(list)-1; i++) {
            string = string + list[i] + " - ";
        }
        string = string + list[i];    
    }
    return string;
}

//devuelve la primera coincidencia del elemento buscado; si no lo encuentra devuelve -1
function indexOf(list,elem){
    elem = parseInt(elem);
    var length = size(list)
    var found = -1;
    var i = 0;

    if(!isNaN(elem)){
        if(!isEmpty(list)){
            while( i < length && found === -1  ){
                if(list[i] === elem){
                    found = i;
                }
                i++;
            }
        }       
    }else{
        throw "El elemento ha buscar no es un numero entero";
    }
    return found;
}

//devuelve la ultima coincidencia del elemento buscado; si no lo encuentra devuelve -1
function lastIndexOf(list,elem){
    elem = parseInt(elem);
    var found = -1;
    var i = size(list);
    if(!isNaN(elem)){
        if(!isEmpty(list)){
            while( i >= 0 && found === -1  ){
                if(list[i] === elem){
                    found = i;
                }
                i--;
            }
        }       
    }else{
        throw "El elemento ha buscar no es un numero entero";
    }
    return found;
}

//total de elementos que se pueden introducir en el array
function capacity(list){
    return MAX_ELEMENT_LIST;
}

//vacia una lista de elementos: pasa los valores a NaN
function clear(list){
    var length = size(list);
    for (var i = 0; i < length; i++) {
        list[i] = Number.NaN;
    }
}

//devuelve el 1º elemento de un array
function firstElement(list){
    var last;
    if(!isEmpty(list)){
        last = list[0];
    }else{
        throw "La lista está vacía";
    }
    return last;
}

//devuelve el último elemento de un array
function lastElement(list){
    var last;
    if(!isEmpty(list)){
        last = list[size(list) - 1];
    }else{
        throw "La lista está vacía";
    }
    return last;
}

//elimina el indice del array
function remove(list,index){
    
    if(isEmpty(list)){    
        throw "La lista está vacía";
    }

    var range = capacity(list);
    if(index > range || index < 0){    
        throw "El indice es incorrecto: debe estar entre el 0 y" + range;
    }

    console.log("indice" + index);
    list[index] = Number.NaN;
    console.log("el siguiente " + !isNaN(list[index + 1]));
    
    if(!isNaN(list[index + 1])){

        for (var i = index; i < size(list); i++) {
            list[index] = list[i + 1]; 
        }
    }

}

//sustituye el valor del indice
function set(list,elem,index){
    var replace;
    if(isEmpty(list)){
        throw "la lista esta vacía";
    }

    if(index < 0 || index > size(list)){
        throw "Indice selecionado incorrecto";
    }

    if(!isNaN(list[index])){
        replace = list[index];
        list[index] = elem;
    }else{
        throw "El indice está vacío";
    }
    return replace;
}

// función principal: añadir un elemento
function addElem(elem,index){
    index = parseInt(index);
    var error = document.getElementById("error");
    var info = document.getElementById("info");
    error.innerHTML = ("");
    try {
        // si se introduce un index de tipo Number
        if(isNaN(index)){
            add(elemntList,elem);    
        }else{
            addAt(elemntList,elem,index);
        }
    } catch (exception) {
        error.innerHTML = exception;
    }
    info.innerHTML = toString(elemntList); 
    testList();
}

//funciones de testeo
function testList(){
    console.log("Lista de elementos: " + elemntList);
    console.log("size() - Tamaño actual del array:" + size(elemntList));
    console.log("capacity() -Total de elementos a introducir:" + capacity(elemntList));
    
    try {
        console.log("get() - El indice 1 del array es: " + get(elemntList,1));   
    } catch (error) {
        console.log(error);
    }

    try {
        console.log("set() - Cambia el valor del indice 0 a 8. El valor sustituido ha sido" + set(elemntList,8,3));    
    } catch (error) {
        console.log(error);
    }

    console.log("indexOf() - ¿Existe el num 3 en el array? " + indexOf(elemntList,3));
    console.log("lastIndexOf() - ¿Existe el num 3 en el array? " + lastIndexOf(elemntList,3));
    console.log("lastElement() - Elemento en la ultima posición del array es: " + lastElement(elemntList));

}


