import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/leaflet/dist/leaflet.css';  //alternativa para importação css do leaflet 
//import '../src/asset/leaflet.css' //tem que importar todas imagens para usar assim

///AIzaSyBsS214aj3zP0d7OIEqMjMLWtH7v5Z_UDc ---api
//https://developers.google.com/maps/documentation/geocoding/get-api-key?hl=pt-br
//https://developers.google.com/maps/documentation/geocoding/overview?hl=pt-br#ReverseGeocoding



import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);