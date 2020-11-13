require('./database')
const express = require('express');
const cors = require ('cors')
const mongoose = require('mongoose');
const requireDir = require ('require-dir');
const DeliveriesControllers = require('./src/controllers/deliveriesController');

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Rotas da nossa API: 
//==============================================================

let router = express.Router();

/* Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão */
router.use(function(req, res, next) {
    console.log('Algo está acontecendo aqui........');
    next();
});

requireDir('./src/models');
app.use('/deliveries', DeliveriesControllers);
app.use('/api', router);


app.listen(process.env.PORT || 8000, function(){
    console.log('Uhuu, servidor no ar :)');
});