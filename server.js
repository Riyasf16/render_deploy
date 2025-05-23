// server.js
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('✅ Server is up and running!');
});

// Another sample API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'This is a test API endpoint.' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
