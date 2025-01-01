const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 for local development

app.get('/', (req, res) => {
  res.send('Hello, Heroku!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
