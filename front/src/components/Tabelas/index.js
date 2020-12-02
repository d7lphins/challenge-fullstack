import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

function Tabelas() { 
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:4000/api/deliveries';
    axios.get(url).then((data) => {
      setDados(data.data);
    });
  }, );

  return (
    <div className="table">
      <table>
        <tr>
          <th>Nome</th>
          <th>Rua</th>
          <th>Cidade</th>
          <th>País</th>
          <th>Peso</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
        {dados &&
            dados.map((item) => (
              <tr>
              <td>{item.nome_do_cliente}</td>
              <td>{item.logradouro}</td>
              <td>{item.cidade}</td>
              <td> {item.pais}</td>
              <td>{item.peso_em_kg}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
            </tr>
        ))}
      </table>
    </div>
  );
}

export default Tabelas;