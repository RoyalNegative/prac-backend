import OpenAI from 'openai';


const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, Heroku!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
