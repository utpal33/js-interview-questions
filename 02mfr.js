

// what is map() method ? 
    /* map method is used to create a new array from existing one by applying a function  
        to each element of an existing array where we perform some task on each element.*/

const arr = [1,2,3,4,5]

//! map
const addByTwo = arr.map((num, i, arr) => {
    // console.log(i, arr);
    return num+2 + i
})
// console.log(addByTwo);


//! filter
    //? what is filter() method ?
    /* filter method is used to create a new array of filtered element from existing one by applying a function 
        on each element while performing some action */ 
const oddNumber = arr.filter((num, i , arr) => {
    return num%2 != 0 
})
// console.log(oddNumber);

//! reduce
    //? what is reduce() method ?
        /*  reduce method is used to reduce an  array of values down to one value by passing a callback function
            to each element. */  
const sum = arr.reduce((acc, curr, i, arr) => {
    console.log(acc, curr);
    return acc + curr
}, 0)
console.log(sum);


