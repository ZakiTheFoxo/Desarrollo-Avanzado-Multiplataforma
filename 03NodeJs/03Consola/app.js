const colors = require('colors');
const { inquirerMenu, pausa } = require('./js/inquirer');

const main = async () => {
    let opc = '';

    do {
        opc = await inquirerMenu();
    } while (opc != 0);

    await pausa();
};

main();