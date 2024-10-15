import { sanityClient, urlFor } from '../../../../studio/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    tags
  }`;
  const post = await sanityClient.fetch(query, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className="p-8 min-h-screen">
      <div className="mx-auto max-w-screen-md lg:mt-12 mb-24">
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            className="mb-4 h-[12rem] lg:h-[28rem] w-full rounded-xl object-cover"
          />
        )}
        <div className="font-medium !text-blue-500">
          {post.tags && post.tags.map((tag: string) => `#${tag} `)}
        </div>
        <h1 className="mb-8 mt-20 font-black text-4xl !leading-snug">
          {post.title}
        </h1>
        <PortableText
          value={post.body}
          components={{
            types: {
              image: ({ value }) => (
                <img
                  src={urlFor(value).url()}
                  alt={value.alt || 'Blog Image'}
                  className="my-4 w-full rounded-xl object-cover"
                />
              ),
            },
          }}
        />
        <div className="mt-8">
          <Link href="/blog">
              Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
