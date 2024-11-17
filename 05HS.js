//! Function 

//? function declaration 
function funcName(){}

//! Annonymous Functions
{
    // 1.
    //? function expression :  function stored in a variable called function expression
    const funcVar = function () {}

    // 2.
    //? arrow fumction or annonymus function 
    const anonymusFunc = () => {}

    // 3.
    //? IIFE :- Immidieately invoked function Expression : a functon who called itself
    {
        // (()=>{console.log("item");})();
        // (function (){console.log("item2");})();
    }
    
}
//! iife interview question -- output based
{
    // ((x)=>{return (function(y) { console.log(x);})(2)})(1)
}

//! 
{
    // for (let i=0; i<5; i++){
    //     setTimeout(()=>{console.log(i);}, i*1000)
    // }
    // output : 0,1,2,3,4

    // for (var i=0; i<5; i++){
    //     setTimeout(()=>{console.log(i);}, i*1000)
    // }
    // output : 5,5,5,5,5

    // for (var i=0; i<5; i++){
    //     (function(i){
    //         setTimeout(()=>{console.log(i);}, i*1000)
    //     })(i)
    // }
    // output : 0,1,2,3,4
}

//! rest and spread operator interview qiestion 
{
    // res parameters must me the last parameter
    
    {
    // ❌ ❌ ❌ ❌ ❌ ❌ ❌  this is wrong
        // function main(x,...y, z){
        //     console.log(x,y); // syntax error: rest parameter should be the last parameter
        // }
        // main(1,2,3,4,5)
    }

    {
    // ✅  ✅  ✅  ✅  ✅
        // function main(x, y, ...z){
        //     console.log(x, y, z);
        // }
        // main(1,2,3,4,5,6)
    }
}

//! difference between arrow function and function declaration
{
    //? 1. syntax difference
    {
        // // arrow
        // var Arrowfun = 1

        // // normal
        // function Arrowfun(){}
    }
    //? 2. arrow dont have argument keyword in parameters while normal function have
    //? 3. this kweyworn in arrow function points to window object or undefined while normal functipn points to its parent object
    //? 4. arrow function has implicit return keyword while normal function dont have it.
}

var show = 1
function show(){}
// console.log(show);