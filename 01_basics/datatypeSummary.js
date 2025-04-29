//primitive,  

// 7 types: string,number,boolean, null, undefined, symbol
// bigInt

const ID = Symbol("123")
const anotherId = Symbol("123")

console.log(ID === anotherId )


//reference (non primitive)

//Array, objects, functions

const heros = ["shaktiman","naagraj","doga"]
let myObj= {
    name: "abhishek",
    age: 24,

}

const myFunction = function(){
    console.log("Hello WOrld!");
}

// to find the datatype of any 
//null have a typeof object
console.log("")