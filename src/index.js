import express from 'express';
import { PORT } from './config/index.js';

const app = express();

app.get('/', (req, res) => {
  res.json({ ok: 200 });
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});
