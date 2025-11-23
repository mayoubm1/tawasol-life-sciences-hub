import { createClient } from '@supabase/supabase-js';

// These variables will be replaced by Vercel environment variables on deployment
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
