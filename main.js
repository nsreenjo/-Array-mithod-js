// task 1
// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);  

// task 2 



// let number = [5, 18, 43, 18, 9];

// let numbersGreaterThan10 = number.filter(num => num > 10);

// console.log(numbersGreaterThan10);  

// task 3

// let strings = ['apple', 'banana', 'orange'];


// strings.forEach(str => {
//     console.log(str.toUpperCase());
// });

// task 4


// let people = [
//     { name: 'nsreen', age: 25 },
//     { name: 'farah', age: 29 },
//     { name: 'soso', age: 17 }
// ];


// let Name = people.map(person => person.name);

// console.log(Name);  


// task 5


// let people1 = [
//     { name: 'nsreen', age: 25 },
//     { name: 'farah', age: 29 },
//     { name: 'soso', age: 17 }
// ];


// let age30 = people1.filter(person => person.age === 30);

// console.log(age30);

// task 6 


// let numbers1 = [1, 2, 3, 4, 5];


// let sum = 0;
// numbers1.forEach(num => {
//     sum += num;
// });

// console.log(sum); 



// task 7 


// let booleans = [true, false, true, true, false];


// booleans.forEach((bool, index) => {
//     console.log(`Index ${bool}: ${index}`);
// });

// task 8


// let string = ['hello', 'world', 'javascript', 'openai'];


// let reversedStrings = string.map(str => str.split('').reverse().join(''));

// console.log(reversedStrings);  

// task 9 



let numbers5 = [1, 2, 3, 4, 5];

numbers5.forEach(mult => {
    let a = mult * 2; 
    console.log(a);

});

////////////////////////////////////////////////////////
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    let multiplied = number * 2;
    console.log(multiplied);
});


// task 10

let numbers7 = [1, 2, 3, 4, 5];

let w = numbers7.map((q,index) =>{
 
return q+index
})
console.log(w);
//////////////////////////////////////////

let number8 = [1, 2, 3, 4, 5];

let incrementedArray = numbers.map((number, index) => {
    return number8 + index;
});

console.log(incrementedArray);
//////////////////////////////////////////


//  task 11

// let number5 = [1, 10, 3, 7, 5];
// let s = number5.filter(m=>{
//       return m>5
// })
// console.log(s);

// task 12

let strings = ["apple", "banana", "orange", ];

strings.forEach(a => {
    console.log(a.length);
});

// task 13 

let array = ["apple", "banana", "cherry", "date"];

let capital = array.map(a => {
    return a.toUpperCase();
});
console.log(capital);

/////////////////////////////////////////

// task 14

// let numbers1 = [10, 15, 8, 20, 12];

// let sum = numbers1.reduce((acc, num) => acc + num, 0);
// let average = sum / numbers1.length;

// let greaterThanAverage = numbers1.filter(num => num > average);

// console.log(greaterThanAverage);

// task 15 

let strings4 = ["apple", "banana", "cherry", "date", "apricot"];

let count = 0;

strings4.forEach(str => {
    if (str.indexOf('a') !== -1) {
        count++;
    }
});

console.log(count);

// task 16

let num = [10, 15, 8, 20, 12];

let y = num.map(num => num % 3);

console.log(y);

// task 17

// function Message(callback) {
//     callback("hiiii");
// }

// function printToConsole(message) {
//     console.log(message);
// }
// Message(printToConsole);

// task 18

let numbers4 = [1, 2, 3, 4, 5];

let u = numbers.map((number, index) => {
    return number + index;
});

console.log(u);



