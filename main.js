// task 1
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);  

// task 2 



let number = [5, 18, 43, 18, 9];

let numbersGreaterThan10 = number.filter(num => num > 10);

console.log(numbersGreaterThan10);  

// task 3

let strings = ['apple', 'banana', 'orange'];


strings.forEach(str => {
    console.log(str.toUpperCase());
});

// task 4


let people = [
    { name: 'nsreen', age: 25 },
    { name: 'farah', age: 29 },
    { name: 'soso', age: 17 }
];


let Name = people.map(person => person.name);

console.log(Name);  


// task 5


let people1 = [
    { name: 'nsreen', age: 25 },
    { name: 'farah', age: 29 },
    { name: 'soso', age: 17 }
];


let age30 = people1.filter(person => person.age === 30);

console.log(age30);

// task 6 


let numbers1 = [1, 2, 3, 4, 5];


let sum = 0;
numbers1.forEach(num => {
    sum += num;
});

console.log(sum); 



// task 7 


let booleans = [true, false, true, true, false];


booleans.forEach((bool, index) => {
    console.log(`Index ${index}: ${bool}`);
});

// task 8


let string = ['hello', 'world', 'javascript', 'openai'];


let reversedStrings = string.map(str => str.split('').reverse().join(''));

console.log(reversedStrings);  

