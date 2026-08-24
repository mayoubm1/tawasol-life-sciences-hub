import React, { useState } from 'react';
import { tawasolInfo } from '../data/globalHubs';

const EgyptHubPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏛️' },
    { id: 'investment', label: 'Investment', icon: '💰' },
    { id: 'research', label: 'Research', icon: '🔬' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'partnerships', label: 'Partnerships', icon: '🤝' },
    { id: 'timeline', label: 'Timeline', icon: '📅' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <section className="relative overflow-hidden rounded-3xl border border-amber-200/25 bg-slate-950/70 shadow-2xl shadow-amber-950/20">
              <div className="grid min-h-[280px] md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative order-2 min-h-[260px] md:order-1">
                  <img
                    src="/assets/egyptian/tawasol-campus-concept.png"
                    alt="Illustrative future-facing life sciences campus concept"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent md:bg-gradient-to-r md:from-slate-950/20 md:to-transparent" />
                </div>
                <div className="order-1 flex flex-col justify-center p-7 md:order-2 md:p-10">
                  <span className="mb-3 text-xs font-bold tracking-[0.22em] text-amber-200">EGYPT · CONNECTING CONTINENTS</span>
                  <h2 className="font-serif text-3xl font-medium leading-tight text-white md:text-4xl">A life-sciences hub rooted in Egypt and open to the world.</h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">This illustrative campus visual supports Tawasol’s long-term vision for a connected ecosystem of education, research, clinical innovation, and enterprise.</p>
                  <div className="mt-6 flex items-center gap-3 text-xs text-amber-100/80">
                    <span className="h-px w-10 bg-amber-300/70" />
                    Kemet-inspired science, health, and innovation
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                {tawasolInfo.flagshipProject.name}
              </h1>
              <p className="text-xl text-blue-200 mb-6">
                {tawasolInfo.companyOverview.tagline}
              </p>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-semibold text-white mb-4">Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {tawasolInfo.companyOverview.vision}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Company Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {tawasolInfo.companyOverview.description}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Project Description</h3>
                <p className="text-gray-300 leading-relaxed">
                  {tawasolInfo.flagshipProject.description}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Components</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tawasolInfo.flagshipProject.components.map((component, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <h4 className="text-lg font-semibold text-white mb-2">{component.name}</h4>
                    <p className="text-gray-300 text-sm">{component.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Strategic Objectives</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {tawasolInfo.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/5 rounded-lg p-4">
                    <span className="text-blue-400 font-bold">{index + 1}.</span>
                    <p className="text-gray-300">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'investment':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Investment Overview</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">{tawasolInfo.companyOverview.investment}</h3>
                  <p className="text-white">Total Investment</p>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{tawasolInfo.companyOverview.targetIRR}</h3>
                  <p className="text-white">Target IRR</p>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">1B EGP</h3>
                  <p className="text-white">Healthcare Fund</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Tawasol by the Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-blue-300 font-medium">Hospitals</span>
                  <span className="text-white">{tawasolInfo.byTheNumbers.hospitals}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-blue-300 font-medium">Medical Labs</span>
                  <span className="text-white">{tawasolInfo.byTheNumbers.medicalLabs}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-blue-300 font-medium">R&D Centers</span>
                  <span className="text-white">{tawasolInfo.byTheNumbers.rdCenters}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-blue-300 font-medium">Educational Services</span>
                  <span className="text-white">{tawasolInfo.byTheNumbers.educationalServices}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-300 font-medium">International Reach</span>
                  <span className="text-white">{tawasolInfo.byTheNumbers.internationalReach}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Investment Models</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-blue-300">Infrastructure Development</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Greenfield infrastructure zones</li>
                    <li>• Smart campus development</li>
                    <li>• Research facility construction</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-blue-300">Business Operations</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Pharma manufacturing licensing</li>
                    <li>• Research park leasing</li>
                    <li>• Biotech accelerator equity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'research':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Research & Development</h2>
              <p className="text-xl text-blue-200 mb-8">
                Advancing scientific knowledge and innovation in life sciences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🧬 Biotechnology</h3>
                <p className="text-gray-300 text-sm">Advanced biotechnology research including genetic engineering, synthetic biology, and bioprocessing.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">💊 Drug Discovery</h3>
                <p className="text-gray-300 text-sm">Innovative drug development programs focusing on novel therapeutic targets and delivery systems.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🤖 Medical AI</h3>
                <p className="text-gray-300 text-sm">Artificial intelligence applications in diagnostics, treatment planning, and personalized medicine.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🧪 Clinical Research</h3>
                <p className="text-gray-300 text-sm">State-of-the-art clinical trial facilities for testing new treatments and medical devices.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🔬 Genomics</h3>
                <p className="text-gray-300 text-sm">Comprehensive genomic research including sequencing, analysis, and personalized medicine applications.</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🏥 Medical Devices</h3>
                <p className="text-gray-300 text-sm">Development of innovative medical devices and diagnostic equipment for improved patient care.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Research Facilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-blue-300 mb-3">Laboratory Infrastructure</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Molecular and genomic laboratories</li>
                    <li>• Cell culture and tissue engineering facilities</li>
                    <li>• Analytical chemistry and mass spectrometry</li>
                    <li>• Biosafety level 2 and 3 laboratories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-300 mb-3">Technology Platforms</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• High-throughput screening systems</li>
                    <li>• Next-generation sequencing platforms</li>
                    <li>• Advanced imaging and microscopy</li>
                    <li>• Computational biology infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Tawasol University for Life Sciences</h2>
              <p className="text-xl text-blue-200 mb-8">
                Educating the next generation of life sciences professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🧬 Biopharmaceutical Sciences</h3>
                <p className="text-gray-300 text-sm">Comprehensive programs in drug development, pharmacology, and pharmaceutical biotechnology.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🔬 Biotechnology</h3>
                <p className="text-gray-300 text-sm">Advanced biotechnology education covering genetic engineering, bioprocessing, and industrial biotechnology.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🧪 Life Sciences</h3>
                <p className="text-gray-300 text-sm">Interdisciplinary life sciences programs integrating biology, chemistry, and medical sciences.</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🏥 Nursing & Health Tech</h3>
                <p className="text-gray-300 text-sm">Modern nursing education with emphasis on healthcare technology and patient care innovation.</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">🤖 Biomedical AI</h3>
                <p className="text-gray-300 text-sm">Cutting-edge programs in artificial intelligence applications for healthcare and medical research.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">📊 Bioinformatics</h3>
                <p className="text-gray-300 text-sm">Computational biology and bioinformatics programs for data-driven life sciences research.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Educational Excellence</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-blue-300 mb-3">Academic Features</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Hands-on translational research</li>
                    <li>• Entrepreneurship in biosciences</li>
                    <li>• International exchange programs</li>
                    <li>• Industry internship opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-300 mb-3">Career Outcomes</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Research scientist positions</li>
                    <li>• Biotech industry careers</li>
                    <li>• Healthcare innovation roles</li>
                    <li>• Entrepreneurship opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'partnerships':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Global Partnerships</h2>
              <p className="text-xl text-blue-200 mb-8">
                Building bridges across continents for scientific collaboration
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tawasolInfo.partnerships.map((partnership, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{partnership}</h3>
                  <p className="text-gray-300 text-sm">Strategic collaboration in research, education, and technology transfer.</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Leadership Team</h3>
              <div className="space-y-3">
                {tawasolInfo.leadership.map((leader, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{leader.split(' ')[1]?.[0] || leader[0]}</span>
                    </div>
                    <p className="text-gray-300">{leader}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Development Timeline</h2>
              <p className="text-xl text-blue-200 mb-8">
                Strategic roadmap for hub development and expansion
              </p>
            </div>

            <div className="space-y-6">
              {tawasolInfo.timeline.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                  </div>
                  {index < tawasolInfo.timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Expected Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-medium text-green-300 mb-2">Economic Impact</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 10,000+ direct and indirect jobs</li>
                    <li>• $500M+ annual economic output</li>
                    <li>• 100+ startup companies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-green-300 mb-2">Scientific Impact</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 500+ research publications annually</li>
                    <li>• 50+ patents per year</li>
                    <li>• 20+ clinical trials</li>
                  </ul>
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
                <h1 className="text-2xl font-bold text-white">Tawasol Life Sciences Technology Hub</h1>
                <p className="text-blue-200">Egypt's Flagship Innovation Center</p>
              </div>
              
              <div className="w-24"></div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="bg-black/10 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex space-x-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="container mx-auto px-6 py-8">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default EgyptHubPage;

