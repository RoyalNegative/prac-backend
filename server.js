const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

app.get('/api/message', (req, res) => {
  res.send('This is a message from the backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

