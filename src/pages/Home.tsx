import { Link } from 'react-router-dom';
import { Sparkles, FlaskConical, Leaf, ScanSearch } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Decode What You're Actually Putting On Your Skin & Hair
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"> Know, Don't Show!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              GlowCheck+ helps you understand the science behind ingredients, catch harmful combinations, and get personalized product suggestions that are right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={user ? "/dashboard" : "/register"} 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <ScanSearch className="mr-2 h-5 w-5" />
                {user ? "Analyze Ingredients" : "Get Started"}
              </Link>
              <Link 
                to="/dashboard" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-pink-600 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-pink-100"
              >
                <FlaskConical className="mr-2 h-5 w-5" />
                Try a Demo
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-96 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-violet-200 opacity-60 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center gap-8 p-8">
              <img 
                src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Skincare Products" 
                className="w-1/2 h-auto object-cover rounded-xl shadow-xl z-10"
              />
              <img 
                src="https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Natural Ingredients" 
                className="w-1/2 h-auto object-cover rounded-xl shadow-xl z-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white bg-opacity-70 rounded-3xl shadow-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              In today's influencer-driven world, marketing often hides the real impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harmful chemicals are promoted under fancy names — not because they work, but because they're sponsored. Your skin and hair deserve better. Let's help you understand, analyze, and take control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-sm transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-pink-200 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ScanSearch className="text-pink-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Analyze Ingredients</h3>
              <p className="text-gray-600">
                Paste any product ingredient list and get a detailed breakdown of each component with safety ratings personalized to your skin and hair type.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-xl shadow-sm transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-violet-200 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="text-violet-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Product Recommendations</h3>
              <p className="text-gray-600">
                Based on your skin and hair type, we'll recommend products that are actually good for you, not just popular or highly advertised.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-green-200 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Leaf className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn About Home Remedies</h3>
              <p className="text-gray-600">
                Discover effective natural alternatives and learn the science behind traditional home remedies for both skin and hair care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How GlowCheck+ Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <ol className="relative border-l border-pink-300">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">
                    <span className="text-pink-600 font-semibold">1</span>
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Sign Up & Create Profile</h3>
                  <p className="text-gray-600 mb-4">
                    Create your account with your skin type (sensitive, oily, dry, combination) and hair type (dry, oily, curly, straight, frizzy, normal).
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">
                    <span className="text-pink-600 font-semibold">2</span>
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Enter Product Ingredients</h3>
                  <p className="text-gray-600 mb-4">
                    Paste the ingredient list from your product, add a product name, and specify if it's for skin or hair care.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">
                    <span className="text-pink-600 font-semibold">3</span>
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Detailed Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Receive a comprehensive breakdown of each ingredient, its purpose, and whether it's suitable for your specific skin or hair type.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -left-4 ring-4 ring-white">
                    <span className="text-pink-600 font-semibold">4</span>
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Save Results & Get Recommendations</h3>
                  <p className="text-gray-600 mb-4">
                    Save your analyses to reference later and get personalized product recommendations based on your profile and concerns.
                  </p>
                </li>
              </ol>
            </div>
            
            <div className="relative mt-8">
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/7290170/pexels-photo-7290170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Ingredients Analysis" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900 to-transparent opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl my-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make Informed Skincare & Haircare Choices?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have decoded their beauty products and discovered what really works for them.
          </p>
          <Link 
            to={user ? "/dashboard" : "/register"}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-pink-600 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {user ? "Go to Dashboard" : "Get Started Free"}
          </Link>
        </div>
      </section>
    </div>
  );
}
