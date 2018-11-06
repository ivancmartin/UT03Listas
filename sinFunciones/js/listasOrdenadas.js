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
    
    elem = parseInt(elem);
    
    //si el elemento NO es un número
    if(isNaN(elem)){
        throw "Eso no es un número";
    }
    
    //si la lista NO está llena
    if(!isFull(list)){
        //si está vacía se añade al principio
        if(isEmpty(list)){
            list[0] = elem;
        }else if( list[size(list)] > elem ){
            list[list[size(list)] + 1] = elem;
        }else{
            console.log("el fallo");
        }
    }else{
        //si la lista está llena
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

//elimina el indice del array y devuelve el valor borrado
function remove(list,index){
    
    if(isEmpty(list)){    
        throw "La lista está vacía";
    }

    var range = size(list)-1;
    //console.log(range);
    if(index > range || index < 0){    
        throw "El indice es incorrecto: debe estar entre el 0 y " + range;
    }

    var deleted = list[index];
    //console.log("indice " + index);
    list[index] = Number.NaN;
    //console.log("el siguiente " + (!isNaN(list[index - 1]) || index == 0));
    
    if(!isNaN(list[index - 1]) || index == 0){
        //sustituimos el indice con el nuevo valor
        list[index] = Number.NaN;
        var aux;
        //desde el siguiente indice al ya sustituido, movemos los elementos
        for(var i = index; i < range ; i++){
            if(isNaN(list[i])){
                //console.log(list[i] + " " + list[i + 1] );
                list[i] = list[i + 1];
                list[i + 1] = Number.NaN;
            }
        }   
    }
    return deleted;
}

//elimina el indice del array
function removeElement(list,elem){
    
    if(isEmpty(list)){    
        throw "La lista está vacía";
    }

    var range = size(list);
    
    //recogemos el indice 
    var index = indexOf(list,elem); 
    
    if(index == -1){
        throw "Valor no encontrado";
    }

    //recogemos el valor que se va a borrar
    var deleted = list[index];

    if(!isNaN(list[index - 1]) || index === 0){
        //sustituimos el indice con el nuevo valor
        list[index] = Number.NaN;
        var aux;
        //desde el siguiente indice al ya sustituido, movemos los elementos
        for(var i = 0; i < range ; i++){
            if(isNaN(list[i])){
                //console.log(list[i] + " " + list[i + 1]);
                list[i] = list[i + 1];
                list[i + 1] = Number.NaN;
            }
        }   
    }

    return deleted;
}

// función principal: añadir un elemento
function addElem(elem,index){
    index = parseInt(index);
    var error = document.getElementById("error");
    var info = document.getElementById("info");
    error.innerHTML = ("");
    try {
        // si se introduce un index de tipo Number
        add(elemntList,elem);
    } catch (exception) {
        error.innerHTML = exception;
    }
    info.innerHTML = toString(elemntList); 
    testList();
}

// función principal: eliminar un elemento
function rmvElem(elem,index){
    index = parseInt(index);
    var error = document.getElementById("error");
    var info = document.getElementById("info");
    error.innerHTML = ("");
    try {
        // si se introduce un index de tipo Number
        if(isNaN(index)){
            removeElement(elemntList,elem);    
        }else{
            remove(elemntList,index);
        }
    } catch (exception) {
        error.innerHTML = exception;
    }
    info.innerHTML = toString(elemntList); 
    
}

//funciones de testeo
function testList(){
    var list = create(); 	
 	var list=[]; 	
 	console.log ("Capacidad: " + capacity(list));
 	console.log("Es vacía: " + isEmpty(list));
 	console.log("Longitud: " + size(list));

 	try {
	 	for (var i = 0 ; i < MAX_ELEMENT_LIST ; i++){
	 		console.log("Nº de elementos: " + add(list,i*10));
	 	}
	 	//add(list,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("La lista completa: " + toString(list));	 	
 	console.log ("1º elemento: " + firstElement(list));
 	console.log ("último elemento: " + lastElement(list));
	 	
 	//clear(list);

 	try {
	 	while (true){ 
	 		console.log ("Elemento borrado del indice 2: " + remove(list,2));
            console.log ("Estado de la lista actual: " + toString(list)); 
            console.log ("Eliminamos un valor concreto(si aparece ene el array): 10");  
            console.log ("Resultado: " + removeElement(list,10));
            console.log ("Estado de la lista actual: " + toString(list));
            console.log ("añadimos un valor sustituyendo a otro: valor sustituido: " + set(list,25,0));
            console.log ("Estado de la lista actual: " + toString(list));             	 	 		 	
	 	}
 	} catch (err) {
 		console.log(err); 
    }
     
 	console.log ("Estado de la lista actual: " + toString(list)); 	 	
}
window.onload = (testList);