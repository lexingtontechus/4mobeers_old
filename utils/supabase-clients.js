import { createClient } from "@supabase/supabase-js";

//const supabaseUrl = "https://zutusxjuujazvbzlicfg.supabase.co";
//const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dHVzeGp1dWphenZiemxpY2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE4MzAxMDIsImV4cCI6MTk4NzQwNjEwMn0.dy7DJFqXrzryC-RbyCNfHa3NgVn74jZx6MXnxuRzfWE";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; //process.env.SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
