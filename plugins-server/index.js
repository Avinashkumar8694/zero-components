import express from 'express';
import { env } from 'node:process';
import path from 'path';

const app = express();
const port = env.PORT || 3000;
const basePath = env.BASE_PATH || '';

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '..')));

// Router setup
const router = express.Router();

// Simple ping endpoint
router.get('/ping', (req, res) => {
  res.send({ message: 'Hello World!' });
});

// Serve static files from the plugins directory
router.use('/plugins', express.static('plugins'));

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Use the router with the base path
app.use(basePath, router);

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}${basePath}`);
});
