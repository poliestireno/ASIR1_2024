
var numObjetivo=12;
let maxOpor = 3;
var numJugador;

for (let i = 0; i < 3 ; i++)
{
    numJugador = prompt('intento nº'+ (i+1) +': dime número');
    if (numJugador==numObjetivo)
    {
        console.log("EDLB");
        break;
    }
}

let i = 0;
for (;i < 3 ;) {
    numJugador = prompt('intento nº'+ (i+1) +': dime número');
    if (numJugador==numObjetivo)
    {
        console.log("EDLB");
        break;
    }
    i++;
}


let seguir = true; 
for (let i = 0; ( i < 3 && seguir); i++)
{
    numJugador = prompt('intento nº'+ (i+1) +': dime número');
    if (numJugador==numObjetivo)
    {
        console.log("EDLB");
        seguir = false;
        //o i= i +3; // i+=3;
    }
}



