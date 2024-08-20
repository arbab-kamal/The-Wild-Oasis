import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mixmhiqtfobcglerlmql.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1peG1oaXF0Zm9iY2dsZXJsbXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0MDQ3NjEsImV4cCI6MjAzODk4MDc2MX0.40JWGFvfOv-rLQROFC6HuxVnXmb6yVnGW7Bf7nm4tOg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
