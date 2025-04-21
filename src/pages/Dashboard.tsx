import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import IngredientInput from '../components/IngredientInput';
import IngredientCard from '../components/IngredientCard';
import RecommendationForm from '../components/RecommendationForm';
import ProductCard from '../components/ProductCard';
import { analyzeIngredients } from '../utils/ingredientAnalyzer';
import { getRecommendedProducts, ProductRecommendation } from '../data/productRecommendations';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../utils/supabaseClient';
import { AlertTriangle, CheckCircle, AlertCircle, Save } from 'lucide-react';

interface AnalysisResult {
  ingredients: {
    name: string;
    purpose: string[];
    isSafe: boolean;
    caution: string[];
    notes: string;
    isHomeRemedy: boolean;
  }[];
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

export default function Dashboard() {
  const { profile } = useAuth();
  const [currentTab, setCurrentTab] = useState('analyze'); // 'analyze' or 'recommend'
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isRecommending, setIsRecommending] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [recommendations, setRecommendations] = useState<ProductRecommendation[]>([]);
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState<'skin' | 'hair'>('skin');
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAnalyze = async (data: {
    ingredients: string;
    productName: string;
    productType: 'skin' | 'hair';
    isHomeRemedy: boolean;
  }) => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    setProductName(data.productName);
    setProductType(data.productType);
    
    // Simulate API delay
    setTimeout(() => {
      const userSkinType = profile?.skin_type || 'normal';
      const userHairType = profile?.hair_type || 'normal';

      const results = analyzeIngredients(
        data.ingredients,
        data.productType,
        userSkinType,
        userHairType,
        data.isHomeRemedy
      );
      
      setAnalysisResult(results);
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleRecommend = async (data: {
    productType: string;
    concern: string;
    preferredIngredient: string;
  }) => {
    setIsRecommending(true);
    setRecommendations([]);
    
    // Simulate API delay
    setTimeout(() => {
      const userSkinType = profile?.skin_type || 'normal';
      const userHairType = profile?.hair_type || 'normal';

      const results = getRecommendedProducts(
        data.productType,
        data.concern,
        data.preferredIngredient,
        userSkinType,
        userHairType
      );
      
      setRecommendations(results);
      setIsRecommending(false);
    }, 1500);
  };

  const saveAnalysis = async () => {
    if (!analysisResult || !productName) return;
    
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('saved_products')
        .insert([
          {
            product_name: productName,
            type: productType,
            raw_ingredients: JSON.stringify(analysisResult.ingredients.map(i => i.name).join(', ')),
            parsed_results: JSON.stringify(analysisResult),
            user_id: profile?.id
          }
        ]);

      if (error) throw error;
      
      setSuccessMessage('Analysis saved successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error saving analysis:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const getSafetyScore = () => {
    if (!analysisResult) return null;
    
    const { safe, caution, unknown } = analysisResult.overallSafety;
    const total = safe + caution + unknown;
    
    // Calculate percentage of safe ingredients
    const safePercentage = Math.round((safe / total) * 100);
    
    let statusClass = '';
    let icon = null;
    
    if (safePercentage >= 80) {
      statusClass = 'bg-green-100 text-green-800 border-green-200';
      icon = <CheckCircle className="h-5 w-5 text-green-500 mr-2" />;
    } else if (safePercentage >= 60) {
      statusClass = 'bg-yellow-100 text-yellow-800 border-yellow-200';
      icon = <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />;
    } else {
      statusClass = 'bg-red-100 text-red-800 border-red-200';
      icon = <AlertCircle className="h-5 w-5 text-red-500 mr-2" />;
    }
    
    return (
      <div className={`flex items-center px-4 py-2 rounded-lg border ${statusClass}`}>
        {icon}
        <span className="font-medium">{safePercentage}% Safe</span>
        <span className="mx-2">|</span>
        <span>{safe} safe ingredients, {caution} cautioned</span>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Your Dashboard</h1>
        <p className="text-gray-600">
          Analyze products or get personalized recommendations based on your profile.
        </p>
      </div>
      
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="analyze" className="text-md">
            Ingredient Analyzer
          </TabsTrigger>
          <TabsTrigger value="recommend" className="text-md">
            Product Recommendations
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="analyze">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <IngredientInput onAnalyze={handleAnalyze} isLoading={isAnalyzing} />
            </div>
            
            <div className="md:col-span-2">
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center h-full py-16">
                  <div className="w-16 h-16 border-4 border-pink-300 border-t-violet-400 rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Analyzing ingredients...</p>
                </div>
              ) : analysisResult ? (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Analysis Results: <span className="text-pink-600">{productName}</span>
                    </h2>
                    
                    <div className="flex items-center">
                      {getSafetyScore()}
                      
                      <button 
                        onClick={saveAnalysis}
                        disabled={isSaving}
                        className="ml-4 inline-flex items-center px-3 py-2 rounded-md bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition-colors"
                      >
                        {isSaving ? (
                          <div className="w-4 h-4 border-2 border-violet-300 border-t-violet-600 rounded-full animate-spin mr-2"></div>
                        ) : (
                          <Save className="h-4 w-4 mr-2" />
                        )}
                        Save Analysis
                      </button>
                    </div>
                  </div>
                  
                  {successMessage && (
                    <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6 rounded-md">
                      <p className="text-green-700">{successMessage}</p>
                    </div>
                  )}
                  
                  {analysisResult.combinations.length > 0 && (
                    <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <h3 className="text-lg font-medium text-amber-800 mb-2">Ingredient Combinations Detected</h3>
                      {analysisResult.combinations.map((combo, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                          <div className="font-medium text-gray-700 mb-1">
                            {combo.ingredients.join(' + ')}
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            <span className="font-medium">Synergy:</span> {combo.synergy}
                          </p>
                          <p className="text-sm text-amber-700">
                            <span className="font-medium">Caution:</span> {combo.caution}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysisResult.ingredients.map((ingredient, index) => (
                      <IngredientCard
                        key={index}
                        name={ingredient.name}
                        purpose={ingredient.purpose}
                        isSafe={ingredient.isSafe}
                        caution={ingredient.caution}
                        notes={ingredient.notes}
                        isHomeRemedy={ingredient.isHomeRemedy}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-10 border border-gray-100">
                  <div className="bg-pink-100 rounded-full p-4 mb-4">
                    <AlertCircle className="h-10 w-10 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Analysis Yet</h3>
                  <p className="text-gray-600 text-center max-w-md mb-6">
                    Enter a product name and paste its ingredients list to get a detailed analysis.
                  </p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="recommend">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <RecommendationForm onSubmit={handleRecommend} isLoading={isRecommending} />
            </div>
            
            <div className="md:col-span-2">
              {isRecommending ? (
                <div className="flex flex-col items-center justify-center h-full py-16">
                  <div className="w-16 h-16 border-4 border-pink-300 border-t-violet-400 rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Finding the best products for you...</p>
                </div>
              ) : recommendations.length > 0 ? (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Recommended Products 
                    <span className="text-sm font-normal text-gray-500 ml-2">({recommendations.length} found)</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {recommendations.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-10 border border-gray-100">
                  <div className="bg-violet-100 rounded-full p-4 mb-4">
                    <AlertCircle className="h-10 w-10 text-violet-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Recommendations Yet</h3>
                  <p className="text-gray-600 text-center max-w-md mb-6">
                    Fill out the form to get personalized product recommendations based on your skin and hair type.
                  </p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}