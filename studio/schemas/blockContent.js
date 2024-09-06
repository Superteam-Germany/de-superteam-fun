/**
 * This is the schema definition for the rich text field used in the blog post.
 * You can customize it as needed.
 */
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
    // Add other types as needed
  ],
};