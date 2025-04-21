import { useState } from 'react';
import { Search, Coffee, FlaskConical } from 'lucide-react';

interface IngredientInputProps {
  onAnalyze: (data: {
    ingredients: string;
    productName: string;
    productType: 'skin' | 'hair';
    isHomeRemedy: boolean;
  }) => void;
  isLoading?: boolean;
}

export default function IngredientInput({ onAnalyze, isLoading = false }: IngredientInputProps) {
  const [ingredients, setIngredients] = useState('');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState<'skin' | 'hair'>('skin');
  const [isHomeRemedy, setIsHomeRemedy] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!ingredients.trim()) {
      setError('Please enter ingredient list');
      return;
    }
    
    if (!productName.trim()) {
      setError('Please enter product name');
      return;
    }
    
    setError('');
    onAnalyze({
      ingredients,
      productName,
      productType,
      isHomeRemedy
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Analyze Ingredients</h2>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              onClick={() => setProductType('skin')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                productType === 'skin'
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Skin Care
            </button>
            <button
              type="button"
              onClick={() => setProductType('hair')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                productType === 'hair'
                  ? 'bg-violet-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hair Care
            </button>
          </div>
        
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              id="productName"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g., Glow Serum, Herbal Shampoo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center mb-4">
            <input
              id="homeRemedy"
              type="checkbox"
              checked={isHomeRemedy}
              onChange={(e) => setIsHomeRemedy(e.target.checked)}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label htmlFor="homeRemedy" className="ml-2 block text-sm text-gray-700">
              This is a home remedy
            </label>
          </div>
          
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
            Ingredient List (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={5}
            placeholder="Paste ingredients here, separated by commas..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <p className="mt-1 text-xs text-gray-500">
            Tip: Copy and paste the ingredient list from the product packaging or website.
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            {isHomeRemedy ? (
              <>
                <Coffee className="h-4 w-4 mr-1" />
                Home remedy analysis
              </>
            ) : (
              <>
                <FlaskConical className="h-4 w-4 mr-1" />
                Product analysis
              </>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`
              inline-flex items-center px-4 py-2 rounded-md shadow-sm font-medium 
              ${isLoading 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600'}
            `}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin mr-2"></div>
                Analyzing...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Analyze
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}