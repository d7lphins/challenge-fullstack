import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

function Formulario() { 
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="sidebar">
      <div className="form"> 
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="nome_do_cliente" placeholder="nome_do_cliente" ref={register} />
          <input name="logradouro" placeholder="logradouro" ref={register} />    
          <input name="cidade" placeholder="cidade" ref={register} />
          <input name="pais" placeholder="pais" ref={register} />  
          <input name="peso_em_kg" placeholder="peso_em_kg" ref={register} />
          <input name="latitude" placeholder="lat" ref={register} />  
          <input name="lng" placeholder="lng" ref={register} />  
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Formulario;