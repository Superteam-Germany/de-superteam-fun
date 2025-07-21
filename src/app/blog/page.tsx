import { Lead, Subheading } from "@/components/text";
import { image } from "./../../../studio/image";
import Link from "next/link";
import { LinkButton } from "@/components/link-button";
import { Highlight } from "@/components/highlight";
import { Container } from "@/components/container";
import {
  getCategories,
  getFeaturedPosts,
  getPosts,
  getPostsCount,
} from "./../../../studio/queries";
import { Menu } from "@headlessui/react";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  RssIcon,
} from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import dayjs from "dayjs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FadeInDiv from "@/components/fade-in-div";

export const metadata: Metadata = {
  title: "Superteam Germany Blog",
  description:
    "Stay informed with Solana updates, community news, and insights on how to build on Solana.",
};

const postsPerPage = 5;

async function FeaturedPosts() {
  let featuredPosts = await getFeaturedPosts(3);

  if (featuredPosts.length === 0) {
    return;
  }

  return (
    <Container>
      {/* <h2 className="text-3xl mt-24">Featured</h2> */}
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {featuredPosts.map((post: any) => (
          <div
            key={post.slug}
            className="relative flex flex-col rounded-3xl p-2 bg-gradient-to-br from-secondary/70 backdrop-blur-md via-secondary/50 to-background/30  shadow-2xl  ring-1 ring-black/5"
          >
            {post.mainImage && (
              <img
                alt={post.mainImage.alt || ""}
                src={image(post.mainImage).size(1170, 780).url()}
                className="aspect-[3/2] w-full rounded-2xl object-cover"
              />
            )}
            <div className="flex flex-1 flex-col p-8">
              <div className="text-sm/5">
                {/* {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')} */}{" "}
                {/* TODO: Add date */}
              </div>
              <div className="mt-2 text-base/7 font-medium">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </div>
              <div className="mt-2 flex-1 text-sm/6">{post.blurb}</div>
              {post.author && (
                <div className="mt-6 flex items-center gap-3">
                  {post.author.image && (
                    <img
                      alt=""
                      src={image(post.author.image).size(30, 30).url()}
                      className="aspect-square size-6 rounded-full object-cover"
                    />
                  )}
                  <div className="text-sm/5">{post.author.name}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

async function Categories({ selected }: { selected?: string }) {
  let categories = await getCategories();

  if (categories.length === 0) {
    return;
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <Menu.Button className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }: any) => slug === selected)?.title ||
            "All categories"}
          <ChevronUpDownIcon className="size-4 fill-slate-900" />
        </Menu.Button>
        <Menu.Items className="absolute left-0 top-full min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 mt-1">
          <Menu.Item>
            <Link
              href="/blog"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem,1fr] items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-[selected]:block" />
              <p className="col-start-2 text-sm/6">All categories</p>
            </Link>
          </Menu.Item>
          {categories.map((category: any) => (
            <Menu.Item key={category.slug}>
              <Link
                href={`/blog?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[16px,1fr] items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                <p className="col-start-2 text-sm/6">{category.title}</p>
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
      <LinkButton variant="outline" href="/blog/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        RSS Feed
      </LinkButton>
    </div>
  );
}

async function Posts({ page, category }: { page: number; category?: string }) {
  let posts = await getPosts(
    (page - 1) * postsPerPage,
    page * postsPerPage,
    category
  );

  if (posts.length === 0 && (page > 1 || category)) {
    notFound();
  }

  if (posts.length === 0) {
    return <p className="mt-6">No posts found.</p>;
  }

  return (
    <div className="mt-6">
      {posts.map((post: any) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3 bg-gradient-to-br from-secondary/70 backdrop-blur-md via-secondary/50 to-background/30  shadow-2xl"
        >
          <div>
            <div className="text-sm/5 sm:font-medium">
              {/* {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')} */}
            </div>
            {post.author && (
              <div className="ml-4 mt-2.5 flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={image(post.author.image).width(30).height(30).url()}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5">{post.author.name}</div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-3">{post.blurb}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 font-medium"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="w-9" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function Pagination({
  page,
  category,
}: {
  page: number;
  category?: string;
}) {
  function url(page: number) {
    let params = new URLSearchParams();

    if (category) params.set("category", category);
    if (page > 1) params.set("page", page.toString());

    return params.size !== 0 ? `/blog?${params.toString()}` : "/blog";
  }

  let totalPosts = await getPostsCount(category);
  let hasPreviousPage = page - 1;
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined;
  let hasNextPage = page * postsPerPage < totalPosts;
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined;
  let pageCount = Math.ceil(totalPosts / postsPerPage);

  if (pageCount < 2) {
    return;
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <LinkButton
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </LinkButton>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              "size-7 rounded-lg text-center text-sm/7 font-medium",
              "data-[hover]:bg-gray-100",
              "data-[active]:shadow data-[active]:ring-1 data-[active]:ring-black/10",
              "data-[active]:data-[hover]:bg-gray-50"
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <LinkButton variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </LinkButton>
    </div>
  );
}

export default async function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let page =
    "page" in searchParams
      ? typeof searchParams.page === "string" && parseInt(searchParams.page) > 1
        ? parseInt(searchParams.page)
        : notFound()
      : 1;

  let category =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined;
  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 1], ['-40%', '-0%']);

  return (
    <div className="min-h-screen">
      <div
        style={{
          transform: "translateY(-40%)",
          backgroundSize: "cover",
        }}
        className="bg-[url('/images/backgrounds/line-wave-4-primary.svg')] 
          fixed top-0 left-0
          -z-20 
          bg-50% bg-no-repeat 
          w-full h-[300vh]"
      ></div>
      <FadeInDiv>
        <div>
          <div className="container">
            <Subheading className="mt-16">Blog</Subheading>
            <h1 className="mt-2">
              Updates from <Highlight>Superteam</Highlight> Germany
            </h1>
            <Lead className="mt-6">
              Stay informed with Solana updates, community news, and insights on
              how to build on Solana.
            </Lead>
          </div>
          {page === 1 && !category && <FeaturedPosts />}
        </div>
      </FadeInDiv>
      <Container className="mt-16 pb-24">
        <Categories selected={category} />
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </Container>
    </div>
  );
}
