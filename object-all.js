
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


function createPerson1(name, age, location) {
  return {
    name,
    age,
    location,
    lng:'Eng',
    dateOfBirth(){
      console.log(this.name + ' is born in ' + (2018 - this.age) + ' in ' + this.location + this.lng);
    }
}
}

let newperson = createPerson1('BossSajjad', 27, 'Dhaka');

console.log(newperson.dateOfBirth())


function createPerson2(name, age, location) {
  return {
    name,
    age,
    location,
    lng:'Eng',
    dateOfBirth(){
      console.log(this.name + ' is born in ' + (2018 - this.age) + ' in ' + this.location + this.lng);
    }
}
}

let newperson2 = createPerson2('Sharif', 40, 'Bd');

console.log(newperson2.dateOfBirth())