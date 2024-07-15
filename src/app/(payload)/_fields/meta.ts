import { GroupField } from 'payload'

type MetaField = () => GroupField

export const meta: MetaField = () => ({
  name: 'meta',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'This should be between 50 and 60 characters' },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: { description: 'This should be between 100 and 150 characters.' },
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'twitterImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
})
