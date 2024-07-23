import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'

export const linksCollection: CollectionConfig = {
  slug: 'links',
  admin: {
    group: 'Admin',
    useAsTitle: 'url',
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
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'radio',
      required: true,
      options: [
        { label: 'Internal', value: 'internal' },
        { label: 'External', value: 'external' },
      ],
      defaultValue: 'internal',
    },
  ],
}
