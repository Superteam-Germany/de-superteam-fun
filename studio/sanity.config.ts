
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas';

export default defineConfig({
  projectId: 'loktgfyy',
  dataset: 'production',
  title: 'Superteam Blog',
  apiVersion: '2023-10-01',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
  cors: {
    allowCredentials: true,
    allowOrigins: [
      "http://localhost:3000",
      "https://de.superteam.fun",
      "http://localhost:3001"
    ]
  }
});
