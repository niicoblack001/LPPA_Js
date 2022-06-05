//Punto A
let Arandomnumber = Math.random();
if (Arandomnumber >= 0.5)
{
    console.log("Greater than 0,5");   
}
else
{
    console.log("Lower than 0,5");
}

//Punto B
let age = 27;
if (age < 2) 
{
    alert('Bebe');
} 
else if (age >= 2 && age <= 12) 
{
    alert('Niño');
} 
else if (age >= 13 && age <= 19) 
{
    alert('Adolescente');
} 
else if (age >= 20 && age <= 30) 
{
    alert('Adulto');
} 
else if (age >= 61 && age <= 75) 
{
    alert('Adulto mayor');
} 
else 
{
    alert('Anciano');
}