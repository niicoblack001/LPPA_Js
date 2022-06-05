//Punto A
let Aarray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(Aarray[4], Aarray[10]);

//Punto B
console.log(...[Aarray].sort()); //Nuevo Array para solo mostrar este log ordenado

//Punto C
Aarray.unshift("MesesInicios");
Aarray.push("MesesFinal");
console.log(Aarray);

//Punto D
Aarray.shift();
Aarray.pop();
console.log(Aarray);

//Punto E
console.log(...[Aarray].reverse());

//Punto F
const Fstringjoin = Aarray.join("-");
console.log(Fstringjoin);

//Punto G
console.log(Aarray.slice(4,11));