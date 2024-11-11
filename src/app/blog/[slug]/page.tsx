import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/text'
import { image } from './../../../../studio/image'
import { getPost } from './../../../../studio/queries'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'
import { clsx } from 'clsx'
import * as Headless from '@headlessui/react'
import NextLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  let post = await getPost(params.slug)

  return post ? { title: post.title, description: post.excerpt } : {}
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  let post = (await getPost(params.slug)) || notFound()

  // TODO: Add publishedAt to the post
  return (
    <main className="overflow-hidden">
      <Container>
        <Subheading className="mt-16">
          {/* {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')} */}
        </Subheading>
        <h1 className="mt-24">
          {post.title}
        </h1>
        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={image(post.author.image).size(64, 64).url()}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5">
                  {post.author.name}
                </div>
              </div>
            )}
            {Array.isArray(post.categories) && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category: any) => (
                  <Link
                    key={category.slug}
                    href={`/blog?category=${category.slug}`}
                    className="rounded-full border border-dotted border-gray-300 px-2 text-sm/6 font-medium"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="">
            <div className="max-w-2xl xl:mx-auto">
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={image(post.mainImage).size(2016, 1344).url()}
                  className="mb-10 aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
                />
              )}
              {post.body && (
                <PortableText
                  value={post.body}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="my-10 first:mt-0 last:mb-0">
                          {children}
                        </p>
                      ),
                      h2: ({ children }) => (
                        <h2 className="mb-10 mt-16 text-4xl first:mt-0 last:mb-0">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="mb-10 mt-12 text-2xl font-medium first:mt-0 last:mb-0">
                          {children}
                        </h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="my-10 border-l-2 border-l-gray-300 pl-6 first:mt-0 last:mb-0">
                          {children}
                        </blockquote>
                      ),
                    },
                    types: {
                      image: ({ value }) => (
                        <img
                          alt={value.alt || ''}
                          src={image(value).width(2000).url()}
                          className="w-full rounded-2xl"
                        />
                      ),
                      separator: ({ value }) => {
                        switch (value.style) {
                          case 'line':
                            return (
                              <hr className="my-8 border-t border-gray-200" />
                            )
                          case 'space':
                            return <div className="my-8" />
                          default:
                            return null
                        }
                      },
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc pl-4 ">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal pl-4 ">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => {
                        return (
                          <li className="my-2 pl-2 has-[br]:mb-8">
                            {children}
                          </li>
                        )
                      },
                      number: ({ children }) => {
                        return (
                          <li className="my-2 pl-2 has-[br]:mb-8">
                            {children}
                          </li>
                        )
                      },
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-semibold">
                          {children}
                        </strong>
                      ),
                      code: ({ children }) => (
                        <>
                          <span aria-hidden>`</span>
                          <code className="text-[15px]/8 font-semibold">
                            {children}
                          </code>
                          <span aria-hidden>`</span>
                        </>
                      ),
                      link: ({ value, children }) => {
                        return (
                          <Link
                            href={value.href}
                            className="underline underline-offset-4 data-[hover]:decoration-gray-600"
                          >
                            {children}
                          </Link>
                        )
                      },
                    },
                  }}
                />
              )}
              <div className="mt-20">
                  <Link href="/blog">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full w-fit px-4 py-2">
                      <ChevronLeftIcon className="w-9" />
                      <div className="text-lg font-medium pr-2 items-center">
                        Back to blog
                      </div>
                    </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, 'px-6 lg:px-8')}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  )
}

export const Link = forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <Headless.DataInteractive>
      <NextLink ref={ref} {...props} />
    </Headless.DataInteractive>
  )
})
