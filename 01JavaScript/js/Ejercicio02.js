document.addEventListener("DOMContentLoaded", function(event) {
    var a;

    a = 5;
    console.log('a :>> ', a);
    
    a = 'Hola';
    console.log('a :>> ', a);
    
    a = 'a';
    console.log('a :>> ', a);

    a = true;
    console.log('a :>> ', a);

    a = function() {};
    console.log('a :>> ', a);

    a = undefined;
    console.log('a :>> ', a);
    
    a = null;
    console.log('a :>> ', a);

    a = {
        nombre: 'Omar',
        edad: 21
    };
    console.log('a :>> ', a);
});