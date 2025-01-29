

let aNumerosDePie = [12,35,47,48];


//console.log(aNumerosDePie[0]);

//console.log(aNumerosDePie[2]);

for (let index = 0; index < aNumerosDePie.length; index++) 
{
    console.log(index + ":" + aNumerosDePie[index]);   
}


aNumerosDePie.push(38);

console.log("DESPUES");

aNumerosDePie.forEach((valor,indice) =>
{
    
    console.log(indice +":"+ valor);   
});

let ultimoElemento = aNumerosDePie.pop();

console.log("DESPUES DE DESPUES");

aNumerosDePie.forEach((valor,indice) =>
{
    
    console.log(indice +":"+ valor);   
});

console.log("el último elemento fue "+ultimoElemento);




const aPersonas = ["Jose","Chema","Pepe","Bartolito","Begoña"];

aPersonas[0] = "Josito";

aPersonas.forEach((valor,indice) =>
{ 
    console.log(indice +":"+ valor);   
});
// intercambiar el valor de la posición 2 y 3, independientemente de los valores.

console.log("**************** ");
let aux;
aux = aPersonas[2];
aPersonas[2] = aPersonas[3];
aPersonas[3] = aux;

aPersonas.forEach((valor,indice) =>
{ 
    console.log(indice +":"+ valor);   
});

console.log(aPersonas);

aPersonas.sort(); // por defecto, orden alfanumérico

console.log(aPersonas);


let aNumerosPotencias2= [32,64,128,16,8,4,2,1];

aNumerosPotencias2.sort();

console.log(aNumerosPotencias2);

aNumerosPotencias2.sort((a, b) => a - b);

console.log(aNumerosPotencias2);


let fila1 = [1,2];
let fila2 = [5,7];

let matriz1 = [fila1,fila2];

let matriz2 = [[1,2],[5,7]];

console.log(matriz1);

console.log(matriz2);


imprimirMatriz(matriz2);

// incrementar todos los elementos de la matriz en 1
for (let index = 0; index < matriz2.length; index++) 
{
    const fila = matriz2[index];
    for (let i = 0; i < fila.length; i++) 
    {
        fila[i]++;
    }   
}
imprimirMatriz(matriz2);

// incrementar en 2 cada elemento
for (let index = 0; index < matriz2.length; index++) 
{
    const fila = matriz2[index];
    for (let i = 0; i < fila.length; i++) 
    {
        fila[i] = fila[i] + 2;
    }   
}

imprimirMatriz(matriz2);

function imprimirMatriz(miMatriz) 
{
    for (let index = 0; index < miMatriz.length; index++) 
    {
        const fila = miMatriz[index];
        for (let i = 0; i < fila.length; i++) 
        {
            console.log ("valor:"+fila[i]);
        }   
    }
}