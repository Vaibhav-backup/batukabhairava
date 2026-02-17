
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gjjgkrzjwvqboqqsbabt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqamdrcnpqd3ZxYm9xcXNiYWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMTk5MDIsImV4cCI6MjA4Njg5NTkwMn0.Y5yCFkxaeYNEXMdlcoyPwXccJ2nJZ7HVdCGzcCMOCRU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
