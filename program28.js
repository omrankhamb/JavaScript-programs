// string built in method in javascript

var str = "           Jay Ganesh....";
console.log(str.toUpperCase());

let str2 = str.toUpperCase();
console.log(str)
console.log(str2)

console.log(str.trim())
console.log(str)
console.log(str.indexOf('a'))
console.log(str.lastIndexOf('a'))

// slicing allows alicing

str  = "Jay Ganesh....."
console.log(str[3-2])

// slice built method in javascript
// note -> there is no cshnge in original string

console.log(str.slice(4))   // give the string index first

let s = "raghav garg is a teacaher at physics wallah";
console.log(s)
let arr = s.split(' ')
console.log(arr)

// for of loop om javascript

for(element of arr)
{
    console.log(element)
}