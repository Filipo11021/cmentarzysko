import { lexicalHTML } from '@payloadcms/richtext-lexical'
import { GlobalConfig } from 'payload'

export const homepageGlobal: GlobalConfig = {
  slug: 'homepage',
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      type: 'group',
      name: 'hero',
      fields: [
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
          name: 'timerTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'buttons',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'relationship',
              relationTo: 'links',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'aboutLeague',
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
          name: 'buttons',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'relationship',
              relationTo: 'links',
              required: true,
            },
          ],
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'questions',
      type: 'group',
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
          name: 'buttons',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'relationship',
              relationTo: 'links',
              required: true,
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'question',
              type: 'text',
              required: true,
            },
            {
              name: 'answer',
              type: 'richText',
              required: true,
            },
            lexicalHTML('answer', { name: 'answerHtml' }),
          ],
        },
      ],
    },
    {
      name: 'prizes',
      type: 'group',
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
          name: 'items',
          type: 'relationship',
          relationTo: 'prizes',
          hasMany: true,
        },
      ],
    },
    {
      name: 'communityPrizes',
      type: 'group',
      fields: [
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
          name: 'contact',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
    
            },
            {
              name: 'discord',
              type: 'group',
              fields: [
                {
                  name: 'label',
                  type: 'text',
        
                },
                {
                  name: 'link',
                  type: 'relationship',
                  relationTo: 'links',
        
                },
              ],
            },
            {
              name: 'mail',
              type: 'group',
              fields: [
                {
                  name: 'label',
                  type: 'text',
        
                },
                {
                  name: 'link',
                  type: 'relationship',
                  relationTo: 'links',
        
                },
              ],
            },
          ],
        },
        {
          name: 'items',
          type: 'relationship',
          relationTo: 'community-prizes',
          hasMany: true,
        },
      ],
    },
  ],
}
