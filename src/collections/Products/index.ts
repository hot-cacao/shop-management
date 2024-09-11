import type { CollectionConfig } from 'payload'

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'productName',
  },
  fields: [
    {
      name: 'productCode',
      type: 'text',
      required: true,
    },
    {
      name: 'productName',
      type: 'text',
      required: true,
    },
    {
      name: 'cost',
      type: 'number',
      min: 0,
    },
    {
      name: 'price',
      type: 'number',
      min: 0,
    },
    {
      name: 'stock',
      type: 'number',
      min: 0,
    },
  ],
}

export default Products
