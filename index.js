const Dragon = require('./dragon');

const fooey = new Dragon ( {birthdate: new Date(), nickname: 'fooey'})
const baloo = new Dragon ({birthdate: new Date(), nickname: 'baloo'})

const mimar = new Dragon();
const gooby = new Dragon();

console.log('fooey', fooey);
console.log('baloo', baloo);

console.log('mimar', mimar);
console.log('gooby', gooby);