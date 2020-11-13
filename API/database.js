const mongoose = require('mongoose');

//iniciando o DB
mongoose.connect('mongodb+srv://new-user-010203:fHJMvOLv1KWTQ0o9@cluster0.dsvv9.mongodb.net/deliveries?retryWrites=true&w=majority',
{ useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (!err) {
            console.log('Uhuu... Banco connectato');
        } else {
            console.log('Ops... error no banco' + JSON.stringify(err));
        }
    }
);
