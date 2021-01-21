function isNumber(x) {
  if (x === 0 || (x && typeof x === "number")) {
    // here is your code
    return true;
  }
  return false;
}


if (isNumber(5)) {
  console.log("Hello")
}




person1 = {
  name: 'Name1',
  age: 'Age1',
  dateOfBirth: function () {
    console.log(this.name + ' is born in ' + (2018 - this.age));
  }

}

var Person2 = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.dateOfBirth = function () {
    console.log(this.name + ' is born in ' + (2018 - this.age));
  }
}

class Person3 {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
  }
  dateOfBirth() {
    console.log(`${this.name} is born in ${2018 - this.age}`);
  }
}


function createPerson1(name, age) {
  return {
    name,
    age,
    dateOfBirth: function () {
      console.log(this.name + ' is born in ' + (2018 - this.age));
    }
}
}

let newperson = createPerson1('BossSajjad', 27);

console.log(newperson.dateOfBirth())

