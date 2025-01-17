// EXPLICIT TYPES
let character: string;
let age:number;
let isLoggedIn: boolean;

//age = 'mario';
age = 20;

//isLoggedIn = 25;
isLoggedIn = true;

// ARRAYS
let ninjas: string[] = [];

ninjas.push('yoshi');

// UNION TYPES
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(10);
mixed.push(true);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

// OBJECTS
let ninjaOne: object;
ninjaOne = {
    name:'mario',
    age: 20,
}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string,
}

ninjaTwo = {
    name: 'mario',
    age: 10,
    beltColor: 'green'
}