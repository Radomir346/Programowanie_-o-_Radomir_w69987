function helloWorld() {
    alert("Hello World!");
}

var a = 10;
var b = 20;
var c = 23.2;

document.getElementById("result1").innerHTML = "Result: " + (a + b);
document.getElementById("result2").innerHTML = "Result: " + (a - b);
document.getElementById("result3").innerHTML = "Result: " + (a * b);
document.getElementById("result4").innerHTML = "Result: " + (a / b);

function calculateArea() {
    var a = parseFloat(document.getElementById("sideA").value);
    var b = parseFloat(document.getElementById("sideB").value);
    var c = parseFloat(document.getElementById("sideC").value);
    var result = calculateArea(a, b, c);
    document.getElementById("result5").innerHTML = "Result: " + result;
}

function calculateArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

function greet() {
    var name = document.getElementById("name").value;
    alert("Hello, " + name + "! ");
}

function calculateSum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result6").innerHTML = "Result: " + result;
}

function calculateLargest() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    if (num1 >= num2 && num1 >= num3) {
        alert("The largest number is: " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        alert("The largest number is: " + num2);
    } else {
        alert("The largest number is: " + num3);
    }
}