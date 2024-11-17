//! map pollyfill

const nums =[1,2,3,4,5]


{
Array.prototype.myMap = function (cb) {
    const temp = []
    
    if (typeof cb != 'function')
        throw new TypeError(`${typeof cb == 'object'? `${typeof cb} is not a function`: `${typeof cb} ${'"'+cb+'"'} is not a function`}`)
    console.log(this);
    for (let i=0; i<this.length ; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp
}
}
// console.log(nums.myMap((item, i, arr)=>{return item+i}).map((item) => {return item+100}));

//! filter pollyfill
Array.prototype.myFilter = function (cb) {
    const temp = []

    if (typeof cb != 'function')
        throw new  TypeError(`${typeof cb == 'object'? `${typeof cb} is not  function`: `${typeof cb} ${'"'+cb+'"'} is not a function`}`)
    for(let i=0; i<this.length ; i++){
        if (cb(this[i],i, this))
            temp.push(this[i])
    }
    return temp
}
// console.log(nums.filter((item, i, arr)=>{return arr}));
// console.log(nums.myFilter((item, i, arr)=> {return arr}));


//! reduce
Array.prototype.myReduce = function(cb, initialValue) {
    var accumulator = initialValue

    if (typeof cb != 'function')
        throw new  TypeError(`${typeof cb == 'object'? `${typeof cb} is not  function`: `${typeof cb} ${'"'+cb+'"'} is not a function`}`)
    for(let i=0; i<this.length ; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this): initialValue
    }
    return accumulator


// console.log(nums.myReduce(()=>{}))
// console.log(nums.myReduce((acc, curr, i, arr)=>{
//     console.log(acc, curr);
//     return acc+curr},5))
}

//! forEach pollyfill
{
Array.prototype.myForEach = function (cb) {
    if (typeof cb != 'function')
        throw new  TypeError(`${typeof cb} "${cb}" is not a function`)
    for (let i=0; i<this.length; i++){
        cb(this[i], i, this)
    }
}
//! ForEach
// nums.myForEach((num, i ,arr) => {
   
//    arr[i] = num+2
//    console.log(num, i, arr); 
// })
// console.log(newnums);
}

//! interview questions based on map, filter, reduce, forEach

let students = [
    {name:"utpal", address:"nawada", marks:45, rollNumber:16},
    {name:"pujara", address: "bilaspur", marks: 60, rollNumber:18 },
    {name:"rohit", address: "mumbai", marks: 64, rollNumber:12 },
    {name:"virat", address: "delhi", marks: 30, rollNumber:30 }
]

//? 1. return only names of students in capitalize form
//! answer 1
{
// traditional method
// for(let i=0; i<students.length; i++){
//     students[i]['name'] = students[i]['name'][0].toUpperCase() + students[i]['name'].slice(1)
// }
// console.log(students);




//! using map

// const stuDetails = students.map((item) => {
//     item['name'] = item.name[0].toUpperCase() + item.name.slice(1)
//     return item
// })
// console.log(stuDetails);
}


//? 2. return details of those students whose marsk>60
//! answer 2
{
// let stuMarksDetails = students.filter(item => item.marks>=60)
// console.log(stuMarksDetails);
}


//? 3. return details of those whose rollNumber>25 and marks>60
//! answer 3
{
// let stuDetails = students.filter(item => item.marks>=60 && item.rollNumber>=15)
// console.log(stuDetails);
}


//? 4. return sum of marks of all sudents
//! answer 4
{
    //? using forEach
// let sum = 0;
// students.forEach( item => sum+=item.marks)
// console.log(sum);

    //? usinf reduce
// const marksSum = students.reduce((acc, curr) => acc+curr.marks, 0)
// console.log(marksSum);
}


//? 5. returnr only names of students whose marks>60
//! answer 5
{
// const stuNames = students.filter((item) => item.marks>=60).map((item)=> item.name)
// console.log(stuNames);
}

//? 6. return total marks for students with marks > 60 after 20 marks added to those who scored less than 60.
//! answer 
{
const totalMarks = students.map((item) => {
    if (item.marks<60)
        item.marks = item.marks+20
    return item
}).reduce((acc, curr) => acc+curr.marks, 0)
console.log(totalMarks);
}



