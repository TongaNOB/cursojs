let comienzo=confirm("Bienvenido al sistema de reserva de entradas para asistir a la final de la Copa Libertadores de America con la parcialidad de Newells Old Boys. \n Desea continuar con el tramite?");
let precioA=17000;
let precioB=17000;
let precioC=34000;
let precioD=42000;
const listaReservas=[]
let nombre;
let SumaImporte=0

function opciones(precio) {
    nombre=prompt ("Ingrese nombre y apellido del titular de la entrada");
    listaReservas.push(nombre);
        SumaImporte+=precio
}

while (comienzo) {
    let entrada=prompt("Ingrese el SECTOR que desea reservar. \n Sector A: POPULAR SUR $17000. \n Sector B: POPULAR NORTE $17000. \n Sector C: Platea ESTE $34000. \n Sector D: Platea OESTE $42000. \n Tipee ESC para terminar");
    if ((entrada === "A")||(entrada ==="a")) {
        opciones(precioA)
        
    }else if ((entrada === "B")||(entrada === "b")) {
        opciones(precioB);

    }else if ((entrada === "C")||(entrada === "c")) {
        opciones(precioC);

    }else if ((entrada === "D")||(entrada === "d")) {
        opciones(precioD)

    }else if((entrada === "ESC")||(entrada === "esc")){
        let todosNombres=listaReservas.join("\n")
        alert ("Sus reservas se realizaron con exito a nombre de:\n" +todosNombres+ " \nPor un importe total de $"+ SumaImporte + "\nTotal de entradas: "+listaReservas.length+"\nPuedes pasar a retirarlas por el Estadio COLOSO DEL PARQUE Marcelo A. Bielsa de Lunes a Viernes de 8Hs. a 16Hs.");
        comienzo=false;
    } else{
        alert("El dato Ingresado no es correcto")
    }

}
    alert("Muchas Gracias. \nHasta luego")

