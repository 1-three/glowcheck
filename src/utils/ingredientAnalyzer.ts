import { ingredients, combinationRules } from '../data/ingredients';

interface IngredientAnalysisResult {
  name: string;
  purpose: string[];
  isSafe: boolean;
  caution: string[];
  notes: string;
  isHomeRemedy: boolean;
}

interface AnalysisResults {
  ingredients: IngredientAnalysisResult[];
  combinations: {
    ingredients: string[];
    synergy: string;
    caution: string;
  }[];
  overallSafety: {
    safe: number;
    caution: number;
    unknown: number;
  };
}

export function analyzeIngredients(
  ingredientsList: string, 
  productType: 'skin' | 'hair', 
  userSkinType: string,
  userHairType: string,
  isHomeRemedy: boolean
): AnalysisResults {
  // Parse ingredients string into array
  const ingredientsArray = ingredientsList
    .split(',')
    .map(item => item.trim().toLowerCase())
    .filter(item => item.length > 0);

  const results: IngredientAnalysisResult[] = [];
  let safeCount = 0;
  let cautionCount = 0;
  let unknownCount = 0;
  
  // Analyze each ingredient
  for (const ingredientName of ingredientsArray) {
    const ingredient = ingredients.find(i => 
      i.name.toLowerCase() === ingredientName ||
      i.aliases?.some(alias => alias.toLowerCase() === ingredientName)
    );

    if (ingredient) {
      // Check if safe for the user's skin/hair type
      const isSafeForUser = productType === 'skin' 
        ? ingredient.skin_safe && !ingredient.caution_for.includes(userSkinType)
        : ingredient.hair_safe && !ingredient.caution_for.includes(userHairType);
        
      const result = {
        name: ingredient.name,
        purpose: ingredient.uses,
        isSafe: isSafeForUser,
        caution: ingredient.caution_for,
        notes: ingredient.notes,
        isHomeRemedy: ingredient.home_remedy
      };
      
      results.push(result);
      
      if (isSafeForUser) {
        safeCount++;
      } else {
        cautionCount++;
      }
    } else {
      // Ingredient not found in database
      results.push({
        name: ingredientName,
        purpose: ["unknown"],
        isSafe: true, // Assuming safe by default if unknown
        caution: [],
        notes: "This ingredient is not in our database yet.",
        isHomeRemedy: false
      });
      unknownCount++;
    }
  }

  // Check for combinations
  const combinations = [];
  for (const combo of combinationRules) {
    const comboIngredients = combo.combo;
    const hasAllIngredients = comboIngredients.every(ingredient => 
      ingredientsArray.includes(ingredient.toLowerCase())
    );
    
    if (hasAllIngredients) {
      combinations.push({
        ingredients: comboIngredients,
        synergy: combo.synergy,
        caution: combo.caution
      });
    }
  }

  return {
    ingredients: results,
    combinations,
    overallSafety: {
      safe: safeCount,
      caution: cautionCount,
      unknown: unknownCount
    }
  };
}