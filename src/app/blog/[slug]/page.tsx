import { sanityClient } from '../../../../studio/client';
import { PortableText } from '@portabletext/react';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const query = `*[_type == "blogPost" && slug.current == $slug][0]`;
  const post = await sanityClient.fetch(query, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <PortableText value={post.body} />
    </div>
  );
}