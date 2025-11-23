import { useState, useEffect, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Globe from 'react-globe.gl';
import EgyptHubDetails from './components/EgyptHubDetails';
import HubInfoWindow from './components/HubInfoWindow';
import './App.css';

function GlobeComponent() {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState();
  const [activeHub, setActiveHub] = useState(null); // State to manage active hub for info window
  const navigate = useNavigate();

  const hubs = [
    { lat: 30.0444, lng: 31.2357, name: 'Cairo, Egypt - Tawasol Life Science Hub', id: 'cairo', description: 'The central hub for life science and technology in Egypt, aligned with Vision 2030.' },
    { lat: 42.3601, lng: -71.0589, name: 'Boston & Cambridge, USA', id: 'boston', description: 'Over 1,200 biotech companies, including Moderna, Biogen, and Vertex Pharmaceuticals. Kendall Square is known as \'the most innovative square mile on the planet\'. The region raised $7.89 billion in VC in 2024 and has led in NIH funding for 22 consecutive years.' },
    { lat: 37.7749, lng: -122.4194, name: 'San Francisco Bay Area, USA', id: 'sf', description: 'Home to over 200 biotech companies and major universities like Stanford and UC Berkeley. Known for strong VC investment and a culture of innovation in SaMDs, machine learning, and AI for health.' },
    { lat: 41.8781, lng: -87.6298, name: 'Chicago, USA', id: 'chicago', description: 'An emerging biotech hub with organizations like the Chan Zuckerberg Biohub and Fulton Labs. Benefits from a central location and talent from universities like the University of Chicago and Northwestern.' },
    { lat: 34.0522, lng: -118.2437, name: 'Southern California, USA', id: 'socal', description: 'A rapidly emerging hub with strong investment ($60 billion in private investment in 2023). Home to renowned research institutions like UCSD and a diverse talent pool.' },
    { lat: 47.6062, lng: -122.3321, name: 'Seattle, USA', id: 'seattle', description: 'A leader in immunology, cell therapy, and infectious diseases. Home to the University of Washington and the Fred Hutchinson Cancer Research Center, with a 25% increase in life sciences employment from 2019 to 2022.' },
    { lat: 39.9526, lng: -75.1652, name: 'Philadelphia, USA', id: 'philadelphia', description: 'A prominent hub with specialized strengths in cell and gene therapy. Features a collaborative ecosystem and significant infrastructure development, including a 1,300-acre life sciences hub in South Philly.' },
    { lat: 35.9132, lng: -79.0558, name: 'Research Triangle, USA', id: 'research_triangle', description: 'The 5th largest life sciences hub in the US, with over 600 companies and the world\'s largest cluster of CROs. Supported by Duke University, UNC-Chapel Hill, and NC State University.' },
    { lat: 51.5074, lng: -0.1278, name: 'London, UK', id: 'london', description: 'A major European financial and innovation hub with a growing life sciences sector.' },
    { lat: 35.6895, lng: 139.6917, name: 'Tokyo, Japan', id: 'tokyo', description: 'A hub for medical device innovation and pharmaceutical research in Asia.' },
    { lat: 1.3521, lng: 103.8198, name: 'Singapore', id: 'singapore', description: 'A leading biotech cluster in Southeast Asia, known for its strong government support and research infrastructure.' },
    { lat: 47.5596, lng: 7.5886, name: 'Basel Area, Switzerland', id: 'basel', description: 'A prominent European biotech cluster, home to major pharmaceutical companies.' },
    { lat: 46.5197, lng: 6.6323, name: 'Lausanne, Switzerland', id: 'lausanne', description: 'Features the Biopôle, fostering innovation in biotech and life sciences.' },
    { lat: 47.3769, lng: 8.5417, name: 'Zurich, Switzerland', id: 'zurich', description: 'Known for its Technopark, fostering innovation in various high-tech sectors including life sciences.' },
    { lat: 55.6761, lng: 12.5683, name: 'Copenhagen, Denmark', id: 'copenhagen', description: 'An important biotech hub in Northern Europe, home to major pharmaceutical and biotech companies.' },
  ];

  const cairoHub = hubs.find(hub => hub.id === 'cairo');
  const arcsData = cairoHub ? hubs.filter(hub => hub.id !== 'cairo').map(hub => ({
    startLat: cairoHub.lat,
    startLng: cairoHub.lng,
    endLat: hub.lat,
    endLng: hub.lng,
    color: [['#00FF00'], ['#FFFF00'], ['#FF0000']][Math.floor(Math.random() * 3)],
  })) : [];

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }

    fetch('/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  const handleGlobeClick = ({ lat, lng }) => {
    const clickedHub = hubs.find(hub => 
      Math.abs(lat - hub.lat) < 1 && Math.abs(lng - hub.lng) < 1
    );

    if (clickedHub && clickedHub.name.includes('Egypt')) {
      navigate('/egypt-hub-details');
    } else if (clickedHub) {
      setActiveHub(clickedHub);
    } else {
      window.open(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`, '_blank');
    }
  };

  const handleCloseInfoWindow = () => {
    setActiveHub(null);
  };

  return (
    <div className="App">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.7}
        hexPolygonColor={({ properties: d }) =>
          d === hoverD ? 'rgba(255,255,255, 0.8)' : 'rgba(255,255,255, 0.1)'
        }
        onHexPolygonHover={setHoverD}
        onGlobeClick={handleGlobeClick}
        labelsData={hubs}
        labelLat={d => d.lat}
        labelLng={d => d.lng}
        labelText={d => d.name}
        labelSize={0.8}
        labelDotRadius={0.4}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelResolution={3}
        labelsTransitionDuration={1000}
        arcsData={arcsData}
        arcColor={'color'}
        arcDashLength={0.5}
        arcDashGap={0.1}
        arcDashAnimateTime={1000}
        arcStroke={0.5}
      />
      <HubInfoWindow hub={activeHub} onClose={handleCloseInfoWindow} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobeComponent />} />
      <Route path="/egypt-hub-details" element={<EgyptHubDetails />} />
    </Routes>
  );
}

export default App;


