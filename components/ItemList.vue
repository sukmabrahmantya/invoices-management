<template>
  <div>
    <a-table bordered :data-source="dataSource" :columns="columns" :pagination="false" :bordered="false">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>
      <template slot="qty" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'qty', $event)" />
      </template>
      <template slot="price" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'price', $event)" />
      </template>
      <span slot="total" slot-scope="text, record">
        {{ record.price*record.qty  }}
      </span>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
        <a-button type="link" icon="delete"></a-button>
        </a-popconfirm>
      </template>
    </a-table>
    <a-button class="editable-add-btn" @click="handleAdd" icon="plus" shape="round">
      Add New Item
    </a-button>
  </div>
</template>

<script>
const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper" @click="edit">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" />
        </div>
      </div>
    `,
  props: {
    text: String,
  },
  data() {
    return {
      value: this.text,
      editable: true,
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit('change', this.value);
    },
    edit() {
      this.editable = true;
    },
  },
};
export default {
  name: 'ItemList',
  components: {
    EditableCell,
  },
  data() {
    return {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          qty: '1',
          price: '1560',
        },
        {
          key: '1',
          name: 'Edward King 1',
          qty: '2',
          price: '500',
        },
      ],
      count: 2,
      columns: [
        {
          title: 'Item Name',
          dataIndex: 'name',
          width: '40%',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'Qty',
          dataIndex: 'qty',
          width: '20%',
          scopedSlots: { customRender: 'qty' },
        },
        {
          title: 'Price',
          dataIndex: 'price',
          width: '20%',
          scopedSlots: { customRender: 'price' },
        },
        {
          title: 'Total',
          dataIndex: 'total',
          width: '20%',
          scopedSlots: { customRender: 'total' },
        },
        {
          title: '',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: '',
        qty: '',
        price: '',
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
  },
};
</script>

<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-top: 16px;
  padding: 12px;
  width: 100%;
  height: 100%;
}
</style>