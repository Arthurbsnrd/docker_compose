const express = require('express');
const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the back-end!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
