import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || 'main',

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN || '',
      stopwordLanguages: ['eng'],
    },
  },

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'assets',
      publicFolder: 'src',
    },
  },

  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'src/content/blog/en',
        format: 'mdx',
        ui: {
          filename: {
            readonly: false,
            slugify: (values) =>
              values?.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || '',
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
            ui: { component: 'textarea' },
          },
          {
            type: 'datetime',
            name: 'publishedAt',
            label: 'Published At',
            required: true,
          },
          {
            type: 'datetime',
            name: 'updatedAt',
            label: 'Updated At',
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Cover Image',
          },
          {
            type: 'string',
            name: 'imageAlt',
            label: 'Image Alt Text',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'string',
            name: 'svgSlug',
            label: 'SVG Slug',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured',
          },
          {
            type: 'string',
            name: 'locale',
            label: 'Locale',
            options: ['en', 'es', 'fr'],
          },
          {
            type: 'boolean',
            name: 'toc',
            label: 'Show Table of Contents',
          },
          {
            type: 'boolean',
            name: 'comments',
            label: 'Show Comments',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
