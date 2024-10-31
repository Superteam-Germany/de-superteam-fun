'use client'
import { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../../../studio/client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Card from '@/components/card';
import { useScroll, useTransform } from 'framer-motion';

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '80%']);
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '80%']);

  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "blogPost"] | order(_createdAt desc) [${(page - 1) * POSTS_PER_PAGE}...${page * POSTS_PER_PAGE}] {title, slug, mainImage, blurb, _createdAt}`;
      const postsData = await sanityClient.fetch(query);
      console.log("🚀 ~ fetchPosts ~ postsData:", postsData)
      setPosts(postsData);

      const totalQuery = `count(*[_type == "blogPost"])`;
      const totalPosts = await sanityClient.fetch(totalQuery);
      setTotalPages(Math.ceil(totalPosts / POSTS_PER_PAGE));
    };

    fetchPosts();
  }, [page]);

  return (
    <div className="min-h-screen hyperdrive relative overflow-hidden">
      <div
        style={{ backgroundPosition: '10% 90%', backgroundSize: 'cover' }}
        className="bg-[url('/images/backgrounds/line-wave-4-primary.svg')] bg-bottom bg-no-repeat -z-50 w-full bg-50% md:bg-contain absolute h-full bg-fixed"
      ></div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="uppercase max-w-[50rem] text-h1 self-start mb-8 lg:mb-24">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0">
          {posts.map((post: any) => (
            <Card
              key={post.slug.current}
              title={post.title}
              content={post.blurb}
              linkContent="Read more"
              imgSrc={post.mainImage ? urlFor(post.mainImage).width(400).url() : undefined}
              href={`/blog/${post.slug.current}`}
              date={new Date(post._createdAt).toLocaleDateString()}
            />
          ))}
        </div>
        <div className="flex justify-between mt-8">
          {page > 1 && (
            <Link href={`/blog?page=${page - 1}`}>
              <a className="text-blue-500 hover:underline">Previous</a>
            </Link>
          )}
          {page < totalPages && (
            <Link href={`/blog?page=${page + 1}`}>
              <a className="text-blue-500 hover:underline">Next</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
