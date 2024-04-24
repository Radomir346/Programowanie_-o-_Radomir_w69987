//zad 1
let book = {
    author: "Chór zapomnianych g³osów",
    title: "Remigiusz mróz",
    year: 2014
};
function bookInfo(book) {
    return `${book.title} - ${book.author} (${book.year})`;
}
console.log(bookInfo(book));
//zad 2
let student = {
    firstName: "Jan",
    lastName: "Kowalski",
    albumNumber: "12345",
    grades: {
        math: 3,
        physics: 4,
        chemistry: 5
    }
};
function calculateAverage(student) {
    let sum = 0;
    for (let subject in student.grades) {
        sum += student.grades[subject];
    }
    return sum / Object.keys(student.grades).length;
}
console.log("Œrednia ocen studenta:", calculateAverage(student));
//zad3
class Triangle {
    constructor(height, baseLength, name) {
        this.height = height;
        this.baseLength = baseLength;
        this.name = name;
    }
    calculateArea() {
        return 0.5 * this.baseLength * this.height;
    }
    static compareTriangles(triangle1, triangle2) {
        if (triangle1.calculateArea() > triangle2.calculateArea()) {
            return triangle1;
        } else {
            return triangle2;
        }
    }
}
let triangle1 = new Triangle(5, 6, "Triangle 1");
let triangle2 = new Triangle(4, 8, "Triangle 2");
let triangle3 = new Triangle(3, 10, "Triangle 3");
console.log("Pole trójk¹ta 1:", triangle1.calculateArea());
console.log("Trójk¹t z wiêkszym polem:", Triangle.compareTriangles(triangle1, triangle2).name);
//zad4
class Trapez
{
    constructor(height, base1, base2, name) {
        this.height = height;
        this.base1 = base1;
        this.base2 = base2;
        this.name = name;
    }
    calculateArea() {
        return 0.5 * (this.base1 + this.base2) * this.height;
    }
    changeName(newName) {
        this.name = newName;
    }
}
let trapezoid1 = new Trapez(5, 6, 8, "Trapezoid 1");
let trapezoid2 = new Trapez(4, 7, 9, "Trapezoid 2");
let trapezoid3 = new Trapez(3, 8, 10, "Trapezoid 3");
console.log("Pole trapezu 1:", trapezoid1.calculateArea());
trapezoid1.changeName("New Trapezoid 1");
console.log("Nowa nazwa trapezu:", trapezoid1.name);
//zad5
function compareShapes(triangle, trapezoid) {
    if (triangle.calculateArea() > trapezoid.calculateArea()) {
        console.log("Wiêksza figura:", triangle.name);
    } else {
        console.log("Wiêksza figura:", trapezoid.name);
    }
}
compareShapes(triangle1, trapezoid1);
//zad6
let rectangle = {
    width: 0,
    height: 0,
    setDimensions: function (width, height) {
        this.width = width;
        this.height = height;
    },
    calculateArea: function () {
        return this.width * this.height;
    },
    calculatePerimeter: function () {
        return 2 * (this.width + this.height);
    },
    isSquare: function () {
        return this.width === this.height;
    }
};
let widthInput = document.getElementById("width");
let heightInput = document.getElementById("height");
let resultElement = document.getElementById("result");
function createRectangle() {
    let width = parseFloat(widthInput.value);
    let height = parseFloat(heightInput.value);
    rectangle.setDimensions(width, height);
    resultElement.textContent = `Pole: ${rectangle.calculateArea()}, Obwód: ${rectangle.calculatePerimeter()}, Czy kwadrat: ${rectangle.isSquare()}`;
}
//zad7
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    maxSpeed: 180,
    currentSpeed: 0,
    accelerate: function (value) {
        this.currentSpeed += value;
        if (this.currentSpeed > this.maxSpeed) {
            this.currentSpeed = this.maxSpeed;
        }
    },
    decelerate: function (value) {
        this.currentSpeed -= value;
        if (this.currentSpeed < 0) {
            this.currentSpeed = 0;
        }
    },
    getCarInfo: function () {
        return `${this.brand} ${this.model} (${this.year}), Kolor: ${this.color}, Prêdkoœæ: ${this.currentSpeed}`;
    },
    getAge: function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
};
car.accelerate(50);
car.decelerate(20);
console.log(car.getCarInfo());
console.log("Wiek samochodu:", car.getAge());
//zad8
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Brak wystarczaj¹cych œrodków na koncie.");
        }
    }

    getBalance() {
        return this.balance;
    }
}
let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log("Stan konta:", account.getBalance());
//zad9
class Pracownik {
    constructor(imie, nazwisko, pensja) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.pensja = pensja;
    }
}
class ZarzadzaniePracownikami {
    constructor() {
        this.listaPracownikow = [];
    }

    dodajPracownika(pracownik) {
        this.listaPracownikow.push(pracownik);
    }

    usunPracownika(imie, nazwisko) {
        this.listaPracownikow = this.listaPracownikow.filter(pracownik => !(pracownik.imie === imie && pracownik.nazwisko === nazwisko));
    }

    pobierzPracownika(imie, nazwisko) {
        return this.listaPracownikow.find(pracownik => pracownik.imie === imie && pracownik.nazwisko === nazwisko);
    }

    zapiszDoJSON() {
        let jsonData = JSON.stringify(this.listaPracownikow);
    }

    wczytajZJSON(jsonData) {
        this.listaPracownikow = JSON.parse(jsonData);
    }
}
let zarzadzaniePracownikami = new ZarzadzaniePracownikami();
let pracownik1 = new Pracownik("Jan", "Kowalski", 3000);
let pracownik2 = new Pracownik("Anna", "Nowak", 3500);
zarzadzaniePracownikami.dodajPracownika(pracownik1);
zarzadzaniePracownikami.dodajPracownika(pracownik2);
zarzadzaniePracownikami.usunPracownika("Jan", "Kowalski");
console.log(zarzadzaniePracownikami.listaPracownikow);
//zad10
class Produkt {
    constructor(nazwa, cena, dostepneSztuki) {
        this.nazwa = nazwa;
        this.cena = cena;
        this.dostepneSztuki = dostepneSztuki;
    }
}

class ZarzadzanieProduktami {
    constructor() {
        this.listaProduktow = [];
    }

    dodajProdukt(produkt) {
        this.listaProduktow.push(produkt);
    }

    usunProdukt(nazwa) {
        this.listaProduktow = this.listaProduktow.filter(produkt => produkt.nazwa !== nazwa);
    }

    zmienCene(nazwa, nowaCena) {
        let produkt = this.listaProduktow.find(produkt => produkt.nazwa === nazwa);
        if (produkt) {
            produkt.cena = nowaCena;
        } else {
            console.log("Produkt o podanej nazwie nie zosta³ znaleziony.");
        }
    }

    zapiszDoJSON() {
        let jsonData = JSON.stringify(this.listaProduktow);
    }

    wczytajZJSON(jsonData) {
        this.listaProduktow = JSON.parse(jsonData);
    }
}
let zarzadzanieProduktami = new ZarzadzanieProduktami();
let produkt1 = new Produkt("Laptop", 2500, 10);
let produkt2 = new Produkt("Smartfon", 1500, 20);
zarzadzanieProduktami.dodajProdukt(produkt1);
zarzadzanieProduktami.dodajProdukt(produkt2);
zarzadzanieProduktami.usunProdukt("Smartfon");
console.log(zarzadzanieProduktami.listaProduktow);