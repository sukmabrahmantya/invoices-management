const dummyData = [
  {
    id: '#RT3080',
    status: 'paid',
    billFrom: {
      address: {
        street: 'Perum. Argopeni Gg. Muria No.95',
        city: 'Purworejo',
        postalCode: '54212',
        country: 'Indonesia'
      }
    },
    billTo: {
      name: 'Brahmantya Prajanji',
      email: 'brahmantyasukma@gmail.com',
      address: {
        street: 'Perum. Argopeni Gg. Muria No.95',
        city: 'Purworejo',
        postalCode: '54212',
        country: 'Indonesia'
      },
      invoiceDate: '2022-08-01',
      paymentTerms: '30days',
      projectDesc: 'Graphic Design',
      itemList: [
        {
          key: 1,
          name: 'Banner Design',
          qty: 1,
          price: 500,
        },
        {
          key: 2,
          name: 'Print',
          qty: 2,
          price: 1500,
        }
      ]
    }
  },
  {
    id: '#LX2480',
    status: 'pending',
    billFrom: {
      address: {
        street: 'Perum. Argopeni Gg. Muria No.95',
        city: 'Purworejo',
        postalCode: '54212',
        country: 'Indonesia'
      }
    },
    billTo: {
      name: 'David Bechkam',
      email: 'bapakdavidbekam@gmail.com',
      address: {
        street: 'Jalan Street',
        city: 'Manchester',
        postalCode: '3412',
        country: 'United Kingdom'
      },
      invoiceDate: '2022-08-01',
      paymentTerms: '15days',
      projectDesc: 'Laser Cutting',
      itemList: [
        {
          key: 1,
          name: 'Design',
          qty: 3,
          price: 500,
        },
        {
          key: 3,
          name: 'Cutting',
          qty: 3,
          price: 1900,
        }
      ]
    }
  },
  {
    id: '#UZ5420',
    status: 'draft',
    billFrom: {
      address: {
        street: 'Perum. Argopeni Gg. Muria No.95',
        city: 'Purworejo',
        postalCode: '54212',
        country: 'Indonesia'
      }
    },
    billTo: {
      name: 'Cristiano Ronaldo',
      email: 'masronaldodo@gmail.com',
      address: {
        street: 'Jalan Road',
        city: 'Lisbon',
        postalCode: '44114',
        country: 'Portugal'
      },
      invoiceDate: '2022-08-01',
      paymentTerms: '7days',
      projectDesc: 'Laser Cutting',
      itemList: []
    }
  },
]

export default dummyData;