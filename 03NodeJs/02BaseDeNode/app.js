const { crearArchivo } = require('./modulos/multiplicar');

console.clear();

let base = 5;

crearArchivo(base)
    .then(response => console.log(`El archivo ${response} se creó correctamente`))
    .catch(err => console.log(err));