<template>
  <div class="EV-form">
    <el-form
      ref="formConfig.ref"
      :model="form"
      :label-width="formConfig.labelWidth"
      :inline="formConfig.inline"
      :size="formConfig.size"
      :disabled="formConfig.disabled"
    >
      <div v-for="(item, index) in formConfig.form" :key="index">
        <!-- input -->
        <el-form-item :label="item.label" v-if="item.type === 'input'">
          <el-input v-model="form[item.model]"></el-input>
        </el-form-item>
        <!-- 下拉菜单 -->
        <el-form-item :label="item.label" v-if="item.type === 'select'">
          <el-select v-model="form[item.model]" placeholder="请选择活动区域">
            <el-option
              v-for="(aItem, aIndex) in item.selectData"
              :key="aIndex"
              :label="aItem.label"
              :value="aItem.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- switch开关 -->
        <el-form-item :label="item.label" v-if="item.type === 'switch'">
          <el-switch v-model="form[item.model]"></el-switch>
        </el-form-item>
        <!-- 单选框 -->
        <el-form-item :label="item.label" v-if="item.type === 'radio'">
          <el-radio-group v-model="form[item.model]">
            <el-radio
              v-for="(aItem, aIndex) in item.selectData"
              :key="aIndex"
              :label="aItem.label"
            >{{ aItem.text }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 复选框 -->
        <el-form-item :label="item.label" v-if="item.type === 'checkbox'">
          <el-checkbox-group v-model="form[item.model]">
            <el-checkbox
              v-for="(aItem, aIndex) in item.selectData"
              :key="aIndex"
              :label="aItem.label"
            >{{ aItem.text }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formConfig: {
      type: Object,
      required: true,
      default: {
        inline: false
      }
    }
  },
  data() {
    return {
      form: {}
    }
  },
  created() {
    let _this = this;
    let newForm = this.formConfig.form;
    for(let n = 0; n < newForm.length; n++) {
      _this.$set(_this.form, newForm[n].model, newForm[n].default);
    }
  },
  methods: {
    submitForm() {
      console.log(this.form)
    }
  }
}
</script>

<style lang="less" scoped>

</style>