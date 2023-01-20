<template>
  <!-- :max-width="720" -->
  <a-drawer
    width= "100%"
    placement="left"
    :visible="visible"
    :closable="false"
    :body-style="{ paddingBottom: '80px' }"
    style="max-width: 650px;"
    @close="onClose"
  >
    {{ details && details.id }}
    <p class="title">Edit #12321</p>
    <a-form :form="form" layout="vertical" hide-required-mark>
      <p class="scope-form-title">Bill From</p>
      <a-row :gutter="[16,8]">
        <a-col :xs="24" :md="24">
          <a-form-item label="Street Address" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'address',
                {
                  rules: [{ required: true, message: 'Please input street address' }],
                },
              ]"
              placeholder="Please input street address"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="8">
          <a-form-item label="City" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'city',
                {
                  rules: [{ required: true, message: 'Please input city' }],
                },
              ]"
              placeholder="Please input city"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="8">
          <a-form-item label="Post code" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'postalCode',
                {
                  rules: [{ required: true, message: 'Please input post code' }],
                },
              ]"
              placeholder="Please input post code"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="8">
          <a-form-item label="Country" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'country',
                {
                  rules: [{ required: true, message: 'Please input country' }],
                },
              ]"
              placeholder="Please input country"
            />
          </a-form-item>
        </a-col>
      </a-row>

      <p class="scope-form-title">Bill To</p>
      <a-row :gutter="[16,8]">
        <a-col :xs="24" :md="24">
          <a-form-item label="Client's Name" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [{ required: true, message: `Please input client's name` }],
                },
              ]"
              placeholder="Please input client name"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="24">
          <a-form-item label="Client's Email" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid email',
                    },
                    {
                      required: true,
                      message: `Please input client's email`,
                    },
                  ],
                },
              ]"
              placeholder="Please input client's email"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="24">
          <a-form-item label="Street Address" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'address',
                {
                  rules: [{ required: true, message: 'Please input street address' }],
                },
              ]"
              placeholder="Please input street address"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="8">
          <a-form-item label="City" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'city',
                {
                  rules: [{ required: true, message: 'Please input city' }],
                },
              ]"
              placeholder="Please input city"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="8">
          <a-form-item label="Post code" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'postalCode',
                {
                  rules: [{ required: true, message: 'Please input post code' }],
                },
              ]"
              placeholder="Please input post code"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="8">
          <a-form-item label="Country" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'country',
                {
                  rules: [{ required: true, message: 'Please input country' }],
                },
              ]"
              placeholder="Please input country"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="12">
          <a-form-item label="Invoice Date" style="margin-bottom: unset;">
            <a-date-picker
              v-decorator="[
                'invoiceDate',
                {
                  rules: [{ required: true, message: 'Please select invoice date' }],
                },
              ]"
              placeholder="Please select invoice date"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="12">
          <a-form-item label="Payment Terms" style="margin-bottom: unset;">
            <a-select
              v-decorator="[
                'paymentTerms',
                { rules: [{ required: true, message: 'Please select payment terms' }] },
              ]"
              placeholder="Please select payment terms"
            >
              <a-select-option value="30">
                Next 30 days
              </a-select-option>
              <a-select-option value="14">
                Next 14 days
              </a-select-option>
              <a-select-option value="7">
                Next 7 days
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :xs="24" :md="24">
          <a-form-item label="Project Description" style="margin-bottom: unset;">
            <a-input
              v-decorator="[
                'projectDesc',
                {
                  rules: [{ required: true, message: 'Please input project description' }],
                },
              ]"
              placeholder="Please input project description"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <p class="scope-form-title">Item List</p>
      <ItemList />
    </a-form>
    <div
      :style="{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        padding: '16px',
        background: '#fff',
        textAlign: 'right',
        zIndex: 1,
      }"
    >
      <a-button :style="{ marginRight: '8px' }" @click="onClose" shape="round">
        Cancel
      </a-button>
      <a-button type="primary" @click="onClose" shape="round">
        Save Changes
      </a-button>
    </div>
  </a-drawer>
</template>

<script>
import ItemList from './ItemList.vue';
export default {
  name: 'Drawer',
  props: ['drawerData'],
  components: {
    ItemList
  },
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
      details: null
    };
  },
  // updated() {
  //   console.log(this.$props.isVisible, "== props updated")
  //   // this.handleDrawer(this.$props.isVisible);
  // },
  // created() {
  //   console.log(this.$props.isVisible, "== props created")
  //   // this.handleDrawer(this.$props.isVisible);
  // },
  // mounted() {
  //   console.log(this.$props.isVisible, "== props mounted")
  //   // this.handleDrawer(this.$props.isVisible);
  // },
  watch: {
    drawerData(newVal) {
      console.log(newVal, "==")
      this.visible = newVal.isVisible;
      this.details = newVal.data ? newVal.data : null;
    }
  },
  methods: {
    onClose() {
      this.visible = false;
      this.details= null;
      this.$emit('handleDrawer');
    },
  },
};
</script>

<style scoped>
.scope-form-title:first-child {
  margin-top: 12px;
}
.scope-form-title {
  margin-top: 24px;
  font-weight: bold;
  font-size: small;
  color: darkblue;
}

.title {
  font-size: large;
  font-weight: bold;
  padding: 16px 0px;
}
</style>