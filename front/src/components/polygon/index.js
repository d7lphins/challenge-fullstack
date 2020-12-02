import polygon from '../../../node_modules/leaflet/dist/images/marker-icon-2x.png'; //colocar icone em um pasta 
import L from 'leaflet';

const Polygon = L.icon({
  iconUrl: polygon,
  iconSize: [30, 40], 
});

export default Polygon;