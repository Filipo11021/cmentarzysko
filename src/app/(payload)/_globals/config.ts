import { GlobalConfig } from 'payload'

export const configGlobal: GlobalConfig = {
  slug: 'config',
  admin: {
    group: 'admin',
  },
  fields: [
    {
      name: 'googleAnalyticsId',
      type: 'text',
    },
  ],
}
