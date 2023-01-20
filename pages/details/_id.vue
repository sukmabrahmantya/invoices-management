<template>
  <a-row :gutter="[24,16]" style="margin: auto; padding-top: 24px;" :style= "[windowWidth > 768 ? {'width': '80%'} : {'width': '100%' }]" type="flex" align="middle">
    <a-col class="gutter-row" :span="24">
      <a-card style="width: 100%; border-radius: 10px;" :bodyStyle="{'padding-top': '16px', 'padding-bottom': '16px'}">
        <a-row :gutter="16" type="flex" align="middle">
          <a-col class="gutter-row" :xs="24" :md="12">
            <div class="gutter-box detail strong">
              #3070RX
            </div>
          </a-col>
          <a-col class="gutter-row " :xs="12" :md="4">
            <div class="gutter-box align-right">
              <a-button style="width: 100%;" type="link" @click="handleEdit">
                Edit
              </a-button>
            </div>
          </a-col>
          <a-col class="gutter-row " :xs="12" :md="4">
            <div class="gutter-box align-right">
              <a-button style="width: 100%;" type="danger" shape="round">
                Delete
              </a-button>
            </div>
          </a-col>
          <a-col class="gutter-row " :xs="24" :md="4">
            <div class="gutter-box align-right">
              <a-button style="width: 100%;" type="primary" shape="round">
                Mark as Paid
              </a-button>
            </div>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
    <a-col class="gutter-row" :span="24">
      <a-card style="width: 100%; border-radius: 10px;">
        <a-row :gutter="[16,16]" type="flex" align="middle">
          <a-col class="gutter-row" :span="24">
            <div class="gutter-box address-detail">
              <p>{{ details && details.billFrom.address.street }}</p>
              <p>{{ details && details.billFrom.address.city }}</p>
              <p>{{ details && details.billFrom.address.postalCode }}</p>
              <p>{{ details && details.billFrom.address.country }}</p>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="24">
            <a-row :gutter="[16, 8]">
              <a-col class="gutter-row" :xs="24" :md="8">
                <div class="gutter-box bill-detail">
                  <p class="title-description">Invoice date</p>
                  <p class="value-description">{{ details && details.billTo.invoiceDate }}</p>
                </div>
              </a-col>
              <a-col class="gutter-row" :xs="24" :md="8">
                <div class="gutter-box bill-detail">
                  <p class="title-description">Name</p>
                  <p class="value-description">{{ details && details.billTo.name }}</p>
                </div>
              </a-col>
              <a-col class="gutter-row" :xs="24" :md="8">
                <div class="gutter-box bill-detail">
                  <p class="title-description">Sent to</p>
                  <p class="value-description">{{ details && details.billTo.email }}</p>
                </div>
              </a-col>
              <a-col class="gutter-row" :span="24">
                <div class="gutter-box bill-detail">
                  <p class="title-description">Description</p>
                  <p class="value-description">{{ details && details.billTo.projectDesc }}</p>
                </div>
              </a-col>
            </a-row>
          </a-col>
          <a-col class="gutter-row " :span="24">
            <a-table :columns="columns" :data-source="details && details.billTo.itemList " :pagination="false" :scroll="{x: true}">
              <span slot="total" slot-scope="text, record">
                {{ record.price*record.qty  }}
              </span>
            </a-table>
            <div class="total-amount">
              1000000
            </div>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
const columns = [
  {
    title: 'Item name',
    dataIndex: 'name',
    key: 'name',
    width: '40%',
    fixed: 'left'
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Price',
    className: 'column-price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Total',
    className: 'column-total',
    key: 'total',
    scopedSlots: { customRender: 'total' },
  },
];
export default {
  name: 'DetailsPage',
  props: {
    windowWidth: Number
  },
  data() {
    return {
      details: {},
      columns,
    }
  },
  created() {
    // console.log(this.$route.params.id, "===")
    this.getDetailById();
  },
  methods: {
    async getDetailById() {
      this.details = {
        id: '#30392',
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
          projectDesc: 'Graphict Design',
          itemList: [
            {
              key: 1,
              name: 'Banner Design',
              qty: 1,
              price: 500,
              total: 500
            },
            {
              key: 2,
              name: 'Print',
              qty: 2,
              price: 1500,
              total: 3000
            }
          ]
        }
      }
    },
    handleEdit() {
      this.$emit('handleDrawer', this.details);
    }
  }
}
</script>

<style>
.price {
  font-size: large;
}

.detail {
  font-size: medium;
}

.strong {
  font-weight: bold;
  
}

.align-right {
  text-align: right;
}

th.column-total, td.column-total {
  text-align: right !important;
}

th.column-price, td.column-price {
  text-align: right !important;
}

.total-amount {
  padding: 16px;
  width: 100%;
  text-align: right;
  background-color: #fafafa;
  font-weight: bold;
}

.address-detail > p {
  text-align: right;
  font-size: small;
  margin-bottom: 0px;
}

.bill-detail > p {
  margin-bottom: 0px;
}

.bill-detail > p:first-child {
  font-size: small;
  font-style: italic;
}

.bill-detail > p:nth-child(2) {
  font-weight: bold;
}

.ant-table td { white-space: nowrap; }

</style>