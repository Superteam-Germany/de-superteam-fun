
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas';



export default defineConfig({
  projectId: process.env.SANITY_PROJECT_ID ?? '',
  dataset: 'production',
  title: 'My Blog',
  apiVersion: '2023-10-01',
  basePath: '/blog',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
  cors: {
    allowCredentials: true,
    allowOrigins: [
      "http://localhost:3000",
      "https://de.superteam.fun"
    ]
  }
});
