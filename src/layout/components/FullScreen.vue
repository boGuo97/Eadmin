<template>
  <div class="full-screen" @click="fullFun">
    <div class="full-screen-box">
      <i class="el-icon-full-screen"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    fullFun() {
      let element = document.documentElement;
      if (this.isFullscreen()) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
    },
    isFullscreen() {
      let fullscreenElement = document.fullscreenElement;
      let msFullscreenElement = document.msFullscreenElement;
      let mozFullScreenElement = document.mozFullScreenElement;
      let webkitFullscreenElement = document.webkitFullscreenElement;
      return fullscreenElement || msFullscreenElement  || mozFullScreenElement || webkitFullscreenElement || false;
    }
  }
};
</script>

<style lang="less" scoped>
.full-screen {
  .full-screen-box {
    padding: 0 10px;
    i {
      color: #615a6e;
      font-size: 20px;
      position: relative;
      top: 3px;
    }
  }
}
</style>