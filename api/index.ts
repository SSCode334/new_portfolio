// Vercel serverless function
import type { VercelRequest, VercelResponse } from '@vercel/node';
import path from 'path';
import fs from 'fs';

// Cache the app instance
let app: any = null;
let initialized = false;

async function getApp() {
  if (app && initialized) return app;
  
  try {
    // Set NODE_ENV to production for Vercel
    process.env.NODE_ENV = 'production';
    
    // Try to load from built server
    const distPath = path.join(process.cwd(), 'dist', 'index.cjs');
    
    if (fs.existsSync(distPath)) {
      // Clear require cache
      delete require.cache[require.resolve(distPath)];
      const serverModule = require(distPath);
      
      if (serverModule.app && serverModule.initializeApp) {
        await serverModule.initializeApp();
        app = serverModule.app;
        initialized = true;
        return app;
      }
    }
    
    // Fallback: import from source (for development/testing)
    const { app: sourceApp, initializeApp } = await import('../server/index');
    await initializeApp();
    app = sourceApp;
    initialized = true;
    return app;
    
  } catch (error: any) {
    console.error('Error initializing app:', error);
    throw error;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const expressApp = await getApp();
    
    if (!expressApp) {
      return res.status(500).json({ 
        error: 'Server app not available',
        message: 'Failed to initialize Express app'
      });
    }
    
    // Use the Express app to handle the request
    return expressApp(req, res);
    
  } catch (error: any) {
    console.error('Vercel handler error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error?.message || 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined
    });
  }
}
