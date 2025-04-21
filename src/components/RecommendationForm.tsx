import { useState } from 'react';
import { FlaskConical, ShoppingBag } from 'lucide-react';

interface RecommendationFormProps {
  onSubmit: (data: {
    productName: string;
    desiredResult: string;
    preferredIngredient: string;
  }) => void;
  isLoading?: boolean;
}

export default function RecommendationForm({ onSubmit, isLoading = false }: RecommendationFormProps) {
  const [productName, setProductName] = useState('');
  const [desiredResult, setDesiredResult] = useState('');
  const [preferredIngredient, setPreferredIngredient] = useState('');
  const [error, setError] = useState('');

  const popularIngredients = [
    'Niacinamide', 'Vitamin C', 'Hyaluronic Acid', 
    'Retinol', 'Aloe Vera', 'Tea Tree', 'Coconut Oil', 
    'Salicylic Acid', 'Glycolic Acid', 'Almond Oil'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!productName) {
      setError('Please enter a product name');
      return;
    }
    
    if (!desiredResult) {
      setError('Please enter your desired result');
      return;
    }
    
    setError('');
    onSubmit({
      productName,
      desiredResult,
      preferredIngredient
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Product Recommendations</h2>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="e.g. Face wash, Shampoo, etc."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="desiredResult" className="block text-sm font-medium text-gray-700 mb-2">
            Desired Result / Concern
          </label>
          <input
            id="desiredResult"
            type="text"
            value={desiredResult}
            onChange={(e) => setDesiredResult(e.target.value)}
            placeholder="e.g. Acne marks, Dryness, etc."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
          
          <div className="mb-6">
            <label htmlFor="preferredIngredient" className="block text-sm font-medium text-gray-700 mb-2">
              Any preferred ingredient? (Optional)
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {popularIngredients.map((ingredient) => (
                <button
                  key={ingredient}
                  type="button"
                  onClick={() => setPreferredIngredient(ingredient)}
                  className={`px-3 py-1 text-xs rounded-full ${
                    preferredIngredient === ingredient
                      ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {ingredient}
                </button>
              ))}
            </div>
            <input
              id="preferredIngredient"
              type="text"
              value={preferredIngredient}
              onChange={(e) => setPreferredIngredient(e.target.value)}
              placeholder="Enter ingredient name or click one above"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <FlaskConical className="h-4 w-4 mr-1" />
            Based on your profile
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !productName || !desiredResult}
            className={`
              inline-flex items-center px-4 py-2 rounded-md shadow-sm font-medium
              ${(!productName || !desiredResult || isLoading)
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600'}
            `}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin mr-2"></div>
                Finding products...
              </>
            ) : (
              <>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Get Recommendations
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
