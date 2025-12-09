import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // When bundled, __dirname points to dist/, so public is at dist/public
  // Use import.meta.url for ESM or __dirname for CJS
  const distPath = path.resolve(
    typeof __dirname !== "undefined" ? __dirname : path.dirname(new URL(import.meta.url).pathname),
    "public"
  );
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
