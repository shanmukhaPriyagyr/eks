const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('🚀 Hello from EKS Cluster via Load Balancer!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
