const name = "Abhi"
const repoCount  = 50 

//console.log(name + repoCount +" value") // not a good way to write not prefered

console.log(`hello my name is ${name} and my repo counts are ${repoCount}.`);

const gameName = new String("Abhiap")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newStringOne = "   abhi      "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://abhi.com/abhishek%20pandey"

console.log(url.replace('%20','-'))

console.log(url.includes(includes("abhi")))
