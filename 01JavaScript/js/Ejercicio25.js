function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
};

Persona.prototype.getFullName = function () {
    return this.nombre + " " + this.apellido;
};

var juan = new Persona("Juan", "Perez");
var pedro = new Persona("Pedro", "Gomez");

console.log(juan.getFullName());
console.log(pedro.getFullName());