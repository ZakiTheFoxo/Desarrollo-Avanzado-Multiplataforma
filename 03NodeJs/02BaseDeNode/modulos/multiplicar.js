const fs = require('node:fs');
const {Module} = require('module');
const colors = require('colors');

const crearArchivo = (base = 5, limite = 15, listar = true) =>
{
    return new Promise((resolve, reject) => {
        let salida = "";

        if(listar){
            console.log("======================".green);
            console.log(`Tabla del ${base}`.green);
            console.log("======================".green);
        }

        for (let i = 0; i <= limite; i++) 
            salida += `${base}`.yellow + ` * ${i}`.gray + ` = ${base * i}\n`;

        fs.writeFile(`txt/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            resolve(`tabla-${base}.txt`);
        }); 

        if(listar)
            console.log(salida);
    });
}
  

module.exports = {
    crearArchivo
};