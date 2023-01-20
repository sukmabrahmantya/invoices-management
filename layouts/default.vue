<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <SideBar v-if="windowWidth" :window-width="windowWidth" @handleWindowWidth="updateWindowWidth" />
    <Drawer :drawer-data="drawerStatus" @handleDrawer="updateDrawer"  />
    <a-layout>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px', overflow: 'scroll' }"
      >
        <NuxtChild v-if="windowWidth" :window-width="windowWidth" @handleDrawer="updateDrawer" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Drawer from '../components/CreateUpdate.vue';
import SideBar from '../components/SideBar.vue';
import dummyData from '../helpers/dummyData';

export default {
  name: 'IndexPage',
  components: {
    SideBar,
    Drawer
  },
  data() {
    return {
      isOpenDrawer: false,
      drawerStatus: {
        isVisible: false,
        data: null
      },
      windowWidth: 769
    }
  },
  mounted() {
    console.log(this.$auth)
    // const sessionData = this.sessionStorage.getItem('data');
    // if (!sessionData) this.sessionStorage.setItem('data', dummyData);
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth == 769 ? (this.windowWidth = 768) : (this.windowWidth = 769)
    },
    updateDrawer(obj) {
      let temp = {
        isVisible: !this.drawerStatus.isVisible,
        data: obj
      }
      this.drawerStatus = temp
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body{
  font-family: 'Lato', sans-serif;
}

.ant-layout {
  height: 100vh;
  overflow-x: hidden
}
.ant-layout-sider {
  border-radius: 0 20px 20px 0;
}
.ant-layout-header {
  padding: 0px
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
  background: rgba(255, 255, 255, 0.2);
  /* margin: 16px; */
  aspect-ratio : 1 / 1;
  width: 100%;
  border-radius: 0 20px 20px 0;
  background-color: blueviolet;
  font-size: 36px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#components-layout-demo-custom-trigger .avatar {
  display: flex;
  padding: 16px;
  width: 100%;
  aspect-ratio: 2 /1;
  align-items: center;
  justify-content: center;
  border-top: 1px solid gray;
}
#components-layout-demo-custom-trigger .theme {
  color: white !important;
  padding: 12px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#components-layout-demo-custom-trigger .theme > .ant-btn-link {
  color: white !important;
}
#components-layout-demo-custom-trigger .logo-mobile {
  height: 100%;
  background:blueviolet;
  color: white;
  float: left;
  padding: 0 12px;
  font-size: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 0 18px 18px 0;
}

#components-layout-demo-custom-trigger .theme-mobile {
  color: white !important;
  padding: 12px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#components-layout-demo-custom-trigger .theme-mobile > .ant-btn-link {
  color: white !important;
}

#components-layout-demo-custom-trigger .avatar-mobile {
  display: flex;
  padding: 12px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-left: 1px solid gray;
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
  padding: 10px;
  height: 100%;
  font-weight: bold;
}

.ant-calendar-picker {
  width: 100%
}
</style>