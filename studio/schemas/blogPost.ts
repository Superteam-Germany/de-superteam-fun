import { defineField } from 'sanity'
import { groq } from 'next-sanity'

const apiVersion = '2024-01-01'

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('Please add a title to your blog post.'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required().error('Please add a slug (url path e.g. my-blog-post or click on generate to auto-generate) to your blog post.'),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule: any) => Rule.required().error('Please add some content to your blog post.'),
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      description: 'A short summary of the blog post',
      validation: (Rule: any) => Rule.required().max(200).error('Please add a blurb (short summary, max 200 characters) to your blog post.'),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule: any) => Rule.required().error('Please select an author for your blog post.'),
    },
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      description: 'Toggle if this post should be featured',
      initialValue: false,
    }),
  ],
};
