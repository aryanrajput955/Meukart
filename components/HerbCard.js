export default function HerbCard({ herb, index = 0 }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Image Container */}
      <div className="relative h-56 md:h-64 bg-light-green overflow-hidden group">
        <img
          src={herb.image}
          alt={herb.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-primary-green text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg animate-scale-in">
          {herb.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-semibold text-primary-green-dark mb-3 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
          {herb.name}
        </h3>
        <p className="text-gray text-sm md:text-base mb-4 line-clamp-2 leading-relaxed animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
          {herb.description}
        </p>
        
        {/* Benefits */}
        {herb.benefits && (
          <div className="mb-4 flex-1 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
            <p className="text-xs md:text-sm text-dark-gray font-semibold mb-2">Key Benefits:</p>
            <p className="text-xs md:text-sm text-gray line-clamp-2 leading-relaxed">{herb.benefits}</p>
          </div>
        )}

        {/* Learn More Link */}
        <button className="text-primary-green text-sm md:text-base font-semibold hover:text-secondary-green transition-colors flex items-center gap-2 mt-auto animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
