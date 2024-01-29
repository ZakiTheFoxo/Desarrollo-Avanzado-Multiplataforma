var Persona = {
    nombre: "Juan",
    apellido: "Perez",
    getNombre: function () {
        var nombre_completo = this.nombre + " " + this.apellido;
        return nombre_completo;
    }
};

var logNombre = function () {
    console.log("Logged: " + this.getNombre());
};

var nombreLog = logNombre.bind(Persona);

nombreLog(); 