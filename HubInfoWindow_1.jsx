import React from 'react';
import './HubInfoWindow.css';

const HubInfoWindow = ({ hub, onClose }) => {
  if (!hub) return null;

  return (
    <div className="hub-info-window">
      <div className="hub-info-window-header">
        <h2>{hub.name}</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div className="hub-info-window-content">
        <p><strong>Latitude:</strong> {hub.lat}</p>
        <p><strong>Longitude:</strong> {hub.lng}</p>
        <p><strong>Description:</strong> {hub.description}</p>
      </div>
    </div>
  );
};

export default HubInfoWindow;


