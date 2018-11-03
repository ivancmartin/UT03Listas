"use strict";

//máximo de lementos de un array
var MAX_ELEMENT_LIST = 5;

// array 
var elemntList = create(); 

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
    testList();
    info.innerHTML = toString(elemntList); 
}

// crea un array con un valor máximo
function create(){
    var list = [];
    for (var i=0; i<MAX_ELEMENT_LIST; i++){
        list[i] = Number.NaN;
    }
    return list;
}

//Devuelve el tamaño de  un array
function size(list){
    var length = 0;
    //mientras length sea menor que el máximo de elemento y el elemento sea un número entero
    while(length<MAX_ELEMENT_LIST && !isNaN(list[length]) ){
        length++;
    }
    return length;
}

//total de elementos que se pueden introducir en el array
function capacity(list){
    var length = 0;
    while(length<MAX_ELEMENT_LIST && (list[length] != undefined) ){
        length++;
    }
    return length;
}

//Comprobar si el array está lleno: devuelve false si NO lo está; true si lo está.
function isFull(list){
    return ( size(list) > MAX_ELEMENT_LIST-1 ? true : false );
}

//Comprobar si el array está vacío: devuelve false si NO lo está; true si lo está.
function isEmpty(list){
    return ( isNaN(list[0]) ? true : false );
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


//funciones de testeo
function testList(){
    console.log("Lista de elementos: " + elemntList);
    console.log("Tamaño actual del array:" + size(elemntList));
    console.log("Total de elementos a introducir:" + capacity(elemntList));
}


