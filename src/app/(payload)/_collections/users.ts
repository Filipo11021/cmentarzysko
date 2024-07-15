import type { CollectionConfig } from 'payload'

export const usersCollection: CollectionConfig = {
  slug: 'users',
  admin: {
    group: 'admin',
  },
  auth: true,
  fields: [],
}
