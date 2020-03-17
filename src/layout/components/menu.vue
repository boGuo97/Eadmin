<template>
  <!-- 菜单 -->
  <div class="ev-menu-box">
    <el-menu
      class="ev-menu"
      unique-opened
      :default-active="current"
      @select='routerLink'
    >
      <div v-for="(item, index) in frameInRoutes" :key="index">
        <el-submenu
          v-if='item.children && item.children.length > 0'
          class='ev-submenu'
          :index='item.name'
        >
          <template slot="title">
            <i :class="item.icon" class="gb-i-title"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="(aItem, aIndex) in item.children"
            :key="aIndex"
            :index="aItem.name"
            class="gb-menu-item"
          >
            {{ aItem.title }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.name" class="ev-outer-sphere" v-else>
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import frameInRoutes from '@/config/setting.js';
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      frameInRoutes: []
    }
  },
  created() {
    // 获取菜单渲染数据
    this.frameInRoutes = frameInRoutes.router;
  },
  computed: {
    ...mapState('tabs', [
      'current'
    ])
  },
  methods: {
    ...mapActions('tabs', [
      'open'
    ]),
    routerLink(index, indexPath) {
      let _this = this;
      _this.$router.push({
        name: index
      });
      _this.open(index);
      console.log(frameInRoutes)
    }
  }
}
</script>

<style lang="less" scoped>
.ev-menu-box {
  width: 100%;
  overflow: hidden;
  .ev-menu {
    border-right: none;
    height: calc(100vh - 61px);
    overflow-y: scroll;
    margin-right: -18px;
  }
}
</style>