'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import HerbCard from '@/components/HerbCard';
import { herbs, categories, filterHerbsByCategory, searchHerbs } from '@/data/herbs';
import Link from 'next/link';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  
  // Ref for the results section
  const resultsRef = useRef(null);

  // Filter and search herbs
  const filteredHerbs = useMemo(() => {
    let result = filterHerbsByCategory(herbs, activeCategory);
    result = searchHerbs(result, searchTerm);
    return result;
  }, [searchTerm, activeCategory]);

  // Get featured herbs (first 4 herbs)
  const featuredHerbs = herbs.slice(0, 4);

  // Auto-scroll to results when user presses Enter
  useEffect(() => {
    if (shouldScroll && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShouldScroll(false);
    }
  }, [shouldScroll]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setEmail('');
    setTimeout(() => setNewsletterSubmitted(false), 5000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-green via-cream to-sand py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-green/10 rounded-full text-sm font-semibold text-primary-green mb-4">
              🏛️ A National Medicinal Plants Board Initiative
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-green-dark mb-6 leading-tight">
              Empowering <span className="text-secondary-green">Medicinal Plant Farmers</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-gray mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Government-backed digital platform providing market intelligence, price transparency, 
              and trade facilitation for medicinal plant cultivators and FPOs across Uttarakhand.
            </p>
            
            {/* Search Bar */}
            <div className="mb-10 md:mb-12">
              <SearchBar 
                value={searchTerm} 
                onChange={setSearchTerm}
                onSearch={() => setShouldScroll(true)}
                placeholder="Search market prices & advisories for medicinal plants..."
              />
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary-green mb-1">1000+</div>
                <div className="text-xs md:text-sm text-gray">Cultivators</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary-green mb-1">100+</div>
                <div className="text-xs md:text-sm text-gray">Plants Tracked</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary-green mb-1">5</div>
                <div className="text-xs md:text-sm text-gray">Districts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Herbs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-light-green rounded-full text-sm font-semibold text-primary-green mb-4">
              📊 Market Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-4">
              Tracked Medicinal Plants
            </h2>
            <p className="text-gray max-w-2xl mx-auto text-base sm:text-lg">
              Access real-time market prices and trends for key medicinal plants across Uttarakhand markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredHerbs.map((herb) => (
              <HerbCard key={herb.id} herb={herb} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-light-green/30 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-4">
              How It Works
            </h2>
            <p className="text-gray max-w-2xl mx-auto text-base sm:text-lg">
              Your journey to natural wellness in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-green rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary-green rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-green-dark mb-3">Browse & Select</h3>
              <p className="text-gray text-sm md:text-base">Explore our curated collection of premium Ayurvedic herbs</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-green rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary-green rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-green-dark mb-3">Consult Expert</h3>
              <p className="text-gray text-sm md:text-base">Get personalized recommendations from our Ayurvedic experts</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-green rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary-green rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-green-dark mb-3">Place Order</h3>
              <p className="text-gray text-sm md:text-base">Secure checkout with multiple payment options available</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-green rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary-green rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-green-dark mb-3">Receive & Thrive</h3>
              <p className="text-gray text-sm md:text-base">Fast delivery to your doorstep, start your wellness journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-4">
              Browse by Category
            </h2>
            <p className="text-gray max-w-2xl mx-auto text-base sm:text-lg">
              Explore our curated collection of Ayurvedic herbs organized by health benefits
            </p>
          </div>
          
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Herbs Grid Section */}
      <section ref={resultsRef} className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-4">
              {searchTerm ? 'Search Results' : activeCategory === 'All' ? 'All Herbs' : `${activeCategory} Herbs`}
            </h2>
            <p className="text-gray text-base sm:text-lg">
              {filteredHerbs.length} {filteredHerbs.length === 1 ? 'herb' : 'herbs'} found
            </p>
          </div>

          {filteredHerbs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredHerbs.map((herb) => (
                <HerbCard key={herb.id} herb={herb} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 md:py-20">
              <div className="text-6xl mb-6">🌿</div>
              <h3 className="text-xl md:text-2xl font-semibold text-dark-gray mb-3">No herbs found</h3>
              <p className="text-gray mb-8 text-base">Try adjusting your search or filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="px-8 py-3 bg-primary-green text-white rounded-full hover:bg-secondary-green transition-colors font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 md:py-24 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by Wellness Seekers Nationwide
            </h2>
            <p className="text-light-green max-w-2xl mx-auto text-base sm:text-lg">
              Join thousands who have transformed their health with our authentic Ayurvedic herbs
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-light-green text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-light-green text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-light-green text-sm md:text-base">Organic Certified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-light-green text-sm md:text-base">Expert Consultations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-light-green rounded-full text-sm font-semibold text-primary-green mb-4">
              ⭐ Customer Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray max-w-2xl mx-auto text-base sm:text-lg">
              Real experiences from people who trust Meukart for their wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  P
                </div>
                <div>
                  <div className="font-semibold text-primary-green-dark">Priya Sharma</div>
                  <div className="text-sm text-gray">Haridwar, Uttarakhand</div>
                </div>
              </div>
              <div className="flex mb-4 text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray text-sm md:text-base leading-relaxed">
                "Meukart's Ashwagandha has been a game-changer for my stress levels. The quality is exceptional and delivery was super fast. Highly recommend!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  R
                </div>
                <div>
                  <div className="font-semibold text-primary-green-dark">Rajesh Kumar</div>
                  <div className="text-sm text-gray">Delhi, India</div>
                </div>
              </div>
              <div className="flex mb-4 text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray text-sm md:text-base leading-relaxed">
                "I've been using their Triphala for digestive health and the results are amazing. Pure, authentic products with great customer service."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  A
                </div>
                <div>
                  <div className="font-semibold text-primary-green-dark">Anita Desai</div>
                  <div className="text-sm text-gray">Bangalore, Karnataka</div>
                </div>
              </div>
              <div className="flex mb-4 text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray text-sm md:text-base leading-relaxed">
                "The expert consultation helped me choose the right herbs for my needs. Truly authentic Ayurvedic products. Will definitely order again!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-light-green/30 to-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-green-dark mb-4">
              Why Choose Meukart?
            </h2>
            <p className="text-gray max-w-2xl mx-auto text-base sm:text-lg">
              We bring you the finest Ayurvedic herbs with a commitment to quality and authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-light-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary-green-dark mb-3">100% Authentic</h3>
              <p className="text-sm md:text-base text-gray leading-relaxed">Sourced directly from certified organic farms</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-light-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary-green-dark mb-3">Quality Assured</h3>
              <p className="text-sm md:text-base text-gray leading-relaxed">Rigorous testing for purity and potency</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-light-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary-green-dark mb-3">Fast Delivery</h3>
              <p className="text-sm md:text-base text-gray leading-relaxed">Quick and secure shipping to your doorstep</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-light-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary-green-dark mb-3">Expert Guidance</h3>
              <p className="text-sm md:text-base text-gray leading-relaxed">Ayurvedic consultation and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-green to-secondary-green rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
            <div className="mb-6">
              <div className="text-4xl md:text-5xl mb-4">�</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Get Market Updates
              </h2>
              <p className="text-light-green text-base sm:text-lg max-w-xl mx-auto">
                Subscribe to receive weekly market prices, advisories, and trade insights for medicinal plants
                Get exclusive wellness tips, Ayurvedic recipes, and special offers delivered to your inbox
              </p>
            </div>

            {newsletterSubmitted ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <div className="text-5xl mb-3">✅</div>
                <p className="text-lg font-semibold">Thank you for subscribing!</p>
                <p className="text-sm text-light-green mt-2">Check your inbox for wellness tips</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 rounded-full text-dark-gray focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-primary-green rounded-full font-semibold hover:bg-light-green transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-light-green mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-green-dark to-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-lg sm:text-xl text-light-green mb-10 md:mb-12 leading-relaxed">
              Discover the healing power of Ayurveda with our premium herbs and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-white text-primary-green rounded-full font-semibold hover:bg-light-green transition-colors text-center"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-green transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
