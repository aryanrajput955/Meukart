export const herbs = [
  {
    id: 1,
    name: "Ashwagandha",
    category: "Immunity",
    description: "Known as Indian Ginseng, a powerful adaptogen that helps reduce stress and anxiety.",
    benefits: "Reduces stress, boosts immunity, improves energy levels and concentration",
    image: "/herbs/ashwagandha.jpg"
  },
  {
    id: 2,
    name: "Turmeric",
    category: "Immunity",
    description: "Golden spice with powerful anti-inflammatory and antioxidant properties.",
    benefits: "Anti-inflammatory, boosts immunity, supports joint health, aids digestion",
    image: "/herbs/turmeric.jpg"
  },
  {
    id: 3,
    name: "Tulsi",
    category: "Respiratory",
    description: "Holy Basil, revered for its healing properties and respiratory benefits.",
    benefits: "Supports respiratory health, reduces stress, boosts immunity, purifies blood",
    image: "/herbs/tulsi.jpg"
  },
  {
    id: 4,
    name: "Neem",
    category: "Skin Care",
    description: "Nature's pharmacy with powerful antibacterial and antifungal properties.",
    benefits: "Purifies blood, supports skin health, boosts immunity, detoxifies body",
    image: "/herbs/neem.jpg"
  },
  {
    id: 5,
    name: "Triphala",
    category: "Digestive",
    description: "A blend of three fruits that supports digestive health and detoxification.",
    benefits: "Improves digestion, detoxifies body, supports weight management, boosts immunity",
    image: "/herbs/triphala.jpg"
  },
  {
    id: 6,
    name: "Brahmi",
    category: "Wellness",
    description: "Brain tonic that enhances memory, concentration, and cognitive function.",
    benefits: "Improves memory, reduces anxiety, enhances focus, supports brain health",
    image: "/herbs/brahmi.jpg"
  },
  {
    id: 7,
    name: "Amla",
    category: "Immunity",
    description: "Indian Gooseberry, rich in Vitamin C and powerful antioxidants.",
    benefits: "Boosts immunity, improves digestion, enhances skin health, rich in Vitamin C",
    image: "/herbs/amla.jpg"
  },
  {
    id: 8,
    name: "Giloy",
    category: "Immunity",
    description: "Immunity booster known for its fever-reducing and detoxifying properties.",
    benefits: "Boosts immunity, reduces fever, detoxifies body, improves digestion",
    image: "/herbs/giloy.jpg"
  },
  {
    id: 9,
    name: "Shatavari",
    category: "Wellness",
    description: "Queen of herbs, supports hormonal balance and reproductive health.",
    benefits: "Balances hormones, supports reproductive health, boosts immunity, reduces stress",
    image: "/herbs/shatavari.jpg"
  },
  {
    id: 10,
    name: "Ginger",
    category: "Digestive",
    description: "Warming spice that aids digestion and reduces inflammation.",
    benefits: "Improves digestion, reduces nausea, anti-inflammatory, boosts metabolism",
    image: "/herbs/ginger.jpg"
  },
  {
    id: 11,
    name: "Aloe Vera",
    category: "Skin Care",
    description: "Miracle plant with soothing and healing properties for skin and digestion.",
    benefits: "Soothes skin, aids digestion, hydrates body, supports wound healing",
    image: "/herbs/aloe.jpg"
  },
  {
    id: 12,
    name: "Mulethi",
    category: "Respiratory",
    description: "Licorice root that soothes throat and supports respiratory health.",
    benefits: "Soothes throat, supports respiratory health, aids digestion, reduces inflammation",
    image: "/herbs/mulethi.jpg"
  }
];

export const categories = ["All", "Immunity", "Digestive", "Wellness", "Skin Care", "Respiratory"];

export const filterHerbsByCategory = (herbs, category) => {
  if (category === "All") return herbs;
  return herbs.filter(herb => herb.category === category);
};

export const searchHerbs = (herbs, searchTerm) => {
  if (!searchTerm) return herbs;
  const term = searchTerm.toLowerCase();
  return herbs.filter(herb => 
    herb.name.toLowerCase().includes(term) ||
    herb.description.toLowerCase().includes(term) ||
    herb.category.toLowerCase().includes(term)
  );
};
