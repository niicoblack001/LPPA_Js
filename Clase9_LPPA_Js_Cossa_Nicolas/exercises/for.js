//Punto A
let ArrayFor = ["Hola", "Dale", "Altoque", "Bueno", "Chau"];
for(let i = 0; i < 5; i++)
{
    alert(ArrayFor[i]);
}

//Punto B
for(let i = 0; i < 5; i++)
{
    alert(ArrayFor[i].toUpperCase());
}

//Punto C
let sentence = "";
for(let i = 0 ; i < ArrayFor.length; i++)
{
    sentence += ArrayFor[i];
}
alert(sentence);

//Punto D
let ArrayVacio = [];
for(i = 0; i < 10; i++)
{
    ArrayVacio.push(i);
}
console.log(ArrayVacio);