//Callback Hell

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
const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id )?.nombre;

    if(empleado) {
        callback(null, empleado)
    } else {
        callback(`El empleado con el ID: ${id} no existe`);
    }
};

// Buscar Salario
const getSalario = (id, callback) => {
    const salario = salarios.find( (s) => s.id_empleado === id )?.salario;

    if(salario) {
        callback(null, salario)
    } else {
        callback(`El empleado con el ID: ${id} no tiene un salario asignado`);
    }
};

// Buscar Empleado con Salario
const getEmployee = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    const salario = salarios.find((s) => s.id_empleado === id)?.salario;

    if(empleado) {
        if(salario) {
            callback(null, empleado + ': ' + salario)
        } else {
            callback(`El empleado con el ID: ${id} no tiene un salario asignado`);
        }
    } else {
        callback(`El empleado con el ID: ${id} no existe`);
    }
};

// Consultas Empleados
getEmpleado(3, (err, empleado) => { 
    (err) ? console.log(err) : console.log(empleado);
});

getEmpleado(5, (err, empleado) => {
    (err) ? console.log(err) : console.log(empleado);
});

// Consultas Salarios
getSalario(3, (err, salario) => { 
    (err) ? console.log(err) : console.log(salario);
});
getSalario(4, (err, salario) => {
    (err) ? console.log(err) : console.log(salario);
});

// Consulta Empleado - Salario
let id = 1;

getEmployee(id, (err, employee) => {
    (err) ? console.log(err) : console.log(employee);
}); 

// Consulta con promesas
getEmpleado(id, (err, empleado) => {
    if(err) { return console.log(err); }
    
    getSalario(id, (err, salario) => {
        if (err) { return console.log(err); }

        console.log(`El empleado ${empleado} gana ${salario}`);
    });
});