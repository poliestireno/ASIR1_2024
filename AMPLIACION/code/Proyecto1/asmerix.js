
/**************** NIVEL 1******************/

const sumaDosDados = Math.floor(Math.random() * 23) + 2; // entre 2 y 24
console.log("Tiras los dados y sacas "+sumaDosDados);
if (sumaDosDados>15)
{
    console.log("Enhorabuena NIVEL 2");
/**************** NIVEL 2******************/

    const numeroOculto = Math.floor(Math.random() * 5) + 1;// entre 1 y 5
    let numeroJugador = prompt("NIVEL 2: Acierta un número entre 1 y 5 ambos incluidos");
    console.log("numeroOculto:"+numeroOculto);
    console.log("numeroJugador:"+numeroJugador);
    let ok=false;
    if (numeroOculto != numeroJugador)
    {
        numeroJugador = prompt("NIVEL 2: 2ª oportunidad, Acierta un número entre 1 y 5 ambos incluidos");
        if (numeroOculto != numeroJugador)
        {
            console.log("GAME OVER Eres Matill@!");
        }
        else
        {
            ok=true;
        }
    }
    else
    {
        ok=true;
    }
    if (ok)
    {
        console.log("Enhorabuena NIVEL 3");
        /**************** NIVEL 3******************/
        const bit1 = Math.floor(Math.random() * 2);// o 1 o 0
        const bit2 = Math.floor(Math.random() * 2);// o 1 o 0
        const bit3 = Math.floor(Math.random() * 2);// o 1 o 0
        const clave3bits = "" + bit1 + bit2 + bit3;
        console.log(clave3bits);
    }

}
else
{
    console.log("GAME OVER Dedicate a otra cosa!");
}






/**************** NIVEL 3******************/
/**************** NIVEL 4******************/

/**************** NIVEL 5******************/
        