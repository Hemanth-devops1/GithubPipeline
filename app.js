// app.js
const express = require('express');
const app = express();

// Define route
app.get('/', (req, res) => {
  res.send('Hello World! This is my CI 🚀');
});

// Export app for testing
module.exports = app;

// Start server only if not in test mode
if (require.main === module) {
  app.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
  });
}
