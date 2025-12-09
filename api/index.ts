// Vercel serverless function
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Import from built server
let app: any = null;
let initialized = false;

async function getApp() {
  if (app && initialized) return app;
  
  try {
    // Import from built server (production on Vercel)
    // Use require for CJS module
    const serverModule = require('../dist/index.cjs');
    
    if (serverModule.app) {
      if (!initialized && serverModule.initializeApp) {
        await serverModule.initializeApp();
      }
      app = serverModule.app;
      initialized = true;
      return app;
    }
  } catch (e: any) {
    console.error('Error loading server module:', e.message);
    // Try source as fallback
    try {
      const { app: sourceApp, initializeApp } = await import('../server/index');
      if (!initialized) {
        await initializeApp();
        initialized = true;
      }
      app = sourceApp;
      return app;
    } catch (sourceError: any) {
      console.error('Error loading source server:', sourceError.message);
      throw new Error('Failed to load server: ' + sourceError.message);
    }
  }
  
  throw new Error('Server app not available');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const expressApp = await getApp();
    
    if (!expressApp) {
      return res.status(500).json({ error: 'Server app not available' });
    }
    
    // Use the Express app to handle the request
    return expressApp(req, res);
  } catch (error: any) {
    console.error('Vercel handler error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error?.message,
      stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined
    });
  }
}

