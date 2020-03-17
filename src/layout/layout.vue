<template>
  <div class="layoutPage">
    <el-container>
      <el-aside width="260px" class="ev-aside">
        <div class="ev-b-img">
          <div class="ev-logo"><img :src="logo" alt=""></div>
          <Menu></Menu>
        </div>
      </el-aside>
      <el-container class="ev-container" style="padding-left: 260px">
        <div class="ev-flwx">
          <el-header class="ev-header-box">
            <div class="ev-header-fun clear">
              <div class="ev_fun_l fl">
                <Unfold></Unfold>
                <Breadcrumb></Breadcrumb>
              </div>
              <div class="ev_fun_r fr">
                <!-- <Time></Time> -->
                <Theme></Theme>
                <FullScreen></FullScreen>
                <User></User>
              </div>
            </div>
          </el-header>
          <Tabs></Tabs>
        </div>
        <el-main class="ev-main">
          <div class="ev-main-box">
            <el-card class="box-card" shadow="never">
              <router-view />
            </el-card>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/menu.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Unfold from './components/Unfold.vue';
import Theme from './components/Theme.vue';
import Time from './components/Time.vue';
import User from './components/User.vue';
import Tabs from './components/Tabs.vue';
import FullScreen from './components/FullScreen.vue';
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      // 菜单展开状态
      asideWidth: '260px',
      // 菜单折叠状态
      asideWidthCollapse: '65px',
      // logo
      logo: require('@/assets/images/all.png'),
      // logo: require('@/assets/images/logo.7b8cc895.png')
    }
  },
  methods: {
   
  },
  components: {
    Menu,
    Breadcrumb,
    Unfold,
    Theme,
    Time,
    User,
    Tabs,
    FullScreen
  }
}
</script>

<style lang="less" scoped>
.ev-aside {
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  .ev-b-img {
    .ev-logo {
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      font-size: 30px;
      text-align: center;
      img {
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}

.ev-flwx {
  position: fixed;
  z-index: 100;
  top: 0;
  width: calc(100vw - 260px);
  left: 260px;
  .ev-header-box {
    line-height: 60px;
    background-color: #ffffff;
    .ev-header-fun {
      .ev_fun_r {
        .theme, .user, .full-screen {
          transition: all .2s ease-in-out;
          display: inline-block;
          cursor: pointer;
        }
        .theme:hover, .user:hover, .full-screen:hover {
          background-color: #f8f8f9;
        }
      }
    }
  }
}

.ev-main {
  overflow: hidden;
  padding: 0;
  height: 100vh;
  .ev-main-box {
    background-color: #f5f7f9;
    margin-top: 103px;
    height: calc(100vh - 103px);
    overflow-y: auto;
    padding: 12px;
  }
}
</style>

<style lang="less">
@import '~@/assets/style/theme/ev/ev.less';
</style>

<style lang="less">
@import '~@/assets/style/theme/future/future.less';
</style>

<style lang="less">
@import '~@/assets/style/theme/concise/concise.less';
</style>