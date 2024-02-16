// Callbaks 2

let getUsuarioByID = (id, callback) => {
    let usuario = {
        nombre: 'Omar',
        id
    }

    if(id === 20) {
        console.log(`El usuario con id: ${id} no existe en la base de datos.`);
    } else {
        callback(null, usuario)
    }
};

getUsuarioByID(2, (err, usuario) => { 
    (err) ? console.log(err) : console.log(`Id: ${usuario.id}\nNombre: ${usuario.nombre}`); 
});