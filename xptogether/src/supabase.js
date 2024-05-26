
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://thrnvpoclgjceefbthxg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocm52cG9jbGdqY2VlZmJ0aHhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NjI5OTQsImV4cCI6MjAzMjIzODk5NH0.ozwuAWF0-YDxa6gsSXIls2v43BSiQxm3BujA88a8U9U" //process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

