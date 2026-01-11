'use client';

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all transform hover:scale-105 ${
            activeCategory === category
              ? 'bg-primary-green text-white shadow-lg'
              : 'bg-white text-dark-gray border-2 border-light-green hover:border-primary-green hover:text-primary-green shadow-sm'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
