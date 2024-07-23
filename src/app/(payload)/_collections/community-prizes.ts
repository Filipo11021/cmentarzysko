import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'

export const communityPrizesCollection: CollectionConfig = {
  slug: 'community-prizes',
  admin: {
    useAsTitle: 'title',
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
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
  ],
}
