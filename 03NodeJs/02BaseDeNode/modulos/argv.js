const {Module} = require('module');

const argv = require('yargs')
        .option('b', {
                alias: 'base',
                demandOption: true, 
                default: 5,
                describe: 'Base de la tabla de Multiplicar',
                type: 'number'
        })
        .option('l', {
                alias: 'limite',
                demandOption: true, 
                default: 10,
                describe: 'Límite de la tabla de Multiplicar',
                type: 'number'
        })
        .option('listar', {
                demandOption: false, 
                default: true,
                describe: 'Mostrar la tabla al generar archivo',
                type: 'boolean'
        })
        .check( (argv, option) => {
                if(isNaN(argv.base))
                        throw 'El argumento base no es un número';
                if(isNaN(argv.limite))
                        throw 'El argumento límite no es un número';

                return true
        })
        .argv;

// const [,,arg3 = '--base=5', arg4 = '--limite=15'] = process.argv;

// const [,base,] = arg3.split('=');

// const [,limite,] = arg4.split('=');

// console.log(argv);
// console.log(process.argv);

// console.log(base, limite, listar);

module.exports = {
    argv
};