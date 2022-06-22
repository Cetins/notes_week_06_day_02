const Person = require('./person.js');
const Pet = require('./pet.js');

const scooby = new Pet('Scooby Doo', 'dog');
scooby.eat('Scooby Snack');

const shaggy = new Person('Shaggy Rogers', scooby);
shaggy.greet();
shaggy.feedPet('Scooby snack');

const velma = new Person('Velma Dinkley');
velma.greet();
