const express = require('express');
const GenerationEngine = require ('./generation/engine');
const dragonRouter = require('./api/dragon')

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter)

engine.start();

module.exports = app; //call to app