// object in javascript
// object is hashmap
// object is used to store key valuse pair
// 
/*  
    
*/

// key value pairs in javascript
const x = {   // x is the object 
    'name' : 'Raghav',
    'age' : 12,
    'status': true
};

// same as

let y =
{
    name : "omprasad",
    village : "khulgapur",
    age : 22
};


// Accessing eleent of object
console.log(x)
// wrong 

console.log(x['age'])
//console.log(x[age]) // Should give error

console.log("Ways to get the value of string : ");
console.log(x.age);
x.age = 40  // Change the value
console.log(x.age);

console.log(x['age']);


// for in loop 
for(const key in x)
{
    // work true
    console.log(key, x[key])
}

// // for of loop // Not work
// for(const ele of x)
// {
//     console.log(ele)
// }

