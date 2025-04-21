import { CheckCircle, AlertCircle, Info } from 'lucide-react';

interface IngredientCardProps {
  name: string;
  purpose: string[];
  isSafe: boolean;
  caution: string[];
  notes: string;
  isHomeRemedy: boolean;
}

export default function IngredientCard({ 
  name, 
  purpose, 
  isSafe, 
  caution, 
  notes,
  isHomeRemedy
}: IngredientCardProps) {
  // Functions to get UI elements based on data
  const getPurposeIcons = (purposeList: string[]) => {
    const iconMap: Record<string, { icon: string; color: string }> = {
      'hydrating': { icon: '💧', color: 'text-blue-500' },
      'moisturizing': { icon: '🧴', color: 'text-blue-400' },
      'brightening': { icon: '🌟', color: 'text-yellow-500' },
      'anti-inflammatory': { icon: '🔥', color: 'text-red-500' },
      'exfoliating': { icon: '✨', color: 'text-purple-500' },
      'anti-aging': { icon: '⏱️', color: 'text-gray-500' },
      'anti-acne': { icon: '🧼', color: 'text-green-500' },
      'anti-bacterial': { icon: '🦠', color: 'text-green-600' },
      'soothing': { icon: '😌', color: 'text-blue-300' },
      'strengthening': { icon: '💪', color: 'text-orange-500' },
      'oil-control': { icon: '🛢️', color: 'text-yellow-600' },
    };

    return purposeList.map((p, index) => {
      const purpose = p.toLowerCase();
      const iconInfo = iconMap[purpose] || { icon: '⚗️', color: 'text-gray-500' };
      
      return (
        <span 
          key={index} 
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 mb-2 bg-opacity-10 ${iconInfo.color.replace('text', 'bg')}`}
        >
          <span className="mr-1">{iconInfo.icon}</span>
          {p}
        </span>
      );
    });
  };

  return (
    <div className={`
      border rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md
      ${isHomeRemedy ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}
      ${isSafe ? '' : 'border-l-4 border-l-amber-500'}
    `}>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {name}
            {isHomeRemedy && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                <Leaf className="mr-1 h-3 w-3" />
                Natural
              </span>
            )}
          </h3>
          {isSafe ? (
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
          )}
        </div>
        
        <div className="mb-3">
          <p className="text-sm text-gray-500 mb-1">Purpose:</p>
          <div className="flex flex-wrap">
            {getPurposeIcons(purpose)}
          </div>
        </div>
        
        {caution.length > 0 && (
          <div className="mb-3">
            <p className="text-sm text-gray-500 mb-1">Use with caution for:</p>
            <div className="flex flex-wrap">
              {caution.map((item, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 mr-2 mb-2"
                >
                  <AlertCircle className="mr-1 h-3 w-3" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {notes && (
          <div className="flex items-start mt-2 text-sm text-gray-600">
            <Info className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
            <p>{notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}