const score = 400

const balance = new Number (100)
const.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2));  // to check the decimal number after the number


const otherNumber = 23.566

console.log(otherNumber.toPrecision(4));

const hundreds = 100000

console.log(hundreds.toLocaleString('en_IN'));

//#############################MATHS############################

    console.log(Math);   
    console.log(Math.abs(-4))
    //.round(), .ceil(), . floor()
    //.max(), .min()

    console.log(Math.random());   // give always the number btw 0 and 1    
    console.log((Math.random() * 10) + 1 );
    
    const min = 10
    const max = 20 

    console.log(Math.floor(Math.random() * (max - min + 1)) + min) 

