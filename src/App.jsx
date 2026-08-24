import React, { useEffect, useMemo, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { globalHubs } from './data/globalHubs';
import Header from './components/Header';
import HubInfoPanel from './components/HubInfoPanel';
import AIAssistant from './components/AIAssistant';
import EgyptHubPage from './components/EgyptHubPage';
import LifeSciencesEducation from './components/LifeSciencesEducation';
import ResearchHub from './components/ResearchHub';
import InnovationLab from './components/InnovationLab';
import TelemedicineHub from './components/TelemedicineHub';
import { useRealtimeHubs } from './hooks/useRealtimeHubs';
import './App.css';

const EARTH_TEXTURE = 'https://res.cloudinary.com/dneamcgig/image/upload/v1751127791/Picsart_25-06-28_19-22-26-663_rzywqe.png';
const SPACE_VIDEO = 'https://res.cloudinary.com/dneamcgig/video/upload/v1751145035/VID-20250628-WA0042_j1hxla.mp4';
const EGYPT_VIEW = { lat: 27.2, lng: 31.4, altitude: 1.72 };

function App() {
  const [selectedHub, setSelectedHub] = useState(null);
  const [viewMode, setViewMode] = useState('globe');
  const [currentPage, setCurrentPage] = useState('main');
  const [showAI, setShowAI] = useState(false);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const globeRef = useRef();
  const { hubs: networkHubs } = useRealtimeHubs(globalHubs);

  const egyptHub = useMemo(
    () => networkHubs.find((hub) => hub.id === 'egypt-tawasol'),
    [networkHubs],
  );

  const arcs = useMemo(() => {
    if (!egyptHub) return [];

    return networkHubs
      .filter((hub) => hub.id !== egyptHub.id)
      .map((hub, index) => ({
        id: `${egyptHub.id}-${hub.id}`,
        startLat: egyptHub.coordinates[0],
        startLng: egyptHub.coordinates[1],
        endLat: hub.coordinates[0],
        endLng: hub.coordinates[1],
        color: index % 3 === 0 ? ['#ffd56a', '#55d9ff'] : ['#b88724', '#66b8ff'],
        label: `Tawasol Egypt ↔ ${hub.name}`,
      }));
  }, [egyptHub, networkHubs]);

  useEffect(() => {
    const updateViewport = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const configureGlobe = () => {
    const controls = globeRef.current?.controls?.();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.42;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.rotateSpeed = 0.58;
      controls.zoomSpeed = 0.72;
      controls.minDistance = 130;
      controls.maxDistance = 900;
    }
    globeRef.current?.pointOfView?.(EGYPT_VIEW, 0);
  };

  useEffect(() => {
    if (viewMode === 'globe') {
      const frame = window.requestAnimationFrame(configureGlobe);
      return () => window.cancelAnimationFrame(frame);
    }
    return undefined;
  }, [viewMode]);

  const handleHubClick = (hub) => {
    if (hub.id === 'egypt-tawasol') {
      setSelectedHub(null);
      setCurrentPage('egypt-hub');
      return;
    }
    setSelectedHub(hub);
  };

  const renderGlobe = () => (
    <div className="globe-container" aria-label="Interactive global life sciences network">
      <Globe
        ref={globeRef}
        width={viewport.width}
        height={viewport.height}
        onGlobeReady={configureGlobe}
        globeImageUrl={EARTH_TEXTURE}
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="#74c9ff"
        atmosphereAltitude={0.16}
        pointsData={networkHubs}
        pointLat={(hub) => hub.coordinates[0]}
        pointLng={(hub) => hub.coordinates[1]}
        pointColor={(hub) => (hub.type === 'flagship' ? '#f6c85f' : '#3ec6ff')}
        pointAltitude={(hub) => (hub.type === 'flagship' ? 0.14 : 0.055)}
        pointRadius={(hub) => (hub.type === 'flagship' ? 0.9 : 0.42)}
        pointResolution={18}
        pointLabel={(hub) => `
          <div class="hub-tooltip">
            <span class="hub-tooltip__eyebrow">${hub.type === 'flagship' ? 'FLAGSHIP NETWORK NODE' : hub.region}</span>
            <strong>${hub.name}</strong>
            <span>${hub.location}</span>
            <small>Click to explore</small>
          </div>
        `}
        onPointClick={handleHubClick}
        onPointHover={(hub) => {
          document.body.style.cursor = hub ? 'pointer' : 'default';
        }}
        arcsData={arcs}
        arcStartLat={(arc) => arc.startLat}
        arcStartLng={(arc) => arc.startLng}
        arcEndLat={(arc) => arc.endLat}
        arcEndLng={(arc) => arc.endLng}
        arcColor={(arc) => arc.color}
        arcAltitude={0.34}
        arcStroke={0.46}
        arcDashLength={0.34}
        arcDashGap={0.18}
        arcDashAnimateTime={2400}
        arcCurveResolution={72}
        arcCircularResolution={8}
        arcLabel={(arc) => arc.label}
        ringsData={egyptHub ? [egyptHub] : []}
        ringLat={(hub) => hub.coordinates[0]}
        ringLng={(hub) => hub.coordinates[1]}
        ringColor={() => ['#ffd56a', 'rgba(255,213,106,0)']}
        ringMaxRadius={8}
        ringPropagationSpeed={1.8}
        ringRepeatPeriod={900}
      />
    </div>
  );

  const renderMap = () => (
    <section className="network-map" aria-label="Flat global hub map">
      <div className="network-map__grid" />
      <div className="network-map__heading">
        <span>NETWORK OVERVIEW</span>
        <h2>Egypt connecting life-sciences ecosystems</h2>
      </div>
      <div className="network-map__surface">
        <img src={EARTH_TEXTURE} alt="World network overview" />
        {networkHubs.map((hub) => {
          const left = ((hub.coordinates[1] + 180) / 360) * 100;
          const top = ((90 - hub.coordinates[0]) / 180) * 100;
          return (
            <button
              key={hub.id}
              type="button"
              className={`map-marker ${hub.type === 'flagship' ? 'map-marker--flagship' : ''}`}
              style={{ left: `${left}%`, top: `${top}%` }}
              onClick={() => handleHubClick(hub)}
              aria-label={`Explore ${hub.name}`}
            >
              <span />
            </button>
          );
        })}
      </div>
    </section>
  );

  if (currentPage === 'egypt-hub') return <EgyptHubPage onBack={() => setCurrentPage('main')} />;
  if (currentPage === 'education') return <LifeSciencesEducation onBack={() => setCurrentPage('main')} />;
  if (currentPage === 'research') return <ResearchHub onBack={() => setCurrentPage('main')} />;
  if (currentPage === 'innovation') return <InnovationLab onBack={() => setCurrentPage('main')} />;
  if (currentPage === 'telemedicine') return <TelemedicineHub onBack={() => setCurrentPage('main')} />;

  return (
    <main className="network-stage">
      <video className="background-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={SPACE_VIDEO} type="video/mp4" />
      </video>
      <div className="space-wash" aria-hidden="true" />
      <div className="star-field star-field--far" aria-hidden="true" />
      <div className="star-field star-field--near" aria-hidden="true" />

      <div className="header-overlay">
        <Header
          onEducationClick={() => setCurrentPage('education')}
          onResearchClick={() => setCurrentPage('research')}
          onInnovationClick={() => setCurrentPage('innovation')}
          onTelemedicineClick={() => setCurrentPage('telemedicine')}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>

      {viewMode === 'globe' ? renderGlobe() : renderMap()}

      <aside className="network-intro" aria-label="Tawasol network introduction">
        <span className="network-intro__kicker">CAIRO · EGYPT</span>
        <h1>Life sciences, connected.</h1>
        <p>Explore Tawasol’s Egypt-centred network across Africa, Asia, Europe, and the Gulf.</p>
        <div className="network-intro__stat"><strong>{networkHubs.length - 1}</strong><span>global collaboration nodes</span></div>
      </aside>

      <div className="network-legend" aria-hidden="true">
        <span><i className="legend-dot legend-dot--egypt" /> Egypt flagship</span>
        <span><i className="legend-dot" /> Partner hub</span>
        <span><i className="legend-arc" /> Active knowledge flow</span>
      </div>

      <div className="content-overlay">
        {selectedHub && <HubInfoPanel hub={selectedHub} onClose={() => setSelectedHub(null)} />}
        {showAI && <AIAssistant onClose={() => setShowAI(false)} />}
        <button
          type="button"
          onClick={() => setShowAI((isOpen) => !isOpen)}
          className="ai-toggle"
          aria-label={showAI ? 'Close Hayah assistant' : 'Open Hayah assistant'}
        >
          <span className="ai-toggle__pulse" />
          <span className="ai-toggle__mark">ح</span>
          <span className="ai-toggle__label">حياة</span>
        </button>
      </div>
    </main>
  );
}

export default App;
