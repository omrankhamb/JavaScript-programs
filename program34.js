// call back function jo jo ek function ke andar pass hota hai

function Product(a,b,c)
{
    return a* b * c;
}

function fun(x,y)
{
    return x- y;
}

console.log(fun(Product(8,3,9),7))