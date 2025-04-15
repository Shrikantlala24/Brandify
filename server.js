const express = require('express');
const dotenv = require('dotenv');
const { Pool } = require('pg'); // Import the pg library
const supabase = require('./src/integrations/supabase/client');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set up the PostgreSQL client
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use the connection string from your environment variables
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Example endpoint for user onboarding
app.post('/api/onboarding', async (req, res) => {
  const { userBrief } = req.body;
  try {
    // Insert the user brief into the database using pg
    const result = await pool.query('INSERT INTO user_briefs (brief) VALUES ($1) RETURNING *', [userBrief]);
    res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});