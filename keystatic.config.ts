import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'bradthomasdesign', name: 'peach' },
  },

  ui: {
    brand: { name: 'Peculiar Peach — CMS' },
  },

  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/en/*',
      format: { contentField: 'body' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { isRequired: true } },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true, length: { max: 200 } },
        }),
        publishedAt: fields.date({
          label: 'Published Date',
          validation: { isRequired: true },
        }),
        updatedAt: fields.date({ label: 'Updated Date' }),
        author: fields.text({ label: 'Author', defaultValue: 'Brad Thomas' }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'src/assets/blog',
          publicPath: '../../../assets/blog/',
        }),
        imageAlt: fields.text({ label: 'Image Alt Text' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.fields.value.value || 'Tag',
        }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        toc: fields.checkbox({ label: 'Show Table of Contents' }),
        comments: fields.checkbox({ label: 'Show Comments' }),
        locale: fields.select({
          label: 'Locale',
          options: [
            { label: 'English', value: 'en' },
            { label: 'Spanish', value: 'es' },
            { label: 'French', value: 'fr' },
          ],
          defaultValue: 'en',
        }),
        body: fields.mdx({ label: 'Body' }),
      },
    }),
  },
});
