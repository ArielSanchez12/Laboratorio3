//Variables
let categoria = "Accesorios"
const producto = "Gafas"

//Strings
const nombreProducto = "Gafas Cuadradas Puma" //falta usar metodos

//Template Literals
console.log(`Este producto de nombre ${producto} pertenece a la categoria ${categoria}`);

//Métodos
console.log("      SECCIÓN DE HOMBRES".trim().toUpperCase()) 

//Condicionales
let stockActual = 1
let cantidadOrden = parseInt(prompt("Cuantas gafas desea agregar al carrito?"));
if(cantidadOrden === stockActual){
    console.log(`Se han añadido ${cantidadOrden} gafas a su carrito`)
} else {
    console.log(`Producto fuera de stock`)
}

//Operador ternario
let colores = {
    "Negro": 3,
    "Blanco": 2,
    "Azul": 0
  };
  
  let colorOrden = prompt("En que color desea sus gafas?");
  
  console.log(
    (colores[colorOrden] === 0) ? `El color ${colorOrden} esta fuera de stock` : `El color ${colorOrden} esta disponible`
  );
  
//Booleano
let esProductoNuevo = true;
let nombre = "Gafas Cuadradas Puma";

console.log(`El producto ${nombre.toUpperCase()} es ${esProductoNuevo ? "nuevo" : "usado"}.`);

//Funciones y uso del this
const cliente = {
    nombre: "Juan",
    notificacion: function () {
        setTimeout(() => {
            console.log(`Gracias por tu compra, ${this.nombre}`);
        }, 1000);
    },
};
cliente.notificacion();

//Argumentos y parametros
function mostrarOpcionesRetiro(producto) {
    console.log(`Puedes recibir tus ${producto} en casa o retirarlas en tienda`);
}
mostrarOpcionesRetiro("Gafas Cuadradas Puma");