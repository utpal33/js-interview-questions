const myObj = {
    fname: "utpal",
    lname: "kant",
    greet(){
        console.log(`hi, good evening ${this.fname + " " + this.lname}`);
    }
}
function main(){

}

const arr = [1, 2, 3, 4, "utpal"]

// we can set the protoype object
Function.prototype.myobj = myObj
// main.__proto__ = myObj
// console.log(main.__proto__);
console.log(main.__proto__);

