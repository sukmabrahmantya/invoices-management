<template>
  <a-row :gutter="[24,48]" style="margin: auto; padding-top: 24px;" :style= "[windowWidth > 768 ? {'width': '80%'} : {'width': '100%' }]" type="flex" align="middle">
    <a-col class="gutter-row" :xs="12" :md="12" style="padding-top: 0px; padding-bottom: 0px;">
      <div class="gutter-box title">
        <p>Invoices</p>
        <p>There are 7 total invoices</p>
      </div>
    </a-col>
    <a-col class="gutter-row" :xs="12" :md="6" style="padding-bottom: 0px; padding-top: 12px;">
      <!-- <div class="gutter-box" style="text-align: center;" :style= "[windowWidth > 768 ? {'text-align': 'right'} : {'text-align': 'center' }]"> -->
      <div class="gutter-box" style="text-align: center;" :style= "[windowWidth > 768 ? {'text-align': 'center'} : {'text-align': 'right' }]">
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" style="color: black;" @click="e => e.preventDefault()">
            Filter by status <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="http://www.alipay.com/">1st menu item</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">2nd menu item</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              3rd menu item
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-col>
    <a-col class="gutter-row" :xs="24" :md="6" style="padding-top: 0px; padding-bottom: 0px;">
      <div class="gutter-box" style="text-align: center;">
        <a-button type="primary" shape="round" class="btn-new-invoice" @click="createInvoice">
          <a-icon type="plus-circle" theme="filled" />
          New Invoice
        </a-button>
      </div>
    </a-col>
    <a-col class="gutter-row" :span="24">
      <!-- <div class="gutter-box" style="border: 1px solid blue">
        <Card />
      </div> -->
      <a-row :gutter="[8,8]">
        <a-col class="gutter-row" :span="24">
          <div class="gutter-box">
            <NuxtLink to="/details/1">
              <Card />
            </NuxtLink>
          </div>
        </a-col>
        <a-col class="gutter-row" :span="24">
          <div class="gutter-box">
            <Card />
          </div>
        </a-col>
        <a-col class="gutter-row" :span="24">
          <div class="gutter-box">
            <Card />
          </div>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
import Card from '../components/Card.vue';
import dummyData from '../helpers/dummyData';
export default {
  name: 'IndexPage',
  props: {
    windowWidth: Number
  },
  components: {
    Card,
  }, 
  data() {
    return {
      collapsed: true,
    }
  },
  created() {
    // console.log(dummyData, "===")
  },
  // mounted () {
  //   this.windowWidth = window.innerWidth;
  // },
  // beforeDestroy () {
  //   window.removeEventListener('resize', this.onResize); 
  // },
  methods: {
    createInvoice() {
      this.$emit('handleDrawer', null);
    }
    // onResize() {
    //   this.windowWidth = window.innerWidth // add this line
    // }
  }
}
</script>

<!-- <style>
@import url('https://fonts.cdnfonts.com/css/futura-pt');

body{
  font-family: 'Futura PT', sans-serif !important;
}

.ant-layout {
  height: 100vh;
  overflow-x: hidden
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#components-layout-demo-custom-trigger .logo2 {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}

.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}

.gutter-box {
  padding: 5px 0;
}

.title > p:first-child {
  font-size: xx-large;
  margin-bottom: 1px;
  font-weight: bold;
}

.title > p:nth-child(2) {
  font-size: small;
}

.btn-new-invoice {
  font-size: medium;
  width: 100%;
  border-radius: 50px;
  padding: 10px;
  height: 100%;
  font-weight: bold;
}
</style> -->