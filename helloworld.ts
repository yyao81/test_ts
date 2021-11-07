
// string
const message: string = 'Hello World!';
console.log(message);


// number
let numvar: number = 100;
console.log(numvar);


// list
let list1: number[] = [1, 2, 3, 4, 5];
console.log(list1);

let list2: Array<number> = [2, 3, 4, 5, 6];
console.log(list2);


// boolean
let isDone: boolean = false;
console.log(isDone);

if (isDone) {
    console.log('Task done');
} else {
    console.log('Task not done');
}


// any
let temp: any = 100;
console.log('origin: ' + temp);

temp = 'testing';
console.log('changed: ' + temp);


// spread operator: array
let originalArr: number[] = [1, 2, 3, 4, 5];
let copyArr = [...originalArr];
console.log(copyArr);

let mergeArr = [...originalArr, ...originalArr];
console.log(mergeArr);

let addArr = [...originalArr, 7, 8];
console.log(addArr);


// spread operator: object
let originalObj = { a: 1, b: 2, c: 3 };
let copyObj = { ...originalObj };
console.log(copyObj);


// inline ternary operator
let isValid: boolean = true;
let msg = isValid ? "It is valid." : "It is not valid.";
console.log(msg);


// do...while
let i: number = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);


// for...in
let obj: any = { a: 1, b: 2, c: 3 };
for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
        console.log(k + ' : ' + obj[k]);
    }
}


// for...of
let ib: number[] = [1, 2, 3, 4, 5];

for (let value of ib) {
    value += 10;
    console.log(value);
}


// function
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1, 2));


function greet(name?: string): string {
    if (name) {
        return 'Hi ' + name;
    } else {
        return 'Hi';
    }
}
console.log(greet());


// arrow function
var foo = (x: number) => x * x;
console.log(foo(5));



// 
const FORM_MODE = {
    LOGIN: 0,
    SENDING_EMAIL: 1,
    SET_NEW_PASSWORD: 2,
    FORCE_UPDATE_PASSWORD: 3
};
console.log(FORM_MODE);