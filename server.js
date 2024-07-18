require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const favicon = require("serve-favicon");

require("./config/database");

const app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(logger("dev"));
app.use(express.json());

// Routes
const postRouter = require('./routes/api/posts');
const productRouter = require('./routes/api/products');

// API routes
app.use('/api/posts', postRouter);
app.use('/api/products', productRouter);

// Serve static assets in production
if(process.env.NODE_ENV === 'production'){
  // Serve static files from the 'dist' directory
  const manifest = require('./dist/manifest.json');
  app.use(express.static(path.join(__dirname, "dist")));
  
  // Catch-all route for SPA in production
  app.get('/*', function(req, res) {
    res.render(path.join(__dirname, 'dist', 'index.ejs'), {manifest});
  });
} else {
  // Catch-all route for SPA in development
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
