var ObjetoLiteral = {
    nombre : "Omar",
    edad: 21
};
console.log('ObjetoLiteral :>> ', ObjetoLiteral);

var ObjetoJSON = JSON.stringify(ObjetoLiteral);
console.log('ObjetoJSON :>> ', ObjetoJSON);

var NuevoObjeto = JSON.parse(ObjetoJSON);
console.log('NuevoObjeto :>> ', NuevoObjeto);