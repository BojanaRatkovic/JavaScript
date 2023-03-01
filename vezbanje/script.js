// https://www.codewars.com/kata/576b93db1129fcf2200001e6
function sumArr(arr) {
    if (arr === null) {
        return 0;
    }
    if (arr.length <= 2) {
        return 0;
    }
const sortedArr = [...arr].sort((a,b) => a-b);
sortedArr.pop();
sortedArr.shift();
let sum = 0;
sortedArr.forEach((item,index) => {
    sum += item;
});
return sum;
}

// httos://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr (n, s) {
    return s.repeat(n);
}

// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
function reverse(str){
    let arr;
    reverse.arr;
    return str;
    str.split('');
    str.join('');
}

//https:www.codewars.com/kata/580a4734d6df748060000045/train/javascript
function isSortedAndHow(array) {
    let order;

    if (arr[o] > arr[1]) {
        order = "yes, descending";
    } else if (arr[0] < arr[1]) {
        order = "yes, ascending";
    }
    for (let i = 1; i <= arr.length - 2; i++) {
        if (arr[i] < arr[i + 1] && order === "yes, ascending") {
        order = "no";
        break;
        }
        if (arr[i] > arr[i + 1] && order === "yes, descending") {
        order = "no";
        break;
        }
    }
    return order;
}

https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
function basicOp(operation, value1, value2) {
    switch(operation) { 
        case '+';
        return value1 + value2;
        case '-':
        return value1 - value2;
        case '*':
        return value1 * value2;
        case '/':
        return value1 / value2;
    }
}

https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!";
    } else if ( 
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "paper" && p2 === "rock") ||
        (p1 === "scissors" && p2 === "paper") 
        ) {
        return "Player 1 won!";
        } else {
        return "Player 2 won!";
    }
}
