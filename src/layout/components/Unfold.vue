<template>
  <!-- 展开收起 -->
  <div class="unfold">
    <i class="el-icon-s-operation"></i>
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
.unfold {
  display: inline-block;
  margin-right: 30px;
  i {
    color: #615a6e;
    font-size: 24px;
    cursor: pointer;
    position: relative;
    top: 2px;
  }
}
</style>