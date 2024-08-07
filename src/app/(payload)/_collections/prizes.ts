import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'

export const prizesCollection: CollectionConfig = {
  slug: 'prizes',
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath('/')
      },
    ],
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
