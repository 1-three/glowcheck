import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Settings, LogOut } from 'lucide-react';

export default function Profile() {
  const { profile, updateProfile, signOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [skinType, setSkinType] = useState(profile?.skin_type || '');
  const [hairType, setHairType] = useState(profile?.hair_type || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await updateProfile({
        skin_type: skinType,
        hair_type: hairType
      });
      
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Profile</h1>
        <p className="text-gray-600">
          View and manage your account settings.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-8">
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-lg">
              <User className="h-12 w-12 text-gray-600" />
            </div>
          </div>
          <h2 className="text-white text-center mt-4 text-xl font-semibold">
            {profile?.email}
          </h2>
        </div>
        
        <div className="p-6">
          {successMessage && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-md">
              <p className="text-green-700">{successMessage}</p>
            </div>
          )}
          
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="skinType" className="block text-sm font-medium text-gray-700 mb-2">
                  Skin Type
                </label>
                <select
                  id="skinType"
                  value={skinType}
                  onChange={(e) => setSkinType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="sensitive">Sensitive</option>
                  <option value="oily">Oily</option>
                  <option value="dry">Dry</option>
                  <option value="combination">Combination</option>
                  <option value="normal">Normal</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="hairType" className="block text-sm font-medium text-gray-700 mb-2">
                  Hair Type
                </label>
                <select
                  id="hairType"
                  value={hairType}
                  onChange={(e) => setHairType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="dry">Dry</option>
                  <option value="oily">Oily</option>
                  <option value="curly">Curly</option>
                  <option value="straight">Straight</option>
                  <option value="frizzy">Frizzy</option>
                  <option value="normal">Normal</option>
                </select>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    px-4 py-2 rounded-md text-white bg-gradient-to-r from-pink-500 to-violet-500
                    hover:from-pink-600 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                  `}
                >
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Your Skin Type</h3>
                  <p className="text-lg font-semibold text-gray-800 capitalize">{profile?.skin_type || 'Not set'}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Your Hair Type</h3>
                  <p className="text-lg font-semibold text-gray-800 capitalize">{profile?.hair_type || 'Not set'}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  onClick={() => setIsEditing(true)}
                  className="mb-4 sm:mb-0 inline-flex items-center px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Edit Profile
                </button>
                
                <button
                  onClick={handleSignOut}
                  className="inline-flex items-center px-4 py-2 rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}