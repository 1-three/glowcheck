export interface ProductRecommendation {
  id: string;
  name: string;
  brand: string;
  type: string;
  concerns: string[];
  keyIngredients: string[];
  description: string;
  imageUrl?: string;
  link?: string;
  forSkinTypes: string[];
  forHairTypes: string[];
}

export const productRecommendations: ProductRecommendation[] = [
  // Skin Products
  {
    id: "s1",
    name: "Vitamin C Brightening Serum",
    brand: "Aqualogica",
    type: "serum",
    concerns: ["dullness", "dark spots", "uneven tone"],
    keyIngredients: ["Vitamin C", "Hyaluronic Acid", "Niacinamide"],
    description: "Lightweight serum that brightens and evens skin tone while hydrating.",
    imageUrl: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: ["all", "normal", "combination", "oily"],
    forHairTypes: []
  },
  {
    id: "s2",
    name: "Hydrating Gel Moisturizer",
    brand: "Dot&Key",
    type: "moisturizer",
    concerns: ["dryness", "dehydration"],
    keyIngredients: ["Hyaluronic Acid", "Aloe Vera", "Ceramides"],
    description: "Oil-free gel moisturizer that deeply hydrates without clogging pores.",
    imageUrl: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: ["all", "oily", "combination", "sensitive"],
    forHairTypes: []
  },
  {
    id: "s3",
    name: "Salicylic Acid Cleanser",
    brand: "Dermaco",
    type: "cleanser",
    concerns: ["acne", "oiliness", "breakouts"],
    keyIngredients: ["Salicylic Acid", "Tea Tree Oil", "Glycerin"],
    description: "Gentle foaming cleanser that removes excess oil and treats breakouts.",
    imageUrl: "https://images.pexels.com/photos/3737586/pexels-photo-3737586.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: ["oily", "acne-prone", "combination"],
    forHairTypes: []
  },
  {
    id: "s4",
    name: "Barrier Repair Cream",
    brand: "Bioderma",
    type: "moisturizer",
    concerns: ["sensitivity", "dryness", "irritation"],
    keyIngredients: ["Ceramides", "Hyaluronic Acid", "Niacinamide"],
    description: "Rich but non-greasy cream that restores the skin's protective barrier.",
    imageUrl: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: ["dry", "sensitive", "normal"],
    forHairTypes: []
  },
  {
    id: "s5",
    name: "Neem Face Wash",
    brand: "Himalaya",
    type: "cleanser",
    concerns: ["acne", "oiliness", "pimples"],
    keyIngredients: ["Neem", "Turmeric"],
    description: "Ayurvedic face wash that fights acne-causing bacteria and purifies skin.",
    imageUrl: "https://images.pexels.com/photos/3737594/pexels-photo-3737594.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: ["oily", "acne-prone", "combination"],
    forHairTypes: []
  },
  
  // Hair Products
  {
    id: "h1",
    name: "Protein Hair Mask",
    brand: "Soulflower",
    type: "mask",
    concerns: ["damage", "breakage", "dryness"],
    keyIngredients: ["Keratin", "Argan Oil", "Vitamin E"],
    description: "Intensive repair mask that strengthens damaged hair and prevents breakage.",
    imageUrl: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: [],
    forHairTypes: ["dry", "damaged", "frizzy"]
  },
  {
    id: "h2",
    name: "Anti-Dandruff Shampoo",
    brand: "WOW",
    type: "shampoo",
    concerns: ["dandruff", "flaking", "itchy scalp"],
    keyIngredients: ["Tea Tree Oil", "Apple Cider Vinegar", "Zinc Pyrithione"],
    description: "Clarifying shampoo that eliminates dandruff and soothes an itchy scalp.",
    imageUrl: "https://images.pexels.com/photos/3735652/pexels-photo-3735652.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: [],
    forHairTypes: ["all", "oily"]
  },
  {
    id: "h3",
    name: "Frizz Control Serum",
    brand: "L'Oreal",
    type: "serum",
    concerns: ["frizz", "dryness", "flyaways"],
    keyIngredients: ["Argan Oil", "Vitamin E", "Silicones"],
    description: "Lightweight serum that tames frizz and adds shine without weighing hair down.",
    imageUrl: "https://images.pexels.com/photos/3736399/pexels-photo-3736399.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: [],
    forHairTypes: ["curly", "frizzy", "dry"]
  },
  {
    id: "h4",
    name: "Hydrating Shampoo",
    brand: "Dove",
    type: "shampoo",
    concerns: ["dryness", "dullness"],
    keyIngredients: ["Glycerin", "Coconut Oil", "Aloe Vera"],
    description: "Gentle cleansing shampoo that adds moisture while cleaning.",
    imageUrl: "https://images.pexels.com/photos/3737599/pexels-photo-3737599.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: [],
    forHairTypes: ["dry", "normal", "frizzy"]
  },
  {
    id: "h5",
    name: "Amla Hair Oil",
    brand: "Mamaearth",
    type: "oil",
    concerns: ["hair fall", "thinning", "dryness"],
    keyIngredients: ["Amla", "Coconut Oil", "Brahmi"],
    description: "Traditional ayurvedic hair oil that strengthens roots and promotes growth.",
    imageUrl: "https://images.pexels.com/photos/6621357/pexels-photo-6621357.jpeg?auto=compress&cs=tinysrgb&w=600",
    forSkinTypes: [],
    forHairTypes: ["all", "dry", "normal"]
  }
];

