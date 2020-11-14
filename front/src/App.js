import React  from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Tabelas from './components/Tabelas';
import Mapa from './components/Mapa';

function App() {

  return (
    <div className="container">
     <Formulario/>
    <div className="main">  
      <Mapa/>
      <Tabelas/>
    </div>
    </div>
 
  );
}

export default App;
