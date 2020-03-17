<template>
  <div class="time">
    <span>{{ hours }}</span>
    <span>:</span>
    <span>{{ minutes }}</span>
    <span>:</span>
    <span>{{ seconds }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: '',
      minutes: '',
      seconds: ''
    };
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(function(){
      let time = new Date();
      _this.hours = time.getHours() >= 10 ? time.getHours() : '0' + time.getHours();
      _this.minutes = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes();
      _this.seconds = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds();
    });
  },
  beforeDestroy() {
    if(this.timer){
      clearInterval(this.timer);
    }
  }
};
</script>

<style lang="less" scoped>
.time {
  display: inline-block;
  padding: 0 16px;
  span {
    font-weight: bold;
    color: #555555;
  }
}
</style>