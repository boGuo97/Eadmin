<template>
  <div class="tabs">
    <el-tabs :value="current" @tab-click="handleClick" class="ev-tabs" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in openPage"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>
    <div class="ev-dropdown-box">
      <el-dropdown trigger="click" class="ev-dropdown">
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-back">关闭左侧</el-dropdown-item>
          <el-dropdown-item icon="el-icon-right">关闭右侧</el-dropdown-item>
          <el-dropdown-item icon="el-icon-close">关闭其他</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button">全部关闭</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState('tabs', [
      'current',
      'openPage'
    ])
  },
  created() {
    console.log(this,this.current)
  },
  methods: {
    ...mapActions('tabs', [
      'close',
      'open'
    ]),
    handleClick(tab, event) {
      this.$router.push({
        name: tab.name
      })
      this.open(tab.name)
    },
    removeTab(targetName) {
      this.close(targetName)
    }
  }
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 6px 0 6px 8px;
  background-color: #f5f7f9;
  box-shadow: 0 6px 10px rgba(0,0,0,.09);
  position: relative;
  z-index: 100;
  .ev-dropdown-box {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 10px;
    top: 6px;
    background: #ffffff;
    border-radius: 2px;
  }
}
</style>

<style lang="less">
.ev-tabs {
  padding-right: 46px;
  .el-tabs__header {
    margin-bottom: 0;
    .el-tabs__nav-wrap::after, .el-tabs__active-bar {
      height: 0;
    }
    .el-tabs__nav-wrap {
      &.is-scrollable {
        padding: 0 42px;
      }
      .el-tabs__nav-prev, .el-tabs__nav-next {
        line-height: 32px;
        width: 32px;
        text-align: center;
        background-color: #fff;
        i {
          font-weight: bold;
        }
      }
      .el-tabs__nav-scroll {
        .el-tabs__nav {
          .el-tabs__item {
            background-color: #ffffff;
            margin-right: 6px;
            color: #808695;
            border-radius: 3px;
            height: 32px;
            line-height: 32px;
            &:focus {
              box-shadow: none;
            }
            &:nth-child(2) {
              padding-left: 20px;
            }
            &:last-child {
              padding-right: 20px;
              margin-right: 0;
            }
            &.is-active {
              color: #409EFF;
            }
          }
        }
      }
    }
  }
  .el-tabs__content {
    display: none !important;
  }
}

.ev-dropdown-box {
  .ev-dropdown {
    width: 100%;
    height: 100%;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    span {
      outline: none;
      color: #909399;
      display: block;
      i {
        margin-left: 0px;
      }
    }
  }
}
</style>