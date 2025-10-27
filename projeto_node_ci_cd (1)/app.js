
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API Online' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    return res.status(200).json({ message: 'Login bem-sucedido!' });
  }
  return res.status(401).json({ message: 'Credenciais inválidas' });
});

module.exports = app;
