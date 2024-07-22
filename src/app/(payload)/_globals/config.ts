import { GlobalConfig } from 'payload'

export const configGlobal: GlobalConfig = {
  slug: 'config',
  admin: {
    group: 'Admin',
  },
  fields: [
    {
      name: 'googleAnalyticsId',
      type: 'text',
    },
  ],
}
