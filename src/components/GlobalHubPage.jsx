import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { ArrowLeft, Globe, MapPin, Briefcase, Users, Phone, Mail } from 'lucide-react';

const GlobalHubPage = ({ hub, onBack }) => {
  const [realtimeData, setRealtimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRealtimeData() {
      setLoading(true);
      setError(null);
      
      // Assuming a table named 'hub_details' with a column 'hub_id' matching hub.id
      const { data, error } = await supabase
        .from('hub_details')
        .select('*')
        .eq('hub_id', hub.id)
        .single();

      if (error) {
        console.error('Supabase fetch error:', error);
        setError(error.message);
      } else {
        setRealtimeData(data);
      }
      setLoading(false);
    }

    fetchRealtimeData();
  }, [hub.id]);

  if (!hub) return null;
  
  // Display loading or error state
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center text-white">
        <p className="text-xl text-yellow-400">Loading real-time data for {hub.name}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center text-white">
        <p className="text-xl text-red-400">Error loading data: {error}. Displaying static content.</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack} 
          className="flex items-center text-lg text-yellow-400 hover:text-yellow-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back to Global Hub Network
        </button>

        <header className="mb-10 border-b border-yellow-400/50 pb-4">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-2">{hub.name}</h1>
          <p className="text-xl text-gray-300 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-400" />
            {hub.location}
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Strategic Overview</h2>
          <p className="text-gray-200 leading-relaxed mb-6">{hub.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-yellow-400 flex items-center mb-2">
                <Briefcase className="w-5 h-5 mr-2" />
                Specializations
              </h3>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                {hub.specializations.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-yellow-400 flex items-center mb-2">
                <Users className="w-5 h-5 mr-2" />
                Strategic Assessment
              </h3>
              <p className="text-gray-300">{hub.strategicAssessment}</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Network Connectivity</h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            This hub serves as a vital node in the Tawasol Life Sciences network, facilitating exchange in {hub.specializations.join(', ')}.
          </p>
          <div className="flex items-center text-gray-300">
            <Globe className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="font-semibold">Coordinates:</span> {hub.coordinates[0].toFixed(2)}° N, {hub.coordinates[1].toFixed(2)}° E
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-semibold">Phone:</span> {hub.contact.phone || 'N/A'}
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-semibold">Email:</span> {hub.contact.email || 'N/A'}
            </div>
          </div>
        </section>
        
        {/* M2-3M System Integration Content (Supabase Data) */}
        <section className="mt-12 p-6 bg-yellow-400/10 border-l-4 border-yellow-400 rounded-r-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">M2-3M System Integration (Real-time Data)</h2>
          {realtimeData ? (
            <div className="space-y-4">
              <p className="text-gray-200">
                <span className="font-semibold text-yellow-300">Active Projects:</span> {realtimeData.active_projects || 'N/A'}
              </p>
              <p className="text-gray-200">
                <span className="font-semibold text-yellow-300">Recent Publication:</span> {realtimeData.recent_publication || 'N/A'}
              </p>
              <p className="text-gray-200">
                <span className="font-semibold text-yellow-300">Collaborative Opportunities:</span> {realtimeData.opportunities || 'N/A'}
              </p>
              <p className="text-gray-200 italic text-sm mt-4">
                Data last updated: {new Date(realtimeData.updated_at).toLocaleString()}
              </p>
            </div>
          ) : (
            <p className="text-gray-200">
              No real-time M2-3M data found for this hub in the Supabase 'hub_details' table.
            </p>
          )}
        </section>

      </div>
    </div>
  );
};

export default GlobalHubPage;
