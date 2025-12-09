// Vercel serverless function (JavaScript version for better compatibility)
const { app, initializeApp } = require('../dist/index.cjs');

let initialized = false;

module.exports = async function handler(req, res) {
  try {
    // Initialize app if not already done
    if (!initialized && initializeApp) {
      await initializeApp();
      initialized = true;
    }
    
    if (!app) {
      return res.status(500).json({ error: 'Server app not available' });
    }
    
    // Use the Express app to handle the request
    return app(req, res);
  } catch (error) {
    console.error('Vercel handler error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error?.message 
    });
  }
};

