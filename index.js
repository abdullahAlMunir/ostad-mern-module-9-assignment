// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

// solution

function calculateDifference(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

const result = calculateDifference(20, 14);
console.log("Difference between the numbers is: " + result);

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

// solution

function isOdd(number) {
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isOdd(15));
console.log(isOdd(20));

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

// solution

function findMin(numbers) {
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }        
    }
    return min;
}

const numbers = [5, 7, 6, 2, 8, 3];

console.log(findMin(numbers));

//  4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

// solution

function filterEvenNumbers(numbers) {
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
         evenNumbers.push(numbers[i]);   
        }        
    }

    return evenNumbers;
  }
  
  const numbers = [12, 15, 23, 45, 56, 85, 74];
  console.log(filterEvenNumbers(numbers));
  

//  5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

// solution

function sortArrayDescending(numbers) {
    let slice = numbers.slice();
    
    let sort = slice.sort(function (a, b) {
        return b - a;
    });

    return sort;

}

const numbers = [12, 45, 65, 59, 52, 99, 86];
console.log(sortArrayDescending(numbers));

// 6)  Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

// solution

function lowercaseFirstLetter(text) {
    if (text.length === 0) {
        return text;
    }

    let convert = text.charAt(0).toLowerCase();
    
    return convert + text.slice(1);

}

console.log(lowercaseFirstLetter("My"));
console.log(lowercaseFirstLetter("NAME"));
console.log(lowercaseFirstLetter("is"));

// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

// solution


function findAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return sum / numbers.length;

}

const numbers = [10, 20, 6, 51];
console.log(findAverage(numbers));


//  8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

//  solution

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 ===0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

console.log(isLeapYear(2018));
console.log(isLeapYear(2020));
