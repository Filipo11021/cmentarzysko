import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

export const headerGlobal: GlobalConfig = {
  slug: 'header',
  admin: {
    group: 'Layout',
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath('/')
        revalidatePath('/community-prizes')
      },
    ],
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
