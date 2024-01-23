var funSaludo = function (nombre) {
    console.log("Hola " + nombre);
}

funSaludo("Omar");

var saludo = function(nombre) {
    console.log("Hola " + nombre);
}("Zaki");

console.log(saludo);