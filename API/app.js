//responsavel pela arquitetura de rotas
const express = require('express');
const cors = require ('cors')


//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());


//validado está ok
app.get("/",  (req, res) => {
    return res.send('site no ar');
});



app.listen(process.env.PORT || 3000, function(){
    console.log('Uhuu, servidor no ar :)');
});