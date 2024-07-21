import { CollectionConfig } from 'payload'

export const communityPrizesCollection: CollectionConfig = {
  slug: 'community-prizes',
  admin: {
    useAsTitle: 'title',
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
