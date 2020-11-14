import React from 'react';
import './index.css';


function Formulario() { 

  return (

    <div className="sidebar">

      <div className="form"> 
        <input
          className="input-w100"
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome do Cliente"
        />

        <input
          className="input-w100"
          type="text"
          id="nome"
          name="nome"
          placeholder="Pesso da entrega"
        />

        <input
          className="input-w100"
          type="text"
          id="nome"
          name="nome"
          placeholder="Endereço cliente"
        />

        <input
          className="input-w40"
          type="text"
          id="nome"
          name="nome"
          placeholder="Latitude"
        />

        <input
          className="input-w40"
          type="text"
          id="nome"
          name="nome"
          placeholder="Longitude"
        />  

        <button> CADASTRAR CLIENTE </button>
        <button> RESETAR CLIENTE </button>
      </div>

    </div>
  );
}

export default Formulario;