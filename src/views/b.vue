<template>
  <div>
    <el-alert
      title="该页面为表单组件参考页面，简易的封装element表单组件基础功能，展示其功能传参，如有需要自行修改EVform组件"
      type="info"
      style="margin-bottom: 20px"
    >
    </el-alert>
    <div class="form-box">
      <EVform :formConfig="formConfig"></EVform>
    </div>
  </div>
</template>

<script>
import EVform from '@/components/EvForm.vue';
export default {
  data() {
    return {
      formConfig: {
        labelWidth: '100px',
        ref: 'form',
        form: [
          {
            type: 'input',
            model: 'input',
            label: 'input框：',
            default: '111'
          },
          {
            type: 'select',
            model: 'select',
            label: '下拉菜单：',
            default: '2',
            selectData: [
              {
                label: '区域一',
                value: '1'
              },
              {
                label: '区域二',
                value: '2'
              }
            ]
          },
          {
            type: 'switch',
            model: 'switch',
            label: '开关：',
            default: true
          },
          {
            type: 'radio',
            model: 'radio',
            label: '单选框：',
            default: 3,
            selectData: [{label: 3,text: '选项一'},{label: 6,text: '选项二'},{label: 9,text: '选项三'}]
          },
          {
            type: 'checkbox',
            model: 'checkbox',
            label: '复选框：',
            default: [3],
            selectData: [{label: 3,text: '复选框 A'},{label: 6,text: '复选框 B'},{label: 9,text: '复选框 C'}]
          }
        ]
      }
    }
  },
  components: {
    EVform
  }
}
</script>

<style lang="less" scoped>
.form-box {
  width: 800px;
  margin: 40px auto;
}
</style>