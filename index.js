const express = require('express');
const cors = require('cors');
const app = express();
const itemRoutes = require('./src/routes/itemRoutes.js');

app.use(cors());
app.use(express.json()); // Para interpretar JSON no body

app.use('/api/items', itemRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API construída com Express!');
});

app.listen(3000, () => {
  console.log('Aplicação executando em http://localhost:3000');
});

module.exports = app;