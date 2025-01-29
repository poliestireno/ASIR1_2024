function shuffleArray(arr) {
    arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
}

let aBaraja = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(aBaraja);

shuffleArray(aBaraja);

console.log(aBaraja);

// jugador 1
let aJugador1 = [];
aJugador1.push(aBaraja[0]);
aJugador1.push(aBaraja[4]);
aJugador1.push(aBaraja[8]);
console.log("Mano del jugador1");
console.log(aJugador1);
// jugador 2
let aJugador2 = [];
aJugador2.push(aBaraja[1]);
aJugador2.push(aBaraja[5]);
aJugador2.push(aBaraja[9]);
console.log("Mano del jugador2");
console.log(aJugador2);
// jugador 3
let aJugador3 = [];
aJugador3.push(aBaraja[2]);
aJugador3.push(aBaraja[6]);
aJugador3.push(aBaraja[10]);
console.log("Mano del jugador3");
console.log(aJugador3);
// jugador 4
let aJugador4 = [];
aJugador4.push(aBaraja[3]);
aJugador4.push(aBaraja[7]);
aJugador4.push(aBaraja[11]);
console.log("Mano del jugador4");
console.log(aJugador4);


let suma = 0;

for (let index = 0; index < aJugador1.length; index++) 
{
    suma = suma + aJugador1[index];  
}
console.log("calidad de la mano jugador 1 "+suma);
suma = 0;
for (let index = 0; index < aJugador2.length; index++) 
{
    suma = suma + aJugador2[index];  
}
console.log("calidad de la mano jugador 2 "+suma);
suma = 0;
for (let index = 0; index < aJugador3.length; index++) 
{
    suma = suma + aJugador3[index];  
}
console.log("calidad de la mano jugador 3 "+suma);
suma = 0;
for (let index = 0; index < aJugador4.length; index++) 
{
    suma = suma + aJugador4[index];  
}
console.log("calidad de la mano jugador 4 "+suma);

-hacer una funcion calidad
-decir que jugador va mejor y que jugador va peor
        





