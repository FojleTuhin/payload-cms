import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Serial no',
      type:'number',
      required:true
    },
    {
      name: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'Sub Title',
      type: 'text',
      // required: true
    },
    {
      name: 'Description',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
