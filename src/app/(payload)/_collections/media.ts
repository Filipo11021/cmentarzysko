import type { CollectionConfig } from 'payload'

export const mediaCollection: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Admin',
  },
  upload: {
    mimeTypes: ['image/*', 'video/*'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeRead: [
      (doc) => {
        if (!doc || Array.isArray(doc.doc)) return doc
        doc.doc.url = `${process.env.NEXT_PUBLIC_VERCEL_URL}/${doc.doc.url}`
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'image description',
      type: 'text',
    },
  ],
}
