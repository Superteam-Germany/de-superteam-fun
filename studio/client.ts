import imageUrlBuilder from '@sanity/image-url';
import { createClient, type QueryParams } from 'next-sanity'

const config = {
  projectId: 'loktgfyy', 
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: true,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

// sanity fetch
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return sanityClient.fetch(query, params)
}
