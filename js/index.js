const numbers = [10, 20];
console.log(typeof(numbers));
//object

// add from end of array
numbers.push(30, 40);
console.log(numbers);
// (4) [10, 20, 30, 40]

// add from start of array
numbers.unshift(50, 60);
console.log(numbers);
// (6) [50, 60, 10, 20, 30, 40]

numbers.splice(1, 0 , "a");
console.log(numbers);
// (7) [50, 'a', 60, 10, 20, 30, 40]

numbers.splice(1, 0 , "a" , "b");
console.log(numbers);
// (8) [50, 'a', 'b' 60, 10, 20, 30, 40]