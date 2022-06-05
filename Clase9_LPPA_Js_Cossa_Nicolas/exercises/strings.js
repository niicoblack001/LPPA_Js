//Punto A
let Astrinparamayus = "buenasbuen";
console.log(Astrinparamayus.toUpperCase());

//Punto B
let Bstringcon10 = "buenasbuen";
const Bstringhasta5 = Bstringcon10.substring(0,5);

//Punto C
let Cstringcon10 = "buenasbuen";
const Cstringultimos3 = Cstringcon10.substring(Cstringcon10.length - 3);

//Punto D
let Dstringcon10 = "buenasBUEN";
const Dresultado = Dstringcon10.substring(0,1).toUpperCase() + Dstringcon10.substring(1).toLowerCase();

//Punto E
let Estringcon10 = "buenas buen";
const Eresultado = Estringcon10.indexOf(" ");

//Punto F
let Fstringcon20 = "achichinar acunaremos";
const Fresultado = Fstringcon20.substring(0,1).toUpperCase() + Fstringcon20.substring(1,10).toLowerCase() + Fstringcon20.indexOf(" ") + Fstringcon20.substring(11,12).toUpperCase() + Fstringcon20.substring(12).toLowerCase();
console.log(Fresultado);