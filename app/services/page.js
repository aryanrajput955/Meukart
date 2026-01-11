export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-green via-cream to-sand py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-green-dark mb-6">
              Platform Services
            </h1>
            <p className="text-lg sm:text-xl text-dark-gray leading-relaxed">
              Comprehensive digital market intelligence and trade facilitation solutions for medicinal plant stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Service 1: Market Intelligence Dashboard */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-green to-secondary-green rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-9 h-9 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-green-dark mb-4">
                Market Intelligence Dashboard
              </h3>
              <p className="text-gray text-base md:text-lg leading-relaxed mb-6">
                Real-time and historical data on medicinal plant markets, enabling informed decision-making for farmers and FPOs.
              </p>
              <ul className="space-y-3">
                {[
                  'Species-wise wholesale prices and arrival data',
                  'Inter-market price differentials and trends',
                  'Seasonal demand pattern analysis',
                  'Historical data for planning and forecasting',
                  'Market-wise comparative analytics'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-secondary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-dark-gray text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2: Market-Linked Advisories */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-green to-secondary-green rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-9 h-9 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-green-dark mb-4">
                Market-Linked Advisories
              </h3>
              <p className="text-gray text-base md:text-lg leading-relaxed mb-6">
                Actionable guidance converting market intelligence into decisions for optimal harvest timing and sales strategy.
              </p>
              <ul className="space-y-3">
                {[
                  'Harvest timing recommendations based on market prices',
                  'Aggregation strategy guidance for FPOs',
                  'Quality requirements and buyer expectations',
                  'SMS and digital advisory dissemination',
                  'Species-specific market insights'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-secondary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-dark-gray text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3: Cultivator & Cultivar Registry */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-green to-secondary-green rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-9 h-9 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-green-dark mb-4">
                Cultivator & Cultivar Registry
              </h3>
              <p className="text-gray text-base md:text-lg leading-relaxed mb-6">
                Structured digital database connecting cultivators with market opportunities and institutional support systems.
              </p>
              <ul className="space-y-3">
                {[
                  'Digital registration for medicinal plant cultivators',
                  'Species-wise cultivation data and acreage',
                  'Production estimates and harvest records',
                  'FPO and collective linkages',
                  'Buyer engagement and quality verification'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-secondary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-dark-gray text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 4: Trade Facilitation & Documentation */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-green to-secondary-green rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-9 h-9 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-green-dark mb-4">
                Trade Facilitation & Documentation
              </h3>
              <p className="text-gray text-base md:text-lg leading-relaxed mb-6">
                Transparent documentation of trade practices, standards, and norms to streamline medicinal plant commerce.
              </p>
              <ul className="space-y-3">
                {[
                  'Trade practice documentation and transparency',
                  'Grading norms and quality standards',
                  'Payment mechanisms and market behavior',
                  'HS code reference for trade classification',
                  'Pricing framework supporting cultivated produce'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-secondary-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-dark-gray text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Institutional Integration */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-light-green/30 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-6">
                Institutional Integration
              </h2>
              <p className="text-base sm:text-lg text-dark-gray leading-relaxed">
                MEUKART connects with existing government systems and extension services for wider reach and institutional validation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-light-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-green-dark mb-2">Call Centre Linkages</h3>
                <p className="text-sm text-gray">Integration with agricultural helplines for wider advisory reach</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-light-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-green-dark mb-2">Government Schemes</h3>
                <p className="text-sm text-gray">Coordination with NMPB and state programs</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-light-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-green-dark mb-2">Extension Services</h3>
                <p className="text-sm text-gray">Collaboration with agricultural extension networks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-green to-secondary-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join the MEUKART Platform
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Register as a cultivator, FPO, or institutional partner to access market intelligence and improve price realization
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-green px-8 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
