// const Dragon = require('./dragon');

// const fooey = new Dragon();
// const baloo = new Dragon();
// const mimar = new Dragon();

// setTimeout(() => {
//     const gooby = new Dragon();
//     console.log('gooby', gooby);
// }, 3000);



// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimar', mimar);

// const Generation = require ('./generation');

// const generation = new Generation();

// console.log('generation', generation);

// const gooby = generation.newDragon();

// console.log('gooby', gooby)

// setTimeout(() => {
//     const mimar = generation.newDragon();
//     console.log('mimar', mimar);
// }, 15000)

const GenerationEngine = require ('./engine');

const engine = new GenerationEngine();

engine.start();

setTimeout(() => {
    engine.stop();
}, 20000);