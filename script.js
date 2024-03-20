"use strict";

// homework-3


//დავალება#1
function sum(...numbers) {   
    let numberSum = 0;
    for (let item of numbers){
        numberSum += item;
    }
    return numberSum;
}

let resultfncSum = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(resultfncSum);


//დავალება#2
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

function userStatus() {
    if (user.isloggedin == true){
        let fullName = `${user.firstname} ${user.lastname}`;
        return(fullName);
    } return false;
}

let returName = userStatus();
console.log(returName);


//დავალება#3
// A
function getMax(...numbers) {
    console.log(Math.max(...numbers));    
}
getMax(8, 15, 25, 150, 4, 17)
// B
function getMaxValue(...elements) {
    let maxValue = 0
    for (let item of elements) {
        if (item > maxValue) {
            maxValue = item;
        }
    }
    return maxValue;
}
let resultMaxValue = getMaxValue(8, 15, 25, 150, 4, 17)
console.log(resultMaxValue);


//დავალება#4
function fnc1(x) {
    if (x % 2 == 0){
        let evenNumber = `this number is even`;
        return evenNumber;
    } else {
        let oddNumber = `this number is odd`;
        return oddNumber;
    }
    
}

let fnc0 = fnc1(7);
console.log(fnc0);


//დავალება#5
let array = [1,2,3,4,5]; 
// A
for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}
// B
array.reverse();
console.log(array); //[ 5, 4, 3, 2, 1 ]

for (let item of array){
    console.log(item);
}

//დავალება#6
// let user1 = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//   }

// function userStatus() {
//     if (user1.age > 18){
//         let userAge = `სრულწლოვანი`;
//         return(userAge);
//     } return "არასრულწლოვანი";
// }

// let returnAge = userStatus();
// console.log(returnAge);

let getUserAge$ = (birthYear) => {
    let age = birthYear;
    let ageResult = age > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
    return ageResult;
}

let resultAge$ = getUserAge$(2012);
console.log(resultAge$);
