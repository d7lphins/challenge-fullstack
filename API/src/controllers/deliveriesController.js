const express = require('express');
let router = express.Router();
let Deliveries = require('../models/deliverie');
router.route('/deliveries')

  /* 1) Método: Criar Usuario (acessar em: POST http://localhost:4000/api/deliveries/) */
  .post(function(req, res) {
      let deliveries = new Deliveries();

      deliveries.nome_do_cliente = req.body.nome_do_cliente;
      deliveries.peso_em_kg = req.body.peso_em_kg;
      deliveries.logradouro = req.body.logradouro;
      deliveries.numero = req.body.numero;
      deliveries.bairro = req.body.bairro;
      deliveries.complemento = req.body.complemento;
      deliveries.cidade = req.body.cidade;
      deliveries.estado = req.body.estado;
      deliveries.pais = req.body.pais;
      deliveries.latitude = req.body.latitude;
      deliveries.longitude = req.body.longitude;

      deliveries.save(function(error) {
          if(error)
              res.send(error);                      
          res.json({ message: 'cadastro criado!' });
      });
  })

  /* 2) Método: Selecionar Todos (acessar em: GET http://localhost:4000/api/deliveries/) */
  .get(function(req, res) {
      Deliveries.find(function(err, deliveries) {
          if(err)
              res.send(err);
          res.json(deliveries);
      });
  });

router.route('/deliveries/:deliveries_id')

  /* 3) Método: Selecionar Por Id (acessar em: GET http://localhost:4000/api/deliveries/id) */
  .get(function(req, res) {

      Deliveries.findById(req.params.deliveries_id, function(error, deliveries) {
          if(error) 
              res.send(error);
          res.json(deliveries);
      });
  })

  /* 4) Método: Excluir (acessar em: http://localhost:4000/api/deliveries/id) */
  .delete(function(req, res) {
      Deliveries.remove({
      _id: req.params.deliveries_id
      }, function(error) {
          if(error)
              res.send(error);
          res.json({ message: 'Usuário excluído com Sucesso! '});
      });
  });

module.exports = router;