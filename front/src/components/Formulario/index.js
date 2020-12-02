import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

function Formulario() { 
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));


  const saveGames = () => {
    fetch('http://localhost:3000/game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData, // Use your own property name / key
      }),
    })
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log('error'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    saveGames() // Save games when form is submitted
  }
  

  return (
    <div className="sidebar">
      <div className="form"> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="nome_do_cliente" placeholder="nome_do_cliente" ref={register} />
        <input name="logradouro" placeholder="logradouro" ref={register} />    
        <input name="cidade" placeholder="cidade" ref={register} />
        <input name="pais" placeholder="pais" ref={register} />  
        <input name="peso_em_kg" placeholder="peso_em_kg" ref={register} />
        <input name="lat" placeholder="lat" ref={register} />  
        <input name="lng" placeholder="lng" ref={register} />  
        <input type="submit" />
      </form>

        {/* <button> CADASTRAR CLIENTE </button>
        <button> RESETAR CLIENTE </button> */}
      </div>
    </div>
  );
}

export default Formulario;





 
  // handleSubmit(event){ 
  //  event.preventDefault();
  //  fetch('/', {
  //   method: 'post',
  //   headers: {'Content-Type':'application/json'},
  //   body: {
  //    "first_name": this.firstName.value
  //   }
  //  });
  // };
 