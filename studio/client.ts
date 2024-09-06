import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: 'loktgfyy', // Ensure this is your actual project ID
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: true,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);