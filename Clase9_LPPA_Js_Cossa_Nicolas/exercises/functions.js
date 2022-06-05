//Punto A
let Valor1 = 2;
let Valor2 = 2;
function Suma(A, B)
{
    return A + B;
}
console.log(Suma(Valor1, Valor2));

//Punto B
function SumaconValidez(A , B)
{
    if(typeof A !== 'number' || typeof B !== 'number')
    {
        alert("Uno de los parametros no es numero");
        return NaN;
    }
    else
    {
        return A + B;
    }
}
console.log(SumaconValidez("Valor1", Valor2));

//Punto C
function integervalidate(Num)
{
    if(typeof Num == 'number')
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(integervalidate(2));

//Punto D
function SumaRedonda(A, B)
{
    if(Number.isInteger(A) || Number.isInteger(B))
    {
        alert("Alguno de los valores tienen decimales");
    }
    
    return Math.round(A) + Math.round(B);
}
console.log(SumaRedonda(3.4, 4));

//Punto E
function SumaCompleta(A, B)
{
    if(typeof A !== 'number' || typeof B !== 'number')
    {
        alert("Uno de los parametros no es numero");
        return NaN;
    }
    if(Number.isInteger(A) || Number.isInteger(B))
    {
        alert("Alguno de los valores tienen decimales");
    }
    
    return Math.round(A) + Math.round(B);
}