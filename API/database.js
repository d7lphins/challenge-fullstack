const mongoose = require('mongoose');

//iniciando o banco de dados
mongoose.connect(URL_DATABASE_MONGO_ATLAS,
{ useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (!err) {
            console.log('Uhuu... Banco connectato');
        } else {
            console.log('Ops... error no banco' + JSON.stringify(err));
        }
    }
);