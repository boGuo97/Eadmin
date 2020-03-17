<template>
  <!-- 面包屑 -->
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>Eadmin</el-breadcrumb-item>
      <template
        v-for="(item, index) in breadcrumbRoute"
      >
        <template v-if="item.title">
          <el-breadcrumb-item :key="index">{{ item.title }}</el-breadcrumb-item>
        </template>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
import Cookies from '@/libs/cookies.js'
import setting from '@/config/setting.js'
export default {
  data() {
    return {
      breadcrumbRoute: []
    };
  },
  created() {
  },
  watch: {
    $route(to, from){
      console.log(to, setting)
    }
  },
};
</script>

<style lang="less" scoped>
.breadcrumb {
  display: inline-block;
}
</style>