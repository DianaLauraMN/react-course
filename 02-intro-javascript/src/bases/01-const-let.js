console.log("Winter in F minor >>>>>>");

const nombre = "Diana";
let apellido = "Medina";
console.log("Bienvenida: " + nombre, apellido);

if (true) {
    const nombre="Laura"; //Se pueden volver a declarar por que variables let y const
    let apellido="Nevarez";// Solo existen dentro de un scope y aquí puedo usar las anteriores o declarar nuevas
    console.log("Bienvenida: "+nombre,apellido);
}