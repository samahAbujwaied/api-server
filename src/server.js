'use strict';

const express = require('express');
const notFoundHandler = require('./errorHandlers/404');
const errorHandler = require('./errorHandlers/500');
const logger = require('./middlewares/logger');
const peopleRoutes = require('./routes/food');
const customerRoutes = require('./routes/customer');
const colthes = require('./routes/clothes')
const app = express();

app.use(express.json()); 

app.use(logger);
app.use(peopleRoutes);
app.use(customerRoutes);
app.use(colthes);

function start(port) {
    app.listen(port, ()=> console.log(`Will run on port ${port}`))
}
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start,
    
}