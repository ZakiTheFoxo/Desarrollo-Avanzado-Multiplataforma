// Promises 

const empleados = [
    {
        id: 1,
        nombre: "Omar"
    },
    {
        id: 2,
        nombre: "Díaz"
    },
    {
        id: 3,
        nombre: "Zaki"
    },
    {
        id: 4,
        nombre: "Foxo"
    }
];

const salarios = [
    {
        id_empleado: 1,
        salario: 1000
    },
    {
        id_empleado: 2,
        salario: 1500
    },
    {
        id_empleado: 3,
        salario: 2000
    }
];

// Buscar Empleado
const getEmpleado = (id) => {
    return promise = new Promise( (resolve, reject) => {
        const empleado = empleados.find( (e) => e.id === id )?.nombre;

        (empleado) ? resolve(empleado) : reject(`El empleado con el ID: ${id} no existe`);
    });
};

// Buscar Salario
const getSalario = (id) => {
    return promise = new Promise( (resolve, reject) => {
        const salario = salarios.find( (s) => s.id_empleado === id )?.salario;

        (salario) ? resolve(salario) : reject(`El empleado con el ID: ${id} no tiene un salario asignado`);
    });
};

// Consulta Empleado - Salario
let id = 3;

// Consulta con promesas
// getEmpleado(id, (err, empleado) => {
//     if(err) { return console.log(err); }
    
//     getSalario(id, (err, salario) => {
//         if (err) { return console.log(err); }

//         console.log(`El empleado ${empleado} gana ${salario}`);
//     });
// });

getEmpleado(id)
    .then((empleado) => { console.log(empleado) })
    .catch((err) => { console.log(err); });

getSalario(id)
    .then((salario) => { console.log(salario) })
    .catch((err) => { console.log(err); });

getEmpleado(id)
    .then((empleado) => 
        getSalario(id)
            .then((salario) => { console.log(`El empleado ${empleado} gana ${salario}`) })
            .catch((err) => { console.log(err) })
    )
    .catch((err) => { console.log(err) });