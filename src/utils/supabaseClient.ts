import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create the Supabase client
let supabase;

try {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      `Missing environment variables: ${!supabaseUrl ? 'VITE_SUPABASE_URL' : ''} ${
        !supabaseAnonKey ? 'VITE_SUPABASE_ANON_KEY' : ''
      }`
    );
  }
  
  // Create client without additional validation
  supabase = createClient(supabaseUrl, supabaseAnonKey);
  console.log('Supabase client initialized successfully');
} catch (error) {
  console.error('Failed to initialize Supabase client:', error);
  // Create a placeholder object
  supabase = new Proxy({}, {
    get: () => {
      throw new Error(
        'Supabase client initialization failed. Please check your environment variables and Supabase setup.'
      );
    }
  });
}

export { supabase };