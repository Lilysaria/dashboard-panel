require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");

require("./config/database");

const app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(logger("dev"));
app.use(express.json());

// Routes
const postRouter = require('./routes/api/posts');
const productRouter = require('./routes/api/products');
const adminRouter = require('./routes/api/admins');

// API routes
app.use('/api/posts', postRouter);
app.use('/api/products', productRouter);
app.use('/api/admins', adminRouter);

// Serve static assets
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route for SPA
app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
}

module.exports = app;
