import { Star, ExternalLink } from 'lucide-react';
import { ProductRecommendation } from '../data/productRecommendations';

interface ProductCardProps {
  product: ProductRecommendation;
}

export default function ProductCard({ product }: ProductCardProps) {
  const defaultImage = "https://images.pexels.com/photos/3735648/pexels-photo-3735648.jpeg?auto=compress&cs=tinysrgb&w=600";
  
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={product.imageUrl || defaultImage} 
          alt={product.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-l from-pink-500 to-violet-500 text-white px-3 py-1 text-sm font-medium rounded">
          {product.brand}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-gray-300" />
          </div>
        </div>
        
        <div className="mb-3">
          <p className="text-sm text-gray-500 mb-1">Type: <span className="font-medium text-gray-700 capitalize">{product.type}</span></p>
          <p className="text-sm text-gray-500 mb-2">For: <span className="font-medium text-gray-700">{product.concerns.join(', ')}</span></p>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">Key Ingredients:</p>
          <div className="flex flex-wrap">
            {product.keyIngredients.map((ingredient, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 mr-1 mb-1"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          {product.description}
        </p>
        
        {product.link && (
          <a 
            href={product.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700"
          >
            Learn More <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
