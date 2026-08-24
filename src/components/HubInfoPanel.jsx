import React from 'react';

const HubInfoPanel = ({ hub, onClose }) => {
  if (!hub) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/20">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{hub.name}</h2>
            <p className="text-blue-200 text-lg">{hub.location}</p>
            {hub.partnershipPriority && (
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                hub.partnershipPriority === 'High' ? 'bg-green-500/20 text-green-300' :
                hub.partnershipPriority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-blue-500/20 text-blue-300'
              }`}>
                {hub.partnershipPriority} Priority
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-red-300 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Description */}
        {hub.description && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed">{hub.description}</p>
          </div>
        )}

        {/* Strategic Value */}
        {hub.strategicValue && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Strategic Value</h3>
            <p className="text-gray-300 leading-relaxed">{hub.strategicValue}</p>
          </div>
        )}

        {/* Specializations */}
        {hub.specializations && hub.specializations.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Specialization Areas</h3>
            <div className="flex flex-wrap gap-2">
              {hub.specializations.map((spec, index) => (
                <span
                  key={index}
                  className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
          <div className="space-y-2 text-gray-300">
            {hub.keyContact && (
              <p><span className="text-blue-300 font-medium">Key Contact:</span> {hub.keyContact}</p>
            )}
            {hub.contactEmail && (
              <p><span className="text-blue-300 font-medium">Email:</span> 
                <a href={`mailto:${hub.contactEmail}`} className="text-blue-400 hover:text-blue-300 ml-1">
                  {hub.contactEmail}
                </a>
              </p>
            )}
            {hub.phone && (
              <p><span className="text-blue-300 font-medium">Phone:</span> 
                <a href={`tel:${hub.phone}`} className="text-blue-400 hover:text-blue-300 ml-1">
                  {hub.phone}
                </a>
              </p>
            )}
            {hub.address && (
              <p><span className="text-blue-300 font-medium">Address:</span> {hub.address}</p>
            )}
            {hub.website && (
              <p><span className="text-blue-300 font-medium">Website:</span> 
                <a 
                  href={hub.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 ml-1"
                >
                  {hub.website}
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              const lat = hub.coordinates[0];
              const lng = hub.coordinates[1];
              const streetViewUrl = `https://www.google.com/maps/@${lat},${lng},3a,75y,90t/data=!3m6!1e1!3m4!1s0x0:0x0!2e0!7i13312!8i6656`;
              window.open(streetViewUrl, '_blank');
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Street View</span>
          </button>
          
          <button
            onClick={() => {
              const lat = hub.coordinates[0];
              const lng = hub.coordinates[1];
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
              window.open(mapsUrl, '_blank');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span>View on Maps</span>
          </button>

          {hub.website && (
            <button
              onClick={() => window.open(hub.website, '_blank')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Visit Website</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HubInfoPanel;

