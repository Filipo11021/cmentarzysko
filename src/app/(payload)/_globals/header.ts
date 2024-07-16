import { GlobalConfig } from 'payload'

export const headerGlobal: GlobalConfig = {
  slug: 'header',
  admin: {
    group: 'Layout',
  },
  fields: [
    {
      name: 'navigation',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'relationship',
          relationTo: 'links',
          required: true,
        },
      ],
    },
    {
      name: 'callToAction',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'relationship',
          relationTo: 'links',
          required: true,
        },
      ],
    },
  ],
}
