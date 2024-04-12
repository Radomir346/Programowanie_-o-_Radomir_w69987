function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
function silnia(number)
{if(number<=0){return 0;}
if(number==1){return number;}
return number*silnia(number-1);
}

for(let i=10;i>0;i--)
{
//console.log(i);
//pausecomp(1000);
}
//console.log("happy new year");
let lb=parseInt(prompt("Silniê jakiej liczbyy policzyæ: "))
if (!isNaN(lb)) {
    console.log(silnia(lb));
} else {
    console.log("To nie jest liczba.");
}
//zad 3
lb=prompt("Podaj wiek: ");
if(lb<18){window.open("http://www.google.com/")}
else
{
    window.open("https://www.w3schools.com");
}
//zad 4
const buttons = document.querySelectorAll('.button');
function resetButtons() {
buttons.forEach(button => {
button.style.backgroundColor = '';
    });
}
function handleClick(event) {
const clickedButton = event.target;
resetButtons();
clickedButton.style.backgroundColor = 'lightblue';
}
buttons.forEach(button => {
button.addEventListener('click', handleClick);
});
//zad 5
const toggleButton = document.getElementById('toggleButton');

function handleToggleButtonClick() {
    elementToToggle.classList.toggle('hidden');
}

toggleButton.addEventListener('click', handleToggleButtonClick);
//zad 6
const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');

function addItemToList() {
    const inputValue = textInput.value;
    if (inputValue.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        list.appendChild(listItem);
        textInput.value = '';
    } else {
        alert('Pole tekstowe nie mo¿e byæ puste!');
    }
}

addButton.addEventListener('click', addItemToList);
//zad 7
const lastNameInput = document.getElementById('lastNameInput');
const tableBody = document.getElementById('tableBody');

function addItemToTable() {
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();

    if (firstNameValue !== '' && lastNameValue !== '') {
        const newRow = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const lastNameCell = document.createElement('td');

        firstNameCell.textContent = firstNameValue;
        lastNameCell.textContent = lastNameValue;

        newRow.appendChild(firstNameCell);
        newRow.appendChild(lastNameCell);

        tableBody.appendChild(newRow);

        firstNameInput.value = '';
        lastNameInput.value = '';
    } else {
        alert('Wype³nij oba pola!');
    }
}
addButton.addEventListener('click', addItemToTable);
//zad 8
const temperatureInput = document.getElementById('temperatureInput');
const unitSelect = document.getElementById('unitSelect');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let result;

    if (unit === 'Celsius') {
        result = (temperature * 9 / 5) + 32;
        resultDiv.textContent = `${temperature} stopni Celsjusza to ${result} stopni Fahrenheit.`;
    } else if (unit === 'Fahrenheit') {
        result = (temperature - 32) * 5 / 9;
        resultDiv.textContent = `${temperature} stopni Fahrenheit to ${result} stopni Celsjusza.`;
    }
}

convertButton.addEventListener('click', convertTemperature);
//zad 9
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const calculateButton = document.getElementById('calculateButton');
const resultParagraph = document.getElementById('result');

function calculateGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

calculateButton.addEventListener('click', function () {
    const number1 = parseInt(number1Input.value);
    const number2 = parseInt(number2Input.value);

    if (!isNaN(number1) && !isNaN(number2)) {
        const gcd = calculateGCD(Math.abs(number1), Math.abs(number2));
        resultParagraph.textContent = `Najwiêkszy wspólny dzielnik liczb ${number1} i ${number2} wynosi ${gcd}.`;
    } else {
        resultParagraph.textContent = 'Proszê wprowadziæ obie liczby ca³kowite.';
    }
});
