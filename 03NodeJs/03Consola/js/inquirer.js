const inquirer = require('inquirer');
const colors = require('colors');

const menu = [
    {
        type: 'list',
        name: 'menuOpt',
        message: 'Seleccione una opción: ',
        choices: [
            {
                value: 1,
                name: `1. Crear Tarea`
            },
            {
                value: 2,
                name: `2. Listar Tareas`
            },
            {
                value: 3,
                name: `3. Listar Tareas Terminadas`
            },
            {
                value: 4,
                name: `4. Listar Tareas Pendientes`
            },
            {
                value: 5,
                name: `5. Completar Tarea`
            },
            {
                value: 6,
                name: `6. Borrar Tarea`
            },
            {
                value: 0,
                name: `0. Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    
    console.log("=====================".green);
    console.log("Seleccione una Opción".green);
    console.log("=====================\n".green);

    const { menuOpt } = await inquirer.prompt(menu);
    return menuOpt;
};

const pausa = async () => {
    await inquirer.prompt([{
        type: 'input',
        name: 'pauseOpt',
        message: `Presione ${'Enter'.red} para continuar...`
    }]);
}

module.exports = {
    inquirerMenu,
    pausa
}