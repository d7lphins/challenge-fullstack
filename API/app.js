require('./database')
const express = require('express');
const cors = require ('cors')
const requireDir = require ('require-dir');
const bodyParser  = require('body-parser');  
const DeliveriesControllers = require('./src/controllers/deliveriesController');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

requireDir('./src/models');
app.use('/api',  DeliveriesControllers);


app.listen(process.env.PORT || 4000, function(){
    console.log('Uhuu, servidor no ar :)');
});