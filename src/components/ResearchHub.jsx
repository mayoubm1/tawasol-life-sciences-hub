import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { ArrowLeft, BookOpen, TrendingUp, Users } from 'lucide-react';

const ResearchHub = ({ onBack }) => {

  const [m2m3Data, setM2m3Data] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchM2m3Data() {
      setLoading(true);
      setError(null);
      
      // Assuming a table named 'm2m3_research' for the M2-3M system content
      const { data, error } = await supabase
        .from('m2m3_research')
        .select('*')
        .single(); // Assuming a single entry for the main Research Hub page

      if (error) {
        console.error('Supabase fetch error for M2-3M Research:', error);
        setError(error.message);
      } else {
        setM2m3Data(data);
      }
      setLoading(false);
    }

    fetchM2m3Data();
  }, []);


  const sections = [
    { id: 'overview', label: 'Research Overview', icon: '🔬' },
    { id: 'areas', label: 'Research Areas', icon: '🧬' },
    { id: 'facilities', label: 'Facilities', icon: '🏢' },
    { id: 'partnerships', label: 'Partnerships', icon: '🤝' },
    { id: 'publications', label: 'Publications', icon: '📚' }
  ];

  const researchAreas = [
    {
      name: 'Drug Discovery & Development',
      description: 'Advanced pharmaceutical research focusing on novel therapeutic compounds and drug delivery systems.',
      projects: ['Novel Cancer Therapeutics', 'Neurological Disorder Treatments', 'Antimicrobial Resistance Solutions']
    },
    {
      name: 'Biotechnology & Bioengineering',
      description: 'Cutting-edge biotechnology research including genetic engineering and synthetic biology.',
      projects: ['Gene Therapy Platforms', 'Biomarker Discovery', 'Tissue Engineering']
    },
    {
      name: 'Medical Devices & Diagnostics',
      description: 'Development of innovative medical devices and diagnostic technologies.',
      projects: ['Point-of-Care Diagnostics', 'Wearable Health Monitors', 'AI-Powered Imaging']
    },
    {
      name: 'Precision Medicine',
      description: 'Personalized healthcare solutions based on individual genetic profiles.',
      projects: ['Pharmacogenomics', 'Personalized Cancer Treatment', 'Genetic Risk Assessment']
    }
  ];

  const facilities = [
    {
      name: 'Advanced Molecular Biology Laboratory',
      description: 'State-of-the-art facility for genetic research and molecular analysis.',
      equipment: ['Next-Generation Sequencers', 'CRISPR-Cas9 Systems', 'Mass Spectrometers']
    },
    {
      name: 'Cell Culture & Tissue Engineering Lab',
      description: 'Specialized facility for cell-based research and tissue development.',
      equipment: ['Bioreactors', 'Cell Sorters', '3D Bioprinters']
    },
    {
      name: 'Clinical Research Center',
      description: 'Dedicated space for clinical trials and patient studies.',
      equipment: ['Clinical Trial Management Systems', 'Patient Monitoring Equipment', 'Data Analytics Platforms']
    }
  ];

  const partnerships = [
    {
      name: 'Global Pharmaceutical Companies',
      description: 'Collaborative research agreements with leading pharmaceutical companies worldwide.',
      partners: ['Pfizer', 'Novartis', 'Roche', 'Johnson & Johnson']
    },
    {
      name: 'Academic Institutions',
      description: 'Research partnerships with top universities and research institutes.',
      partners: ['Harvard Medical School', 'MIT', 'Oxford University', 'Cambridge University']
    },
    {
      name: 'Government Agencies',
      description: 'Collaboration with national and international health organizations.',
      partners: ['NIH', 'FDA', 'EMA', 'WHO']
    }
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Tawasol Research Hub</h1>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
                <p className="text-xl text-gray-300 leading-relaxed">
                  The Tawasol Research Hub is a world-class research facility dedicated to advancing life sciences through 
                  innovative research, cutting-edge technology, and strategic partnerships. Our mission is to translate 
                  scientific discoveries into practical solutions that improve human health and quality of life.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🎯 Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To conduct groundbreaking research that addresses global health challenges and contributes to the 
                  advancement of medical science, while fostering innovation and collaboration in the life sciences sector.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🔬 Research Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our research programs span multiple disciplines, from basic science to clinical applications, 
                  ensuring a comprehensive approach to solving complex health problems.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🌍 Global Impact</h3>
                <p className="text-gray-300 leading-relaxed">
                  Through international collaborations and partnerships, we contribute to global health initiatives 
                  and share knowledge to benefit communities worldwide.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🚀 Innovation Focus</h3>
                <p className="text-gray-300 leading-relaxed">
                  We leverage the latest technologies including AI, machine learning, and advanced analytics 
                  to accelerate research and development processes.
                </p>
              </div>
            </div>

            {/* M2-3M System Live Data Integration */}
            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-yellow-400/50">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                M2-3M System Live Data
              </h3>
              {loading ? (
                <p className="text-gray-300">Connecting to M2-3M System...</p>
              ) : error ? (
                <p className="text-red-400">
                  Connection Error: {error}. Displaying static content only.
                </p>
              ) : m2m3Data ? (
                <div className="grid md:grid-cols-3 gap-4 text-gray-200">
                  <div>
                    <p className="text-xl font-bold text-yellow-300">{m2m3Data.total_active_projects || 'N/A'}</p>
                    <p>Active Projects</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-yellow-300">{m2m3Data.collaborating_institutions || 'N/A'}</p>
                    <p>Collaborating Institutions</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-yellow-300">{m2m3Data.latest_breakthrough || 'N/A'}</p>
                    <p>Latest Breakthrough</p>
                  </div>
                  <p className="text-sm col-span-3 italic mt-2">
                    Data last updated: {new Date(m2m3Data.updated_at).toLocaleString()}
                  </p>
                </div>
              ) : (
                <p className="text-gray-300">
                  No live data available from the M2-3M system at this moment.
                </p>
              )}
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Key Statistics</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <p className="text-gray-300">Active Research Projects</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
                  <p className="text-gray-300">Research Publications</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                  <p className="text-gray-300">Patent Applications</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                  <p className="text-gray-300">Global Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'areas':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Research Areas</h1>
              <p className="text-xl text-blue-200 mb-8">
                Exploring diverse fields of life sciences to drive innovation and discovery
              </p>
            </div>

            <div className="space-y-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-3">{area.name}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{area.description}</p>
                  <div>
                    <h4 className="text-lg font-medium text-blue-300 mb-2">Current Projects:</h4>
                    <div className="grid md:grid-cols-3 gap-2">
                      {area.projects.map((project, idx) => (
                        <div key={idx} className="bg-blue-600/20 rounded-lg p-3">
                          <p className="text-white text-sm">{project}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'facilities':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Research Facilities</h1>
              <p className="text-xl text-blue-200 mb-8">
                State-of-the-art facilities equipped with cutting-edge technology
              </p>
            </div>

            <div className="space-y-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-3">{facility.name}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{facility.description}</p>
                  <div>
                    <h4 className="text-lg font-medium text-green-300 mb-2">Key Equipment:</h4>
                    <div className="grid md:grid-cols-3 gap-2">
                      {facility.equipment.map((item, idx) => (
                        <div key={idx} className="bg-green-600/20 rounded-lg p-3">
                          <p className="text-white text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'partnerships':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Strategic Partnerships</h1>
              <p className="text-xl text-blue-200 mb-8">
                Collaborating with leading organizations worldwide
              </p>
            </div>

            <div className="space-y-6">
              {partnerships.map((partnership, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-3">{partnership.name}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{partnership.description}</p>
                  <div>
                    <h4 className="text-lg font-medium text-purple-300 mb-2">Key Partners:</h4>
                    <div className="grid md:grid-cols-4 gap-2">
                      {partnership.partners.map((partner, idx) => (
                        <div key={idx} className="bg-purple-600/20 rounded-lg p-3 text-center">
                          <p className="text-white text-sm font-medium">{partner}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'publications':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Research Publications</h1>
              <p className="text-xl text-blue-200 mb-8">
                Contributing to the global scientific knowledge base
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">📊 Publication Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Total Publications</span>
                    <span className="text-white font-bold">200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">High-Impact Journals</span>
                    <span className="text-white font-bold">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Citations</span>
                    <span className="text-white font-bold">5,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">H-Index</span>
                    <span className="text-white font-bold">45</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🏆 Recent Achievements</h3>
                <div className="space-y-3">
                  <div className="bg-yellow-600/20 rounded-lg p-3">
                    <p className="text-white text-sm">Nature Medicine Publication on Novel Cancer Therapy</p>
                  </div>
                  <div className="bg-blue-600/20 rounded-lg p-3">
                    <p className="text-white text-sm">Science Journal Feature on Gene Editing Breakthrough</p>
                  </div>
                  <div className="bg-green-600/20 rounded-lg p-3">
                    <p className="text-white text-sm">Cell Journal Publication on Regenerative Medicine</p>
                  </div>
                  <div className="bg-purple-600/20 rounded-lg p-3">
                    <p className="text-white text-sm">NEJM Article on Precision Medicine Advances</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">📚 Research Focus Areas</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🧬</div>
                  <h4 className="text-lg font-medium text-white mb-2">Genomics</h4>
                  <p className="text-gray-300 text-sm">45 publications</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💊</div>
                  <h4 className="text-lg font-medium text-white mb-2">Drug Discovery</h4>
                  <p className="text-gray-300 text-sm">38 publications</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔬</div>
                  <h4 className="text-lg font-medium text-white mb-2">Biotechnology</h4>
                  <p className="text-gray-300 text-sm">52 publications</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.2)' }}
      >
        <source src="https://res.cloudinary.com/dneamcgig/video/upload/v1751145035/VID-20250628-WA0042_j1hxla.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Globe</span>
              </button>
              
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Research Hub</h1>
                <p className="text-blue-200">Advancing Life Sciences Through Innovation</p>
              </div>
              
              <div className="w-24"></div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="bg-black/10 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex space-x-1 overflow-x-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg transition-all duration-200 whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="container mx-auto px-6 py-8">
          {renderSectionContent()}
        </main>
      </div>
    </div>
  );
};

export default ResearchHub;

