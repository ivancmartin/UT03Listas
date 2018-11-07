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

//Añade a la lista un elemento de tipo Number y devuelve el tamaño actual del array
function addAt(list,elem,index){
    //recogemos el tamaño actual del array
    var tam = capacity(list);
    //pasamos a entero
    elem = parseInt(elem);
    //si el elemento NO es un número
    if(isNaN(elem)){
        throw "Eso no es un número";
    }
    //control sobre el indice: si esta fuera de rango o no es un numero  
    if(isNaN(index) || (index < 0 || index > tam)){
        throw "Eso no es un indice válido (max " + tam + " )...";
    }
    //si la lista NO está llena
    if(!isFull(list)){
        //si está vacía se añade al principio
        if(isEmpty(list)){
            list[0] = elem;
        }else if(!isNaN(list[index])){
            //si el elemento es un numero y hay espacio para introducirlo
            //guardamos el valor a sustituir
            var aux = list[index];
            //sustituimos el indice con el nuevo valor
            list[index] = elem;
            //desde el siguiente indice al ya sustituido, movemos los elementos
            for (var i = (index + 1); i < capacity(list); i++) { //repasar - size
                var next = list[i];
                list[i] = aux;
                aux = next;
            }     
        }else{
            //si el indice anterior está vacío, se añade en la última posición
            list[size(list)] = elem;
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
    }else{
        string = "Lista vacía";
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


//sustituye el valor del indice, devuelve el valor sustituido
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
            var num = (i*10);
            console.log("Nº de elementos: " + add(list,num));
	 	}
	 	add(list,i);//excepción al añadir un elemento fuera de rango
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("La lista completa: " + toString(list));	 	
 	console.log ("1º elemento: " + firstElement(list));
 	console.log ("último elemento: " + lastElement(list));

 	try {
	 	while (true){ 
	 		console.log ("Elemento borrado del indice 1: " + remove(list,0));
            console.log ("Estado de la lista actual: " + toString(list)); 
            console.log ("Eliminamos un valor concreto(si aparece en el array): 10");  
            console.log ("Resultado: " + removeElement(list,10));
            console.log ("Estado de la lista actual: " + toString(list));
            console.log ("añadimos un valor sustituyendo a otro: valor sustituido: " + set(list,25,2));
            console.log ("Estado de la lista actual: " + toString(list));
            console.log ("Añadimos un elemento (35). Tamaño actual de la lista: " + add(list,35));
            console.log ("Estado de la lista actual: " + toString(list));
            console.log ("Borramos el elemento de un indice concreto, el 0 en este caso: " + remove(list,0));
            console.log ("Estado de la lista actual: " + toString(list));
        }
 	} catch (err) {
 		console.log(err); 
    }
    console.log ("borramos la lista");
    clear(list);
    console.log ("Estado de la lista actual: " + toString(list));  	 	
}
window.onload = (testList);