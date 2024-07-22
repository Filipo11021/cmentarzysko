import path from 'path'
import { en } from 'payload/i18n/en'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
//import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { usersCollection } from '@/app/(payload)/_collections/users'
import { linksCollection } from '@/app/(payload)/_collections/links'
import { homepageGlobal } from '@/app/(payload)/_globals/homepage'
import { env, isDevelopment } from '@/env.mjs'
import { mediaCollection } from '@/app/(payload)/_collections/media'
import { headerGlobal } from '@/app/(payload)/_globals/header'
import { footerGlobal } from '@/app/(payload)/_globals/footer'
import { communityPrizesCollection } from '@/app/(payload)/_collections/community-prizes'
import { prizesCollection } from '@/app/(payload)/_collections/prizes'
import { configGlobal } from '@/app/(payload)/_globals/config'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const loadStorage = () => {
  if (env.STORAGE_TYPE === 'S3') {
    return s3Storage({
      collections: {
        media: true,
      },
      bucket: env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: env.S3_ACCESS_KEY_ID,
          secretAccessKey: env.S3_SECRET_ACCESS_KEY,
        },
        region: env.S3_REGION,
        endpoint: env.S3_ENDPOINT,
      },
    })
  }

  if (env.STORAGE_TYPE === 'uploadthing') {
    return uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        apiKey: env.UPLOADTHING_SECRET,
        acl: 'public-read',
      },
    })
  }
}
const storagePlugin = loadStorage()

const loadDatabase = () => {
  if (env.DATABASE_TYPE === 'postgres') {
    return postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI,
      },
      idType: 'uuid',
    })
  }

  return mongooseAdapter({
    url: env.DATABASE_URI,
  })
}
const dbAdapter = loadDatabase()

export default buildConfig({
  plugins: [
    ...(storagePlugin ? [storagePlugin] : []),
    seoPlugin({
      globals: ['homepage'],
      uploadsCollection: 'media',
    }),
  ],
  //editor: slateEditor({}),
  editor: lexicalEditor(),
  collections: [
    usersCollection,
    mediaCollection,
    linksCollection,
    communityPrizesCollection,
    prizesCollection,
  ],
  globals: [homepageGlobal, headerGlobal, footerGlobal, configGlobal],
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: dbAdapter,

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: isDevelopment()
      ? {
          email: 'dev@payloadcms.com',
          password: 'test',
          prefillOnly: true,
        }
      : false,
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (isDevelopment() && existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'dev@payloadcms.com',
          password: 'test',
        },
      })
    }
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})
