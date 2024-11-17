//! clousers : -  a combination of function with reference of its lexical scope( its parent environment)

function clousers (){
    var name = 'utpal',
        lname = "kant",
        add = "nawada" ;
    return inner
    function inner(){
        return inner2
        function inner2(){
            console.log(name);
            return add
        }
    }    
}

// let myfun = clousers()

// console.log(clousers()()());    // nested function calling

{
    // let count = 0;
    // (function(){
    //     if (count === 0){
    //         let count = 1  // shadowing the count variable
    //         console.log(count);
    //     }
    //     console.log(count);
    // })()
}

{
    function creatBase(n){
        num = 10  // private variable can not access directly 
        return function inner(a){
            num += a
            return num
        }
    }
    // let addSix = creatBase(6)
    // console.log(addSix(10));
    // console.log(addSix(21)); 
    // console.log(num);
}

{
    function myFunction() {
        globalVar = "I am global"; // Implicit global variable
        function myInnerFun(){
            return "myInnerFun"
        }
    }
    
    // console.log(myFunction.myInnerFun);
    // console.log(myFunction()());
    // console.log(globalVar);
}

//! clousers for Time Optimization
{
    function outer(index){
        for(let i=0; i<10000000; i++){
            
        }
    }
}
