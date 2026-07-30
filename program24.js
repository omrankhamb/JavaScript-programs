// types of loop

arr= [1,3,'OMprasad','soham',true,false]
console.log(typeof(arr))

console.log("Simple for loop in javascript")
// for loop
// acautal elemetn can change the loop
for(let i  = 0 ; i < arr.length ; i++)
{
    console.log(arr[i])
}


// same loop in c++
// for of loop in javascript
// we can not edit there is no change in actual element
// indexing not present in for each loop
console.log("For of loop in javascript")
for(ele of arr)
{
    console.log(ele)
}

// we can add indexing in for each loop 
// we can not change the elemetn in for each loop
// No change in actual value create new element
console.log("for each loop in javascript")
brr = [1,2,3,4,5,6]

brr.forEach((ele,i,brr)=>
{
    console.log(ele,i,brr)
    ele = ele * 3

}
);
console.log(brr)


