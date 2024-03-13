const colors = require('colors');
const {Module} = require('module');
const readline = require('readline');

const mostrarMenu = () => {
    return new Promise( (resolve) => {
        console.clear();
    
        console.log("=====================".green);
        console.log("Seleccione una Opción".green);
        console.log("=====================\n".green);
        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Terminadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir`);
    
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question('Seleccione una opción: ', (opc) => {
            rl.close();
            resolve(opc);
        });
    });
};

const pausa = () => {
    return new Promise( (resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question(`Presione ${'Enter'.red} para continuar`, (opc) => {
            rl.close();
            resolve(opc);
        });
    });
};

module.exports = {
    mostrarMenu,
    pausa
}