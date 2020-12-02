import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const url = 'http://localhost:4000/api/deliveries';

const Form = () => {
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState([]);
  const [position, setPosition] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [codernada, setCodernada] = useState([]);
  const [map, setMap] = useState([]);

  const buscarEnd = () => {
    axios
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address:address,
          key: 'ADICIONAR CHAVE DA API',
        },
      })
      .then((resp) => {
        
       setMap(resp);
       console.log(map);


         // console.log(map.data.results[0].address_components.long_name );
      // console.log(map.data.results[0].address_components);
      // console.log(map.data.results[0].geometry.location.lat);
     // console.log(map.data.results[0].geometry.location.lng);

     setCodernada([map.data.results[0].geometry.location.lat, map.data.results[0].geometry.location.lng])

      })
      .catch((error) => console.log(error));
  };

  ///const onSetAddress = (resp) => {

    //console.log(onSetAddress);

    // const results = resp.data.results[0].address_components;
    // const localizacao = resp.data.results[0].geometry.location;

    //   setUserAddress({
        // logradouro: results[1].long_name,
        // numero: results[0].long_name,
        // complement: results[0].long_name,
        // bairro: results[2].long_name,
        // cidade: results[3].long_name,
        // estado: results[4].long_name,
        // pais: results[5].long_name,
        // latitude: localizacao.lat,
        // longitude: localizacao.lng,
    //   });
 // };


 const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);

  };

  const onSave = (e) => {
    e.preventDefault();
    console.log(map);

    try {
      axios.post(url, {
        nome_do_cliente: user.nome_do_cliente,
        peso_em_kg: user.peso_em_kg,
        logradouro: map.data.results[0].address_components.long_name,
        numero: map.data.results[0].address_components.long_name,
        complement: map.data.results[0].address_components.long_name,
        bairro: map.data.results[0].address_components.long_name,
        cidade: map.data.results[0].address_components.long_name,
        estado: map.data.results[0].address_components.long_name,
        pais: map.data.results[0].address_components.long_name,
        latitude: map.data.results[0].geometry.location.lat,
        longitude: map.data.results[0].geometry.location.lng,
      });


    //   map.data.results[0].address_components.long_name 


    } catch (error) {
      console.log('Erro ao cadastrar novo cliente!' + error);
    }
  };

  return (
    <div className="sidebar">
    
      <form className="form-cinza">

        <div className="form">
            <input
            type="text"
            id="nome_do_cliente"
            name="nome_do_cliente"
            value={user.nome_do_cliente || ''}
            placeholder="Nome do Cliente"
            onChange={onChange}
            />
            <input
            type="text"
            id="peso_em_kg"
            name="peso_em_kg"
            value={user.peso_em_kg || ''}
            placeholder="Peso da Entrega"
            onChange={onChange}
            />

            <input
            type="text"
            value={address || ''}
            placeholder="Endereço do Cliente"
            onChange={(e) => setAddress(e.target.value)}
            />

            <button
            className="form-button__search"
            type="button"
            onClick={buscarEnd}
            >
            BUSCAR
            </button>

            <input
            type="text"
            className="input-w40"
            disabled
            value={codernada[0] ? codernada[0] : 'LATITUDE'}
            />
            <input
            type="text"
            className="input-w40"
            disabled
            value={codernada[1] ? codernada[0] : 'LONGITUDE'}
            />

            <button className="input-w40" onClick={onSave} type="submit">
                CADASTRAR CLIENTE
            </button>

        </div>
      </form>
    </div>
  );
};

export default Form;
