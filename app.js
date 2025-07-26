const express = require('express');
const app = express();

// Define route
app.get('/', (req, res) => {
  res.send('Hello World! This is my CI 🚀');
});

// Start the server
app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000');
});