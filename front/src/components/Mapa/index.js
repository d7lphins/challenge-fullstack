import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import Polygon from '../polygon';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Mapa() { 
  const [map, setMap] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:4000/api/deliveries';
    axios.get(url).then((data) => {
      setMap(data.data);
    });
  }, );
  const position = [51.505, -0.09]
  return (
    <div className="mapa">
      <MapContainer className="container-mapa" center={position} zoom={10}  scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> 
       <Marker icon={Polygon} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      </MapContainer>
    </div>
  );
}

export default Mapa;