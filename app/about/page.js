export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-green via-cream to-sand py-16 md:py-24 lg:py-32 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-green-dark mb-6 animate-fade-in-up">
              About MEUKART
            </h1>
            <div className="mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <p className="text-base sm:text-lg font-semibold text-secondary-green mb-2">
                Digital Market Intelligence & Trade Facilitation Platform
              </p>
              <p className="text-base sm:text-lg font-semibold text-secondary-green">
                for Medicinal Plants
              </p>
            </div>
            <p className="text-lg sm:text-xl text-dark-gray leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Empowering Medicinal Plant Farmers Through Market Transparency
            </p>
          </div>
        </div>
      </section>

      {/* Government Partnership Section */}
      <section className="py-16 md:py-24 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-6 animate-fade-in-up">Government-Backed Initiative</h2>
              <p className="text-base sm:text-lg text-dark-gray leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                MEUKART is a pilot project supported by the National Medicinal Plants Board (NMPB), 
                Ministry of AYUSH, Government of India, and implemented through the State Medicinal 
                Plant Board, Uttarakhand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-cream rounded-2xl p-6 md:p-8 text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-green rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-primary-green-dark mb-2">NMPB Supported</h3>
                <p className="text-gray text-sm md:text-base">National Medicinal Plants Board, Ministry of AYUSH</p>
              </div>

              <div className="bg-cream rounded-2xl p-6 md:p-8 text-center animate-scale-in" style={{animationDelay: '0.6s'}}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-green rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-primary-green-dark mb-2">State Facilitated</h3>
                <p className="text-gray text-sm md:text-base">State Medicinal Plant Board, Uttarakhand</p>
              </div>

              <div className="bg-cream rounded-2xl p-6 md:p-8 text-center animate-scale-in" style={{animationDelay: '0.8s'}}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-green rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-primary-green-dark mb-2">FPO Implemented</h3>
                <p className="text-gray text-sm md:text-base">FPOConnect India Pvt. Ltd., Haridwar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Updated */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-light-green/30 to-cream animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-6 animate-fade-in-up">Our Mission</h2>
              <p className="text-base sm:text-lg text-dark-gray leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                To establish a transparent, data-driven, and farmer-centric digital market intelligence 
                system for medicinal plants in Uttarakhand, enabling improved price realization, promoting 
                cultivation over wild collection, and strengthening sustainable medicinal plant value chains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-light-green rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary-green-dark mb-4">Market Transparency</h3>
                <p className="text-gray text-base leading-relaxed">
                  Providing reliable market intelligence on prices, arrivals, and demand trends to reduce 
                  information asymmetry and strengthen farmer bargaining power.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-light-green rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary-green-dark mb-4">Farmer Empowerment</h3>
                <p className="text-gray text-base leading-relaxed">
                  Supporting informed decision-making for medicinal plant cultivators and FPOs through 
                  market-linked advisories and data-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Project Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-8 md:mb-12 text-center">
              Uttarakhand Pilot Project
            </h2>
            <div className="bg-gradient-to-br from-light-green/30 to-cream rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary-green mb-2">12</div>
                  <div className="text-sm md:text-base text-dark-gray">Month Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary-green mb-2">5</div>
                  <div className="text-sm md:text-base text-dark-gray">Districts Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary-green mb-2">100+</div>
                  <div className="text-sm md:text-base text-dark-gray">Medicinal Plants Tracked</div>
                </div>
              </div>
              <p className="text-dark-gray text-base md:text-lg leading-relaxed text-center">
                The pilot phase focuses on selected medicinal plant clusters across Uttarakhand, 
                establishing market intelligence systems and farmer databases to create a replicable 
                model for nationwide implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-light-green/30 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-12 text-center">
              Project Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Market Intelligence Generation',
                  description: 'Generate reliable market data on wholesale prices, arrivals, and demand trends for medicinal plant species',
                  icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                },
                {
                  title: 'Trade Practice Documentation',
                  description: 'Document and systematize medicinal plant trade practices, grading norms, and payment mechanisms',
                  icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                },
                {
                  title: 'Platform Development',
                  description: 'Operationalize MEUKART as a dedicated digital platform for market information and advisory dissemination',
                  icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                },
                {
                  title: 'Farmer Advisories',
                  description: 'Provide market-linked advisories supporting informed decisions on harvesting, aggregation, and sales timing',
                  icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                },
                {
                  title: 'Cultivator Database',
                  description: 'Develop verified database of medicinal plant cultivators and cultivars for better planning and buyer engagement',
                  icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                },
                {
                  title: 'Pricing Framework',
                  description: 'Support differentiated pricing framework favoring cultivated material over wild-sourced produce',
                  icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                }
              ].map((objective, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-light-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={objective.icon}/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-green-dark mb-2">{objective.title}</h3>
                      <p className="text-gray text-sm leading-relaxed">{objective.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiaries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-12 text-center">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Medicinal Plant Cultivators', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                { title: 'Farmer Producer Organizations', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { title: 'Self-Help Groups', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                { title: 'Farmer Collectives', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
              ].map((beneficiary, index) => (
                <div key={index} className="bg-cream rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={beneficiary.icon}/>
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-primary-green-dark">{beneficiary.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
