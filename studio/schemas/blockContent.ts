import {defineType, defineArrayMember} from 'sanity';

/**
 * This is the schema definition for the rich text field used in the blog post.
 * You can customize it as needed.
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),
    // Add other types as needed
  ],
});
