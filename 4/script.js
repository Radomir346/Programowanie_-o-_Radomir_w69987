var arr = [10, 20, 30, 40, 50];
var numbers = [];

function createTable() {
    var numbers = document.getElementById("numbers").value.split(",");
    var table = [];
    for (var i = 0; i < numbers.length; i++) {
        table.push(parseInt(numbers[i]));
    }
    document.getElementById("result").innerHTML = "Table: " + table.join(", ");
    var numToSearch = parseInt(prompt("Enter a number to search:"));
    var count = 0;
    for (var i = 0; i < table.length; i++) {
        if (table[i] === numToSearch) {
            count++;
        }
    }
    alert("Number found " + count + " times.");
}

function changeIndex() {
    var index = parseInt(document.getElementById("index").value);
    var number = parseInt(document.getElementById("number").value);
    arr.splice(index, 0, number);
    for (var i = index + 1; i < arr.length; i++) {
        arr[i] = arr[i - 1];
    }
    alert(arr);
}

function reverseString() {
    var string = document.getElementById("string").value;
    var reversedString = string.split("").reverse().join("");
    document.getElementById("result3").innerHTML = "Reversed String: " + reversedString;
}

function generateRandomNumbers() {
    var numbers = [];
    for (var i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * (100 - 1)) + 1);
    }
    document.getElementById("result4").innerHTML = "Random Numbers: " + numbers.join(", ");
}

function performOperations() {
    // a. zsumuj wartoœci
    var sum = arr.reduce(function (a, b) { return a + b; }, 0);
    console.log("Sum: " + sum);

    // b. znajdŸ liczby parzyste
    var evenNumbers = arr.filter(function (x) { return x % 2 === 0; });
    console.log("Even Numbers: " + evenNumbers.join(", "));

    // c. pomnó¿ wartoœci razy
    arr.forEach(function (x) { x *= num1; });
    console.log("Array multiplied by " + num1 + ": " + arr.join(", "));

    // d. dodaj do tablicy swój numer albumu
    arr.push(num1);
    console.log("Array with new number: " + arr.join(", "));
    // e. oblicz œredni¹ arytmetyczna
    var average = arr.reduce(function (a, b) { return a + b; }, 0) / arr.length;
    console.log("Average: " + average);

    // f. znajdŸ najwiêksz¹ liczbê
    var maxNum = Math.max.apply(null, arr);
    console.log("Max Number: " + maxNum);

    // g. zlicz iloœæ wyst¹pieñ wybranej wartoœci
    var count = arr.filter(function (x) { return x === num1; }).length;
    console.log("Count of " + num1 + ": " + count);
}

function generateFibonacci() {
    var n = parseInt(document.getElementById("n").value);
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById("result6").innerHTML = ("Fibonacci sequence up to " + n + ":" + fib.join(", "));
}

function findMaxSum() {
    var maxSum = 0;
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            var sum = numbers[i] + numbers[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    document.getElementById("result7").innerHTML = ("Max Sum:" + maxSum);
}

function removeDuplicates() {
    var uniqueNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (uniqueNumbers.indexOf(numbers[i]) === -1) {
            uniqueNumbers.push(numbers[i]);
        }
    }
    document.getElementById("result8").innerHTML = ("Unique Numbers:" + uniqueNumbers.join(", "));
}