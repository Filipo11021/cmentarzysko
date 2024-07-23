import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const mediaCollection: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Admin',
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath('/')
      },
    ],
  },
  upload: {
    mimeTypes: ['image/*', 'video/*'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      label: 'image description',
      type: 'text',
    },
  ],
}
