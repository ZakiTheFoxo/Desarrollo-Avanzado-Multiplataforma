var Persona = {
    nombre: "Omar",
    apellido: "Díaz",
    getNombre: function(lang) {
        var nombre_completo = this.nombre + " " + this.apellido + " (" + lang + ")";
        return nombre_completo;
    }
};

var Persona2 = {
    nombre: "Zaki",
    apellido: "Foxo"
};

console.log(Persona.getNombre.apply(Persona2, ["en"]));