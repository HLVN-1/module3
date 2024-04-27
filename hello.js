import { color, log, red, green } from 'console-log-colors';

console.log(color.red("why am I here?! because you deserve to be!"));
console.log(color.green("you WILL succeed at this and find a new job!"))

const numbers = [1, 2, 3, 4, 5];

// function addOne(array){
//     for (let i = 0; i < array.length; i++){
//         console.log(color.red(array[i] + 1));
//     }
// }

// addOne(numbers);

// these two are equal

numbers.forEach(function(num){
    console.log(color.green(num + 1));
});

numbers.forEach((num) => {console.log(color.red(num + 1))});


// Map Reduce Filter = the holy trinity of Higher Order Functions

// Filter

// function isOdd(array, oddArr = []) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             oddArr.push(array[i]);
//         }
//     }
//     return oddArr;
// }

// const oddArray = isOdd(numbers);
// console.log(oddArray);

// ----------------------

const easyOddArray = numbers.filter((num) => num % 2 !== 0 );
console.log(easyOddArray);

// MAP EXAMPLE
function addOneMore(array, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] + 1);
    }
    return newArr;
}

const NewArray = addOneMore(numbers);
console.log(NewArray);

const newNewArray = numbers.map((num) => num + 1);
console.log(newNewArray);

// ------------------------

// REDUCE EXAMPLE

const total = numbers.reduce((sum, num) => sum + num + 1);
console.log(total);

// testing new laptop to make sure connection is still good