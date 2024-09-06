
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas';

export default defineConfig({
  projectId: 'your_project_id', // Replace with your actual project ID
  dataset: 'production',
  title: 'My Blog',
  apiVersion: '2023-10-01',
  basePath: '/blog',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
