import exp from 'constants'
import type { CollectionConfig } from 'payload'

const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
        },
        {
          name: 'price',
          type: 'text',
          admin: {
            readOnly: true,
          },
          hooks: {
            beforeValidate: [
              ({ value, data, siblingData }) => {
                console.log(data)
              },
            ],
          },
        },
      ],
    },
  ],
}

export default Orders
