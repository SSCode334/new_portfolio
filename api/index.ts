// Vercel serverless function
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Import from built server or source depending on environment
let app: any = null;
let initialized = false;

async function getApp() {
  if (app && initialized) return app;
  
  try {
    // Try to import from built server first (production)
    const serverModule = await import('../dist/index.cjs');
    if (serverModule.app) {
      if (!initialized && serverModule.initializeApp) {
        await serverModule.initializeApp();
      }
      app = serverModule.app;
      initialized = true;
      return app;
    }
  } catch (e) {
    // Fall back to source (development)
    console.log('Using source server module');
  }
  
  // Fallback to source
  const { app: sourceApp, initializeApp } = await import('../server/index');
  if (!initialized) {
    await initializeApp();
    initialized = true;
  }
  app = sourceApp;
  return app;
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
      message: error?.message 
    });
  }
}

