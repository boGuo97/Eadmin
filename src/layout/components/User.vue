<template>
  <div class="user">
    <el-dropdown trigger="click">
      <span class="ev-user-box">
        <b style="padding-right:10px;">王大伟</b>
        <i class="el-icon-arrow-down"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.user {
  display: inline-block;
  padding: 0 10px;
  .ev-user-box {
    outline: none;
    display: block;
    height: 100%;
    cursor: pointer;
  }
}
</style>