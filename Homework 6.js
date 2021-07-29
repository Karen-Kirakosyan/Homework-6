//N1
class Rectangle {
  constructor(length, width) {
  	this.length = length;
    this.width = width;
  }

  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
  }
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }

  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
  toString() {
    return JSON.stringify(this)
  }
}

let rect = new Rectangle(5, 3);

console.log(rect.getPerimeter());
console.log(rect.getArea());
console.log(rect.toString());


//N2
class Employee {
  constructor(obj = {}) {
    [this.id, this.firstName, this.lastName, this.position, this.salary, this.workingHours] = [obj.id, obj.firstName, obj.lastName, obj.position, obj.salary, obj.workingHours]
  }

  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
  }
  get salary() {
    return this._salary;
  }
  set salary(value) {
    this._salary = value;
  }
  get workingHours() {
    return this._workingHours;
  }
  set workingHours(value) {
    this._workingHours = value;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  getAnnularSalary() {
    return this.salary * 12;
  }
  raiseSalary(percent) {
  	this.salary = this.salary + this.salary * percent / 100;
    return this.salary;
  }
}

let user = {
  id: 1,
  firstName: "John",
  lastName: "Miller",
  position: "developer",
  salary: 300,
  workingHours: 8
}
let employee1 = new Employee(user);

console.log(employee1.getFullName());
console.log(employee1.getAnnularSalary());
console.log(employee1.raiseSalary(50));

//N3
class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this._gender = gender;
  }

  get gender() {
    return this._gender;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }

  toString() {
    return JSON.stringify(this);
  }
}


class Book {
  constructor(title, author, price, quantity) {
    [this.title, this.author, this.price, this.quantity] = [title, author, price, quantity];
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get author() {
    return this._author;
  }
  set author(value) {
    if (value instanceof Author) {
      this._author = value;
      return;
    }
    alert("Incorrect author!");
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    this._quantity = value;
  }

  getProfit() {
    return this.price * this.quantity;
  }
  toString() {
    return JSON.stringify(this);
  }
}

let book = new Book("title", new Author("John", "john123213@gmail.com", "male"), 125, 13)

console.log(book.getProfit());


//N4
class Account {
  constructor(id, name, balance) {
    this._id = id;
    this.name = name;
    this.balance = balance;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get balance() {
    return this._balance;
  }
  set balance(value) {
    this._balance = value;
  }

  credit(amount) {
    this.balance += amount;
    return this.balance;
  }
  debit(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return this.balance;
    }
  }
  transferTo(anotherAccount, amount) {
    if (this.balance < amount) {
      console.log("Amount exceeded balance.");
      return;
    }
    this.debit(amount);
    anotherAccount.credit(amount);
  }
  toString() {
    return JSON.stringify(this);
  }
  identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance) {
      return true;
    } else {
      return false;
    }
  }
}

let acc1 = new Account(1, "John", 1400);
let acc2 = new Account(2, "Ben", 1800);

acc1.transferTo(acc2, 200);
console.log(acc1.identifyAccounts(acc1, acc2));
console.log(acc1.balance);
console.log(acc2.balance);

//N5
