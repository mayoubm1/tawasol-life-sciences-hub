import React, { useState } from 'react';
import { lifeSciencesEducation } from '../data/globalHubs';

const LifeSciencesEducation = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('definition');

  const sections = [
    { id: 'definition', label: 'What is Life Sciences?', icon: '🧬' },
    { id: 'areas', label: 'Key Areas', icon: '🔬' },
    { id: 'impact', label: 'Global Impact', icon: '🌍' },
    { id: 'careers', label: 'Career Opportunities', icon: '💼' },
    { id: 'tawasol', label: 'Tawasol\'s Role', icon: '🏛️' }
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'definition':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">What is Life Sciences?</h1>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
                <p className="text-xl text-gray-300 leading-relaxed">
                  {lifeSciencesEducation.definition}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🔬 Scientific Foundation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Life Sciences builds upon fundamental scientific principles from biology, chemistry, physics, and mathematics to understand living systems at molecular, cellular, and organismal levels.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🏥 Healthcare Applications</h3>
                <p className="text-gray-300 leading-relaxed">
                  The field directly contributes to human health through drug discovery, medical device development, diagnostic tools, and therapeutic interventions that save and improve lives worldwide.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🧬 Innovation Driver</h3>
                <p className="text-gray-300 leading-relaxed">
                  Life Sciences is at the forefront of technological innovation, driving breakthroughs in gene therapy, personalized medicine, artificial intelligence, and biotechnology.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🌱 Sustainability Focus</h3>
                <p className="text-gray-300 leading-relaxed">
                  The field addresses global challenges including climate change, food security, and environmental sustainability through innovative biological solutions and green technologies.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Life Sciences Matters</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="text-lg font-medium text-white mb-2">Precision Medicine</h4>
                  <p className="text-gray-300 text-sm">Tailored treatments based on individual genetic profiles</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="text-lg font-medium text-white mb-2">Innovation</h4>
                  <p className="text-gray-300 text-sm">Cutting-edge technologies transforming healthcare</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌍</div>
                  <h4 className="text-lg font-medium text-white mb-2">Global Health</h4>
                  <p className="text-gray-300 text-sm">Solutions for worldwide health challenges</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'areas':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Key Areas of Life Sciences</h1>
              <p className="text-xl text-blue-200 mb-8">
                Explore the diverse fields that make up the life sciences ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifeSciencesEducation.keyAreas.map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{area.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Interdisciplinary Nature</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Life Sciences is inherently interdisciplinary, combining knowledge and methods from multiple fields to address complex biological questions and health challenges.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🧪</div>
                  <p className="text-white font-medium">Chemistry</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🧬</div>
                  <p className="text-white font-medium">Biology</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💻</div>
                  <p className="text-white font-medium">Computer Science</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <p className="text-white font-medium">Mathematics</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Global Impact of Life Sciences</h1>
              <p className="text-xl text-blue-200 mb-8">
                Understanding the transformative power of life sciences on society and economy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">💰 Economic Value</h3>
                <p className="text-gray-300 mb-4">{lifeSciencesEducation.globalImpact.economicValue}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Market Size</span>
                    <span className="text-white">$2+ Trillion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Annual Growth</span>
                    <span className="text-white">8-12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">R&D Investment</span>
                    <span className="text-white">$200+ Billion</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">👥 Employment</h3>
                <p className="text-gray-300 mb-4">{lifeSciencesEducation.globalImpact.employment}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Direct Jobs</span>
                    <span className="text-white">5+ Million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Indirect Jobs</span>
                    <span className="text-white">15+ Million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Average Salary</span>
                    <span className="text-white">Above Average</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🚀 Innovation</h3>
                <p className="text-gray-300 mb-4">{lifeSciencesEducation.globalImpact.innovation}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Patents Filed</span>
                    <span className="text-white">50,000+ Annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">New Drugs</span>
                    <span className="text-white">50+ Per Year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Clinical Trials</span>
                    <span className="text-white">300,000+ Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🏥 Health Outcomes</h3>
                <p className="text-gray-300 mb-4">{lifeSciencesEducation.globalImpact.healthOutcomes}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Life Expectancy</span>
                    <span className="text-white">+30 Years (Century)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Disease Eradication</span>
                    <span className="text-white">Multiple Diseases</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Quality of Life</span>
                    <span className="text-white">Significantly Improved</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">🌍 Global Challenges Addressed</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🦠</div>
                  <h4 className="text-lg font-medium text-white mb-2">Infectious Diseases</h4>
                  <p className="text-gray-300 text-sm">Vaccines, antibiotics, and antiviral treatments</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧬</div>
                  <h4 className="text-lg font-medium text-white mb-2">Genetic Disorders</h4>
                  <p className="text-gray-300 text-sm">Gene therapy and personalized medicine</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <h4 className="text-lg font-medium text-white mb-2">Sustainability</h4>
                  <p className="text-gray-300 text-sm">Biofuels, biodegradable materials, and green chemistry</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'careers':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Career Opportunities in Life Sciences</h1>
              <p className="text-xl text-blue-200 mb-8">
                Discover diverse and rewarding career paths in the life sciences industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifeSciencesEducation.careerOpportunities.map((career, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{career}</h3>
                  <p className="text-gray-300 text-sm">
                    {career.includes('Research') && 'Conduct cutting-edge research to advance scientific knowledge and develop new treatments.'}
                    {career.includes('Engineer') && 'Apply engineering principles to solve biological and medical challenges.'}
                    {career.includes('Coordinator') && 'Manage and coordinate clinical trials to test new treatments and therapies.'}
                    {career.includes('Specialist') && 'Develop and optimize pharmaceutical products and manufacturing processes.'}
                    {career.includes('Designer') && 'Design and develop innovative medical devices and diagnostic equipment.'}
                    {career.includes('Analyst') && 'Analyze biological data using computational tools and statistical methods.'}
                    {career.includes('Regulatory') && 'Ensure compliance with regulations and guide product approval processes.'}
                    {career.includes('Consultant') && 'Provide expertise on healthcare technology implementation and strategy.'}
                    {career.includes('Entrepreneur') && 'Start and lead innovative biotech companies and ventures.'}
                    {career.includes('Manager') && 'Manage medical affairs and communicate scientific information to stakeholders.'}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">📚 Educational Pathways</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Bachelor's Degree</h4>
                      <p className="text-gray-300 text-sm">Biology, Chemistry, Biotechnology, or related field</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Advanced Degrees</h4>
                      <p className="text-gray-300 text-sm">Master's or PhD for research and leadership roles</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Specialization</h4>
                      <p className="text-gray-300 text-sm">Focus on specific areas like genomics, drug discovery, or medical devices</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">💼 Industry Sectors</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Pharmaceutical Companies</span>
                    <span className="text-white">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Biotechnology Firms</span>
                    <span className="text-white">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Academic Institutions</span>
                    <span className="text-white">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Government Agencies</span>
                    <span className="text-white">10%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Consulting & Services</span>
                    <span className="text-white">10%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">🎯 Skills in Demand</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🧬</div>
                  <p className="text-white font-medium">Molecular Biology</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <p className="text-white font-medium">Data Analysis</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <p className="text-white font-medium">AI/Machine Learning</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <p className="text-white font-medium">Regulatory Knowledge</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tawasol':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Tawasol's Role in Life Sciences</h1>
              <p className="text-xl text-blue-200 mb-8">
                Leading Egypt's transformation into a global life sciences hub
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To establish Egypt as a leading destination for life sciences innovation, education, and investment in the MENA region, 
                bridging the gap between scientific research and practical healthcare solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🎓 Education Excellence</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• World-class life sciences university</li>
                  <li>• International faculty and partnerships</li>
                  <li>• Hands-on research opportunities</li>
                  <li>• Industry-aligned curriculum</li>
                  <li>• Entrepreneurship programs</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🔬 Research Innovation</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• State-of-the-art research facilities</li>
                  <li>• Collaborative research programs</li>
                  <li>• Technology transfer initiatives</li>
                  <li>• Clinical trial capabilities</li>
                  <li>• IP development and protection</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🏭 Industry Development</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Pharmaceutical manufacturing</li>
                  <li>• Biotech startup incubation</li>
                  <li>• Medical device development</li>
                  <li>• Supply chain optimization</li>
                  <li>• Regulatory support services</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">🌍 Global Partnerships</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• International research collaborations</li>
                  <li>• Student and faculty exchange</li>
                  <li>• Joint venture opportunities</li>
                  <li>• Knowledge sharing networks</li>
                  <li>• Investment partnerships</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">🎯 Strategic Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🇪🇬</div>
                  <h4 className="text-lg font-medium text-white mb-2">National Development</h4>
                  <p className="text-gray-300 text-sm">Supporting Egypt's Vision 2030 through scientific advancement and economic diversification</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌍</div>
                  <h4 className="text-lg font-medium text-white mb-2">Regional Leadership</h4>
                  <p className="text-gray-300 text-sm">Establishing Egypt as the MENA region's premier life sciences destination</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="text-lg font-medium text-white mb-2">Global Innovation</h4>
                  <p className="text-gray-300 text-sm">Contributing to worldwide scientific progress and healthcare advancement</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">📈 Expected Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-purple-300 mb-3">Economic Impact</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 10,000+ high-skilled jobs created</li>
                    <li>• $500M+ annual economic output</li>
                    <li>• 100+ startup companies launched</li>
                    <li>• Significant export revenue generation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-300 mb-3">Scientific Impact</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 500+ research publications annually</li>
                    <li>• 50+ patents filed per year</li>
                    <li>• 20+ clinical trials conducted</li>
                    <li>• Multiple breakthrough innovations</li>
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
                <h1 className="text-2xl font-bold text-white">Life Sciences Education</h1>
                <p className="text-blue-200">Understanding the Science of Life</p>
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

export default LifeSciencesEducation;

