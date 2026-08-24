import React, { useState } from 'react';

const Header = ({ viewMode, setViewMode, onEducationClick, onResearchClick, onInnovationClick, onTelemedicineClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { label: 'Life Sciences', action: onEducationClick },
    { label: 'Research', action: onResearchClick },
    { label: 'Innovation', action: onInnovationClick },
    { label: 'Telemedicine', action: onTelemedicineClick },
  ];

  const selectPage = (action) => {
    action();
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <button type="button" className="site-brand" onClick={() => setViewMode('globe')} aria-label="Show 3D globe">
          <span className="site-brand__seal">T</span>
          <span>
            <strong>Tawasol</strong>
            <small>Life Sciences Technology Hub</small>
          </span>
        </button>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map(({ label, action }) => (
            <button key={label} type="button" onClick={() => selectPage(action)}>{label}</button>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="view-switch" aria-label="Network visualisation mode">
            <button type="button" onClick={() => setViewMode('globe')} className={viewMode === 'globe' ? 'is-active' : ''}>3D</button>
            <button type="button" onClick={() => setViewMode('map')} className={viewMode === 'map' ? 'is-active' : ''}>2D</button>
          </div>
          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map(({ label, action }) => (
            <button key={label} type="button" onClick={() => selectPage(action)}>{label}</button>
          ))}
          <div className="mobile-nav__modes">
            <button type="button" onClick={() => { setViewMode('globe'); setMenuOpen(false); }} className={viewMode === 'globe' ? 'is-active' : ''}>3D globe</button>
            <button type="button" onClick={() => { setViewMode('map'); setMenuOpen(false); }} className={viewMode === 'map' ? 'is-active' : ''}>2D map</button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
