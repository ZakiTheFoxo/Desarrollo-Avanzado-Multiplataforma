const {crearArchivo} = require('./modulos/multiplicar');
const {argv} = require('./modulos/argv');

console.clear();

const base = argv.base;
// console.log(base);

const limite = argv.limite;
// console.log(limite);

const listar = argv.listar;
// console.log(listar);

crearArchivo(base, limite, listar)
        .then((nombreArchivo) => {console.log(nombreArchivo, " creado");})
        .catch((err) =>{console.log(err);});