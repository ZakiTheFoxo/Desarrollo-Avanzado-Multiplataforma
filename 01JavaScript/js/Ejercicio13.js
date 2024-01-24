console.log('this :>> ', this);

function b() {
    console.log('this :>> ', this);
}

b();

var obj = {
    nombre : "Objeto",
    fun: function() {
        console.log('this :>> ', this);
        console.log('this.nombre :>> ', this.nombre);
    }
}

obj.fun();