export function getRecommendedProducts(
  productType: string,
  concern: string,
  preferredIngredient: string = '',
  userSkinType: string = '',
  userHairType: string = ''
): ProductRecommendation[] {
  // Filter by product type first (skin or hair)
  const isForSkin = productType.includes('face') || 
                   productType.includes('skin') || 
                   productType === 'serum' || 
                   productType === 'moisturizer' || 
                   productType === 'cleanser';
  
  const isForHair = productType.includes('hair') || 
                   productType === 'shampoo' || 
                   productType === 'conditioner' || 
                   productType === 'mask' || 
                   productType === 'oil';

  // Initial filtering based on product type
  let filtered = productRecommendations.filter(product => {
    if (isForSkin && product.forSkinTypes.length > 0) {
      return true;
    }
    if (isForHair && product.forHairTypes.length > 0) {
      return true;
    }
    
    // If specific product type was provided
    return product.type.toLowerCase() === productType.toLowerCase();
  });
  
  // Further filter by concern
  if (concern) {
    filtered = filtered.filter(product => 
      product.concerns.some(c => c.toLowerCase().includes(concern.toLowerCase()))
    );
  }
  
  // Filter by preferred ingredient if provided
  if (preferredIngredient) {
    const preferredProducts = filtered.filter(product => 
      product.keyIngredients.some(i => 
        i.toLowerCase().includes(preferredIngredient.toLowerCase())
      )
    );
    
    // If products with preferred ingredient exist, prioritize them
    if (preferredProducts.length > 0) {
      filtered = preferredProducts;
    }
  }
  
  // Consider user's skin/hair type if available
  if (userSkinType && isForSkin) {
    const typeSuitableProducts = filtered.filter(product => 
      product.forSkinTypes.includes('all') || 
      product.forSkinTypes.includes(userSkinType)
    );
    
    if (typeSuitableProducts.length > 0) {
      filtered = typeSuitableProducts;
    }
  }
  
  if (userHairType && isForHair) {
    const typeSuitableProducts = filtered.filter(product => 
      product.forHairTypes.includes('all') || 
      product.forHairTypes.includes(userHairType)
    );
    
    if (typeSuitableProducts.length > 0) {
      filtered = typeSuitableProducts;
    }
  }
  
  // Return top 5 recommendations maximum
  return filtered.slice(0, 5);
}