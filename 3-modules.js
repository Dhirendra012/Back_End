// CommonJs , every file is module ( by Default )
// Modules - Encapsulated code ( only share minimum )

const names = require('./4-names');
const sayHi = require('./5-utils');

//const { ram , shyam } = require('./4-names');

const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

console.log(data);
sayHi('Susan');
sayHi(names.ram);
sayHi(names.shyam);