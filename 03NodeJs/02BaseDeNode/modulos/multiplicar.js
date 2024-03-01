const { Module } = require("module");
const fs = require('node:fs');

const crearArchivo = (base = 5) => {
    
    let salida = "";

    // all your base are belong to us
    console.log("====================");
    console.log(` Tabla del ${base} `);
    console.log("====================");

    for (let i = 0; i <= 10; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
    }
    
    console.log(salida);
    
    return promise = new Promise( (resolve, reject) => {
        fs.writeFile(`./txt/tabla-${base}.txt`, salida, (err) => {
            (err)  ? reject(err) : resolve(`tabla-${base}.txt`);
        })
    });
};

module.exports = {
    crearArchivo
};