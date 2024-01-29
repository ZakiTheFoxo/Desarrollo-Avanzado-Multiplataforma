var Persona = {
    nombre: "Juan",
    apellido: "Perez",
    getNombre: function(lang) {
        var nombre_completo = this.nombre + " " + this.apellido + " (" + lang + ")";
        return nombre_completo;
    }
};

var logNombre = function(lang) {
    console.log("Logged: " + this.getNombre(lang));
};

logNombre.apply(Persona, ["es"]);