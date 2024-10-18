import { sanityClient, urlFor } from '../../../../studio/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';

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
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            width={700}
            height={400}
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
                <Image
                  src={urlFor(value).url()}
                  alt={value.alt || 'Blog Image'}
                  width={700}
                  height={400}
                  className="my-4 w-full rounded-xl object-cover"
                />
              ),
            },
            block: {
              h1: ({ children }) => <h1 className="mt-16 mb-4 text-2xl font-bold">{children}</h1>,
              h2: ({ children }) => <h2 className="mt-12 mb-3 text-xl font-bold">{children}</h2>,
              h3: ({ children }) => <h3 className="mt-8 mb-2 text-lg font-bold">{children}</h3>,
              p: ({ children }) => <p className="mb-4">{children}</p>,
            },
            list: {
              bullet: ({ children }) => <ul className="list-disc ml-5 mb-4">{children}</ul>,
              number: ({ children }) => <ol className="list-decimal ml-5 mb-4">{children}</ol>,
            },
            listItem: {
              bullet: ({ children }) => <li className="mt-2 mb-2">{children}</li>,
              number: ({ children }) => <li className="mt-2 mb-2">{children}</li>,
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
