import express from 'express';
import { PORT } from './config/index.js';
import { uploadRouter } from './routes/upload.route.js';

const app = express();

app.use('/upload', uploadRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});
