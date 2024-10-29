// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Endpoint d'exemple
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the back-end!" });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
