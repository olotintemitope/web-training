let phone = '07033235351';
const a = 2;
const b = 3;

/**
 * Integer
 * Double | Float
 * String
 * Object
 * Array
 */


phone = '0803344444444';
phone = '0903344455433';

const word = " The lazy dog jumps over the fence";
const imgType = "profile.jpg";
const plate1 = 'KJA-775-FF'


console.log(word.trim());

function Person() {

}

const person = new Person();

person.name = 'Pelumi';
person.age = 25;
person.gender = 'Female';

const person1 = {
  name: 'Pelumi',
  age: 25,
  gender: 'Female'
}

const person2 = {
  name: 'Adeayo',
  age: 28,
  gender: 'Male'
}

let people = [person1, person2];
//people.push(person1);
//people.push(person2)

people.forEach(person => {
 //console.table( people, ['name', 'age', 'gender']);
});

for (let i = 0; i < people.length; i++) {
  //console.log(people[i].name, people[i].age, people[i].gender)
}

try {
  console.log(people[2].name);
  console.log(1/0);
} catch (e) {
  console.log(e+"".includes('TypeError:') ? 'Out Of Bound Exception' : e)
}



