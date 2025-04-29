const Arr1 =[1, 2, 3, 4, 5]
const SuperHeros = ["shaktiman", "naagraj"]

const myArr = new Array(1, 2, 3, 4, 5)

//console.log(Arr1[0])

// Array methds

myArr.push(6)
console.log(myArr)
myArr.pop()
myArr.unshift(9)
myArr.shift()


// join add also and change the datatype to string 

const newArr = myArr.join()


//console.log(myArr);
//console.log(typeof newArr);



//slice vs splice 
// in slice it is just normal getting the elements from the array without changing the array 
// for splice it also takes the defined array and does change the  array too
// for more detail run the example



console.log("A :", myArr)

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B :", myArr)

const myn2 = myArr.splice(1,3);
console.log(myn2)

console.log("C :", myArr)