import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { ArrowLeft, Lightbulb, Zap, DollarSign, Users } from 'lucide-react';

const InnovationLab = ({ onBack }) => {

  const [m2m3Data, setM2m3Data] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchM2m3Data() {
      setLoading(true);
      setError(null);
      
      // Assuming a table named 'm2m3_innovation' for the M2-3M system content
      const { data, error } = await supabase
        .from('m2m3_innovation')
        .select('*')
        .single(); // Assuming a single entry for the main Innovation Lab page

      if (error) {
        console.error('Supabase fetch error for M2-3M Innovation:', error);
        setError(error.message);
      } else {
        setM2m3Data(data);
      }
      setLoading(false);
    }

    fetchM2m3Data();
  }, []);


  const sections = [
    { id: 'overview', label: 'Innovation Overview', icon: '💡' },
    { id: 'incubator', label: 'Startup Incubator', icon: '🚀' },
    { id: 'technologies', label: 'Technologies', icon: '⚡' },
    { id: 'programs', label: 'Programs', icon: '🎯' },
    { id: 'success', label: 'Success Stories', icon: '🏆' }
  ];

  const technologies = [
    {
      name: 'Artificial Intelligence & Machine Learning',
      description: 'Advanced AI solutions for drug discovery, diagnostics, and personalized medicine.',
      applications: ['Drug Target Identification', 'Medical Image Analysis', 'Predictive Analytics', 'Clinical Decision Support']
    },
    {
      name: 'Blockchain & Digital Health',
      description: 'Secure, transparent solutions for healthcare data management and patient privacy.',
      applications: ['Medical Records Security', 'Supply Chain Tracking', 'Clinical Trial Integrity', 'Patient Consent Management']
    },
    {
      name: 'IoT & Wearable Technology',
      description: 'Connected devices for continuous health monitoring and data collection.',
      applications: ['Remote Patient Monitoring', 'Smart Medical Devices', 'Health Analytics', 'Telemedicine Platforms']
    },
    {
      name: 'Nanotechnology & Advanced Materials',
      description: 'Nano-scale innovations for targeted drug delivery and advanced medical devices.',
      applications: ['Targeted Drug Delivery', 'Biosensors', 'Tissue Engineering', 'Diagnostic Nanoparticles']
    }
  ];

  const programs = [
    {
      name: 'Life Sciences Accelerator',
      duration: '6 months',
      description: 'Intensive program for early-stage life sciences startups.',
      benefits: ['Mentorship', 'Funding', 'Lab Access', 'Market Validation']
    },
    {
      name: 'Digital Health Innovation',
      duration: '4 months',
      description: 'Focused program for digital health and medtech startups.',
      benefits: ['Technical Support', 'Regulatory Guidance', 'Pilot Programs', 'Investor Network']
    },
    {
      name: 'Corporate Innovation Partnership',
      duration: '12 months',
      description: 'Collaboration program with established pharmaceutical companies.',
      benefits: ['Industry Expertise', 'Resource Access', 'Market Entry', 'Strategic Partnerships']
    }
  ];

  const successStories = [
    {
      name: 'BioNano Therapeutics',
      sector: 'Drug Delivery',
      achievement: 'Developed revolutionary nanoparticle drug delivery system',
      funding: '$15M Series A',
      impact: 'Improved cancer treatment efficacy by 40%'
    },
    {
      name: 'HealthAI Solutions',
      sector: 'AI Diagnostics',
      achievement: 'Created AI-powered diagnostic platform for rare diseases',
      funding: '$8M Seed Round',
      impact: 'Reduced diagnostic time from months to hours'
    },
    {
      name: 'MedChain Technologies',
      sector: 'Blockchain Health',
      achievement: 'Built secure blockchain platform for medical records',
      funding: '$12M Series A',
      impact: 'Secured health data for 1M+ patients'
    }
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Tawasol Innovation Lab</h1>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20">
                <p className="text-xl text-gray-300 leading-relaxed">
                  The Tawasol Innovation Lab is a cutting-edge incubator and accelerator focused on fostering 
                  breakthrough innovations in life sciences and healthcare technology. We transform visionary 
                  ideas into market-ready solutions that revolutionize healthcare delivery and patient outcomes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🚀 Innovation Focus</h3>
                <p className="text-gray-300 leading-relaxed">
                  We specialize in emerging technologies including AI, blockchain, IoT, and nanotechnology 
                  to create next-generation healthcare solutions that address real-world challenges.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🎯 Startup Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our comprehensive support system includes mentorship, funding, technical resources, 
                  and market access to help startups scale from concept to commercial success.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🌐 Global Network</h3>
                <p className="text-gray-300 leading-relaxed">
                  Connected to a worldwide network of investors, industry experts, and strategic partners 
                  to provide startups with global opportunities and market reach.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">💡 Technology Transfer</h3>
                <p className="text-gray-300 leading-relaxed">
                  Bridging the gap between academic research and commercial applications through 
                  effective technology transfer and intellectual property commercialization.
                </p>
              </div>
            </div>

            {/* M2-3M System Live Data Integration */}
            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-yellow-400/50">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
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
                    <p className="text-xl font-bold text-yellow-300">{m2m3Data.active_startups || 'N/A'}</p>
                    <p>Active Startups</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-yellow-300">{m2m3Data.total_funding_raised || 'N/A'}</p>
                    <p>Total Funding Raised</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-yellow-300">{m2m3Data.latest_patent_filing || 'N/A'}</p>
                    <p>Latest Patent Filing</p>
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

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Innovation Metrics</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <p className="text-gray-300">Startups Incubated</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$100M+</div>
                  <p className="text-gray-300">Total Funding Raised</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
                  <p className="text-gray-300">Patents Filed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
                  <p className="text-gray-300">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'incubator':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Startup Incubator</h1>
              <p className="text-xl text-purple-200 mb-8">
                Nurturing the next generation of life sciences innovators
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-white mb-3">Seed Stage</h3>
                <p className="text-gray-300 mb-4">
                  Early-stage support for innovative ideas and concepts in life sciences.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Idea validation</li>
                  <li>• Market research</li>
                  <li>• Team building</li>
                  <li>• Initial funding</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-3">Growth Stage</h3>
                <p className="text-gray-300 mb-4">
                  Accelerated development and scaling support for promising startups.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Product development</li>
                  <li>• Regulatory guidance</li>
                  <li>• Partnership facilitation</li>
                  <li>• Series A preparation</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-white mb-3">Scale Stage</h3>
                <p className="text-gray-300 mb-4">
                  Market entry and expansion support for mature startups.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Market expansion</li>
                  <li>• Strategic partnerships</li>
                  <li>• IPO preparation</li>
                  <li>• Global scaling</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Incubator Resources</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-green-300 mb-3">Physical Resources</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• State-of-the-art laboratory space</li>
                    <li>• Shared office facilities</li>
                    <li>• Meeting and conference rooms</li>
                    <li>• Specialized equipment access</li>
                    <li>• 24/7 secure facility access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-300 mb-3">Support Services</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Expert mentorship program</li>
                    <li>• Legal and IP support</li>
                    <li>• Financial planning assistance</li>
                    <li>• Marketing and branding guidance</li>
                    <li>• Investor network access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'technologies':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Emerging Technologies</h1>
              <p className="text-xl text-blue-200 mb-8">
                Leveraging cutting-edge technologies to transform healthcare
              </p>
            </div>

            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-3">{tech.name}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{tech.description}</p>
                  <div>
                    <h4 className="text-lg font-medium text-cyan-300 mb-2">Key Applications:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {tech.applications.map((app, idx) => (
                        <div key={idx} className="bg-cyan-600/20 rounded-lg p-3">
                          <p className="text-white text-sm">{app}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'programs':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Innovation Programs</h1>
              <p className="text-xl text-purple-200 mb-8">
                Structured programs designed to accelerate innovation
              </p>
            </div>

            <div className="space-y-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-white">{program.name}</h3>
                    <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {program.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{program.description}</p>
                  <div>
                    <h4 className="text-lg font-medium text-purple-300 mb-2">Program Benefits:</h4>
                    <div className="grid md:grid-cols-4 gap-2">
                      {program.benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-purple-600/20 rounded-lg p-3 text-center">
                          <p className="text-white text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Application Process</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="text-white font-medium mb-2">Application</h4>
                  <p className="text-gray-300 text-sm">Submit your innovative idea</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="text-white font-medium mb-2">Review</h4>
                  <p className="text-gray-300 text-sm">Expert panel evaluation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="text-white font-medium mb-2">Interview</h4>
                  <p className="text-gray-300 text-sm">Pitch to selection committee</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h4 className="text-white font-medium mb-2">Onboarding</h4>
                  <p className="text-gray-300 text-sm">Join the program</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Success Stories</h1>
              <p className="text-xl text-yellow-200 mb-8">
                Celebrating the achievements of our innovation community
              </p>
            </div>

            <div className="space-y-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">{story.name}</h3>
                      <span className="bg-yellow-600/30 text-yellow-200 px-3 py-1 rounded-full text-sm">
                        {story.sector}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">{story.funding}</div>
                      <div className="text-gray-400 text-sm">Funding Raised</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-blue-300 mb-2">Achievement</h4>
                      <p className="text-gray-300">{story.achievement}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-green-300 mb-2">Impact</h4>
                      <p className="text-gray-300">{story.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Alumni Network</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                  <p className="text-gray-300">Graduated Startups</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                  <p className="text-gray-300">Successful Exits</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">5+</div>
                  <p className="text-gray-300">Unicorn Companies</p>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
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
                className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Globe</span>
              </button>
              
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Innovation Lab</h1>
                <p className="text-purple-200">Transforming Ideas into Reality</p>
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
                      ? 'bg-purple-600 text-white'
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

export default InnovationLab;

