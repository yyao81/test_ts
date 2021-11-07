var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// string
var message = 'Hello World!';
console.log(message);
// number
var numvar = 100;
console.log(numvar);
// list
var list1 = [1, 2, 3, 4, 5];
console.log(list1);
var list2 = [2, 3, 4, 5, 6];
console.log(list2);
// boolean
var isDone = false;
console.log(isDone);
if (isDone) {
    console.log('Task done');
}
else {
    console.log('Task not done');
}
// any
var temp = 100;
console.log('origin: ' + temp);
temp = 'testing';
console.log('changed: ' + temp);
// spread operator: array
var originalArr = [1, 2, 3, 4, 5];
var copyArr = __spreadArray([], originalArr, true);
console.log(copyArr);
var mergeArr = __spreadArray(__spreadArray([], originalArr, true), originalArr, true);
console.log(mergeArr);
var addArr = __spreadArray(__spreadArray([], originalArr, true), [7, 8], false);
console.log(addArr);
// spread operator: object
var originalObj = { a: 1, b: 2, c: 3 };
var copyObj = __assign({}, originalObj);
console.log(copyObj);
// inline ternary operator
var isValid = true;
var msg = isValid ? "It is valid." : "It is not valid.";
console.log(msg);
// do...while
var i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);
// for...in
var obj = { a: 1, b: 2, c: 3 };
for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
        console.log(k + ' : ' + obj[k]);
    }
}
// for...of
var ib = [1, 2, 3, 4, 5];
for (var _i = 0, ib_1 = ib; _i < ib_1.length; _i++) {
    var value = ib_1[_i];
    value += 10;
    console.log(value);
}
// function
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
function greet(name) {
    if (name) {
        return 'Hi ' + name;
    }
    else {
        return 'Hi';
    }
}
console.log(greet());
// arrow function
var foo = function (x) { return x * x; };
console.log(foo(5));
// 
var FORM_MODE = {
    LOGIN: 0,
    SENDING_EMAIL: 1,
    SET_NEW_PASSWORD: 2,
    FORCE_UPDATE_PASSWORD: 3
};
console.log(FORM_MODE);
