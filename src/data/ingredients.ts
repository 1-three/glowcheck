// This is a sample of the ingredients database
// In a production app, this would be much more extensive (200+ entries)

export interface Ingredient {
  name: string;
  aliases?: string[];
  uses: string[];
  skin_safe: boolean;
  hair_safe: boolean;
  caution_for: string[];
  type: 'synthetic' | 'natural';
  home_remedy: boolean;
  notes: string;
}

export interface CombinationRule {
  combo: string[];
  synergy: string;
  caution: string;
}

export const ingredients: Ingredient[] = [
  {
    name: "Niacinamide",
    aliases: ["Nicotinamide", "Vitamin B3"],
    uses: ["brightening", "pore-refining", "anti-inflammatory"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["very sensitive skin"],
    type: "synthetic",
    home_remedy: false,
    notes: "Works well with most ingredients. May cause flushing when used with Vitamin C."
  },
  {
    name: "Hyaluronic Acid",
    aliases: ["Sodium Hyaluronate"],
    uses: ["hydrating", "plumping", "moisture-binding"],
    skin_safe: true,
    hair_safe: true,
    caution_for: [],
    type: "synthetic",
    home_remedy: false,
    notes: "Best applied to damp skin. Multiple molecular weights provide deeper hydration."
  },
  {
    name: "Retinol",
    aliases: ["Vitamin A"],
    uses: ["anti-aging", "acne-treatment", "cell-turnover"],
    skin_safe: true,
    hair_safe: false,
    caution_for: ["sensitive skin", "dry skin", "pregnancy"],
    type: "synthetic",
    home_remedy: false,
    notes: "Use at night. Start with low concentration. Always use sunscreen during day."
  },
  {
    name: "Salicylic Acid",
    aliases: ["BHA", "Beta Hydroxy Acid"],
    uses: ["exfoliating", "anti-acne", "oil-control"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["very dry skin", "sensitive skin"],
    type: "synthetic",
    home_remedy: false,
    notes: "Oil-soluble acid that penetrates pores. Can be drying."
  },
  {
    name: "Glycolic Acid",
    aliases: ["AHA", "Alpha Hydroxy Acid"],
    uses: ["exfoliating", "brightening", "anti-aging"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["sensitive skin"],
    type: "synthetic",
    home_remedy: false,
    notes: "Water-soluble acid that works on skin surface. Increases sun sensitivity."
  },
  {
    name: "Vitamin C",
    aliases: ["Ascorbic Acid", "L-Ascorbic Acid", "Sodium Ascorbyl Phosphate"],
    uses: ["antioxidant", "brightening", "collagen-boosting"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["very sensitive skin"],
    type: "synthetic",
    home_remedy: false,
    notes: "Unstable ingredient. Best used in morning. Look for stabilized formulations."
  },
  {
    name: "Turmeric",
    aliases: ["Haldi", "Curcuma longa"],
    uses: ["anti-inflammatory", "brightening", "antioxidant"],
    skin_safe: true,
    hair_safe: true,
    caution_for: [],
    type: "natural",
    home_remedy: true,
    notes: "Can stain skin temporarily. Mix with other ingredients to reduce staining."
  },
  {
    name: "Aloe Vera",
    aliases: ["Aloe Barbadensis"],
    uses: ["soothing", "hydrating", "healing"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["aloe allergies"],
    type: "natural",
    home_remedy: true,
    notes: "Calming for sunburns and irritation. Good for all skin types."
  },
  {
    name: "Coconut Oil",
    aliases: ["Cocos Nucifera Oil"],
    uses: ["moisturizing", "conditioning", "strengthening"],
    skin_safe: false,
    hair_safe: true,
    caution_for: ["acne-prone skin", "oily skin"],
    type: "natural",
    home_remedy: true,
    notes: "Highly comedogenic for facial use. Excellent for hair conditioning."
  },
  {
    name: "Tea Tree Oil",
    aliases: ["Melaleuca Alternifolia"],
    uses: ["anti-bacterial", "anti-acne", "purifying"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["sensitive skin", "dry skin"],
    type: "natural",
    home_remedy: true,
    notes: "Always dilute before use. Potent anti-bacterial properties."
  },
  {
    name: "Curd",
    aliases: ["Yogurt", "Dahi"],
    uses: ["exfoliating", "moisturizing", "soothing"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["dairy allergies"],
    type: "natural",
    home_remedy: true,
    notes: "Contains lactic acid for gentle exfoliation. Good protein source for hair."
  },
  {
    name: "Honey",
    aliases: ["Mel"],
    uses: ["humectant", "anti-bacterial", "soothing"],
    skin_safe: true,
    hair_safe: true,
    caution_for: [],
    type: "natural",
    home_remedy: true,
    notes: "Natural humectant that draws moisture into skin."
  },
  {
    name: "Neem",
    aliases: ["Azadirachta Indica"],
    uses: ["anti-bacterial", "anti-fungal", "purifying"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["very sensitive skin"],
    type: "natural",
    home_remedy: true,
    notes: "Bitter smell but excellent for acne and scalp issues."
  },
  {
    name: "Amla",
    aliases: ["Indian Gooseberry", "Phyllanthus Emblica"],
    uses: ["vitamin C source", "strengthening", "conditioning"],
    skin_safe: true,
    hair_safe: true,
    caution_for: [],
    type: "natural",
    home_remedy: true,
    notes: "High vitamin C content. Traditional remedy for hair growth and strength."
  },
  {
    name: "Lemon",
    aliases: ["Citrus Limon"],
    uses: ["brightening", "oil-control", "astringent"],
    skin_safe: false,
    hair_safe: true,
    caution_for: ["sensitive skin", "dry skin"],
    type: "natural",
    home_remedy: true,
    notes: "Very acidic and can cause irritation. Always dilute. Increases sun sensitivity."
  },
  {
    name: "Apple Cider Vinegar",
    aliases: ["ACV"],
    uses: ["balancing pH", "clarifying", "dandruff-control"],
    skin_safe: false,
    hair_safe: true,
    caution_for: ["sensitive skin", "color-treated hair"],
    type: "natural",
    home_remedy: true,
    notes: "Always dilute before use. Can help balance scalp pH."
  },
  {
    name: "Curry Leaves",
    aliases: ["Murraya Koenigii"],
    uses: ["strengthening", "anti-hair fall", "conditioning"],
    skin_safe: false,
    hair_safe: true,
    caution_for: [],
    type: "natural",
    home_remedy: true,
    notes: "Traditional remedy for hair fall. Usually used with coconut oil."
  },
  {
    name: "Saffron",
    aliases: ["Kesar", "Crocus Sativus"],
    uses: ["brightening", "even-toning", "anti-inflammatory"],
    skin_safe: true,
    hair_safe: false,
    caution_for: ["pregnancy"],
    type: "natural",
    home_remedy: true,
    notes: "Expensive but potent brightening agent. Often paired with milk."
  },
  {
    name: "Multani Mitti",
    aliases: ["Fuller's Earth", "Clay"],
    uses: ["oil-absorbing", "detoxifying", "pore-cleansing"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["dry skin"],
    type: "natural",
    home_remedy: true,
    notes: "Excellent for oily skin. Can be drying, so follow with moisturizer."
  },
  {
    name: "Rosehip Oil",
    aliases: ["Rosa Canina Fruit Oil"],
    uses: ["moisturizing", "anti-aging", "brightening"],
    skin_safe: true,
    hair_safe: true,
    caution_for: ["very oily skin"],
    type: "natural",
    home_remedy: false,
    notes: "Rich in vitamins A and C. Good for scars and hyperpigmentation."
  }
];

export const combinationRules: CombinationRule[] = [
  {
    combo: ["Turmeric", "Curd"],
    synergy: "Brightening, anti-inflammatory, moisturizing",
    caution: "May stain skin, patch test advised"
  },
  {
    combo: ["Turmeric", "Honey"],
    synergy: "Anti-bacterial, soothing, brightening",
    caution: "May stain skin"
  },
  {
    combo: ["Neem", "Turmeric"],
    synergy: "Powerful anti-acne, purifying, anti-bacterial",
    caution: "Can be drying, use moisturizer after"
  },
  {
    combo: ["Coconut Oil", "Curry Leaves"],
    synergy: "Hair strengthening, anti-hair fall",
    caution: "Not suitable for oily scalps without thorough rinsing"
  },
  {
    combo: ["Aloe Vera", "Honey"],
    synergy: "Hydrating, soothing, healing",
    caution: "None significant"
  },
  {
    combo: ["Multani Mitti", "Rose Water"],
    synergy: "Cooling, oil-control, pore-refining",
    caution: "Can be very drying for already dry skin"
  },
  {
    combo: ["Vitamin C", "Niacinamide"],
    synergy: "None - these ingredients can inactivate each other",
    caution: "May cause flushing, better to use separately"
  },
  {
    combo: ["Retinol", "Acids"],
    synergy: "None",
    caution: "Increased irritation risk, use on alternate days"
  },
  {
    combo: ["Hyaluronic Acid", "Vitamin C"],
    synergy: "Hydrating and brightening, collagen-boosting",
    caution: "None significant"
  },
  {
    combo: ["Amla", "Coconut Oil"],
    synergy: "Hair strengthening, nourishing, promotes growth",
    caution: "None significant"
  }
];