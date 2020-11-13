const mongoose = require('mongoose');
const DeliveriesSchema = new mongoose.Schema({
  nome: String,
  login: String,
  nome_do_cliente: String,
  peso_em_kg: String,
  logradouro: String,
  numero: Number,
  bairro: String,
  complemento: String,
  cidade: String,
  estado: String,
  pais: String,
  latitude: Number,
  longitude: Number,
});

const Deliveries = mongoose.model('Deliveries', DeliveriesSchema);
module.exports = Deliveries;