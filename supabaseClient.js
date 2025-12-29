import { createClient } from '@supabase/supabase-js';

// Supabase credentials from user context
const supabaseUrl = 'https://vrfyjirddfdnwuffzqhb.supabase.co';
// Using the Anon Key for client-side access
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; 

// NOTE: The full Anon Key is not provided here for security, 
// but the actual key from the user context will be used in the sandbox environment.
// For the purpose of this file, we use the placeholder.

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example function to fetch data (will be used in components)
export async function fetchHubData(hubId) {
  const { data, error } = await supabase
    .from('hubs') // Assuming a table named 'hubs'
    .select('*')
    .eq('id', hubId)
    .single();

  if (error) {
    console.error('Error fetching hub data:', error);
    return null;
  }
  return data;
}
