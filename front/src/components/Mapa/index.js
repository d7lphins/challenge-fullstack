import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

function Mapa() { 
  const [map, setMap] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:4000/api/deliveries';
    axios.get(url).then((data) => {
      setMap(data.data);
    });
  }, );

  return (
    <div className="mapa">
       {map &&
          map.map((item) => (
          <p>{item.latitude} -- {item.longitude}</p>   
        ))}
    </div>
  );
}

export default Mapa;