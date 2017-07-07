function isset( ar, key ) {

    for (var i in ar){
        if (i == key) {
            return true
        }
    }
    return false
}

function indexOf( haystack, needle ) {

    for (var i=0; i<haystack.length; i++) {
        if (haystack[i]==needle) {
            return i
        }
    }

    return -1
}

function is_in_array( element, list ) {

    if (typeof list != 'object')
        return false

    for (var i in list) {
        if (list[i] == element)
            return true
    }
    return false
}

/**
* Diese Funktion kopiert Felder aus einem prototypen in einen anderen
* prototypen. Optional können weitere argumente angegeben werden, welche
* die namen der Felder angeben. Auf diese Art und Weise kann man auch nur
* teile von einem prototypen clonen.
*/
Function.prototype.clone = function (parent) {
    if (arguments.length > 1) {
        for (var i=1; i<arguments.length; i+=1) {
            var name = arguments[i]
            this.prototype[name] = parent.prototype[name]
        }
    } else {
        for (var name in parent.prototype) {
            this.prototype[name] = parent.prototype[name]
        }
    }
}
