import { createClient } from '@supabase/supabase-js';

// Fallback to empty string to avoid 'process is not defined' if define fails, 
// but Vite 'define' should handle this.
const supabaseUrl = (process.env.SUPABASE_URL) || (import.meta.env.VITE_SUPABASE_URL) || 'https://placeholder.supabase.co';
const supabaseAnonKey = (process.env.SUPABASE_ANON_KEY) || (import.meta.env.VITE_SUPABASE_ANON_KEY) || 'placeholder';

const isPlaceholder = supabaseUrl === 'https://placeholder.supabase.co' || supabaseAnonKey === 'placeholder';

if (isPlaceholder) {
  console.warn('Supabase URL or Anon Key is missing. Please set SUPABASE_URL and SUPABASE_ANON_KEY in your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
