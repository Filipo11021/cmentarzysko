import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

export const configGlobal: GlobalConfig = {
  slug: 'config',
  admin: {
    group: 'Admin',
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
      name: 'googleAnalyticsId',
      type: 'text',
    },
  ],
}
