let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

let createDate = new Date(2023, 0, 23)
console.log(createDate.toDateString())

let myTimestamp = Date.now()
console.log(myTimestamp)  // this will give u the data in milliseconds
console.log(createDate.getTime())

console.log(Math.floor(Date.now() / 1000)) //for time in seconds


