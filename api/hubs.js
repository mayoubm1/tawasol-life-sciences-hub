import { createClient } from '@supabase/supabase-js';

// Supabase connection details will be read from environment variables in Vercel
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Create a single Supabase client for the serverless function
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(request, response) {
  try {
    // Assuming the user has a table named 'hubs' with the hub data
    const { data, error } = await supabase
      .from('hubs')
      .select('*');

    if (error) {
      console.error('Supabase query error:', error);
      return response.status(500).json({ error: 'Failed to fetch hub data from Supabase' });
    }

    response.status(200).json(data);
  } catch (e) {
    console.error('Serverless function error:', e);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}
