// Vercel serverless function
import type { VercelRequest, VercelResponse } from '@vercel/node';
import path from 'path';
import fs from 'fs';
import { createRequire } from 'module';

// Cache the app instance
let app: any = null;
let initialized = false;

// Create require function for CJS modules
const require = createRequire(import.meta.url);

async function getApp() {
  if (app && initialized) return app;
  
  try {
    // Set NODE_ENV to production for Vercel
    process.env.NODE_ENV = 'production';
    
    // Try to load from built server (CJS format)
    const distPath = path.join(process.cwd(), 'dist', 'index.cjs');
    
    if (fs.existsSync(distPath)) {
      try {
        // Clear require cache if module was already loaded
        const resolvedPath = require.resolve(distPath);
        if (require.cache[resolvedPath]) {
          delete require.cache[resolvedPath];
        }
        
        const serverModule = require(distPath);
        
        if (serverModule.app && serverModule.initializeApp) {
          await serverModule.initializeApp();
          app = serverModule.app;
          initialized = true;
          return app;
        }
      } catch (requireError: any) {
        console.log('Require failed, trying dynamic import:', requireError.message);
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
