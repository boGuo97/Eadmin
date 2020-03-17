<template>
  <!--
    data 表格数据
    tableConfig 表格配置
      stripe  是否开启斑马纹
      border  是否开启边框
      size  表格的尺寸
      empty-text 空数据时显示的文字
      fit 列的宽度是否自撑开
      show-header 是否显示表头
      selection-change 多选框事件
  -->
  <div class="table" v-loading="tableConfig.loading">
    <el-table
      ref="table"
      style="width: 100%"
      :data="tableData"
      :stripe="tableConfig.stripe"
      :border="tableConfig.border"
      :size="tableConfig.size"
      :fit="tableConfig.fit"
      :show-header="tableConfig.showHeader"
      :empty-text="tableConfig.emptyText"
      @selection-change="selectionChange"
    >
      <div v-for="(item, index) in tableConfig.tableHeaders" :key="index">
        <!-- 
          type 对应列的类型。selection 多选框；index 索引（从 1 开始计算）；expand 可展开的按钮（暂无此功能）
          index 自定义索引
          prop 对应列内容的字段名，对应后台数据字段
          label 表头标题
          width 对应列的宽度
          min-width 对应列的最小宽度
          fixed 固定列 true, left, right true为左侧
          formatter 用来格式化内容
          show-overflow-tooltip 当内容过长被隐藏时显示 tooltip
          align 对齐方式
        -->
        <el-table-column
          v-if="item.type === 'index'"
          :label="item.label"
          width="60"
          fixed="left"
          align="center"
          :index="item.index"
          :type="item.type"
        >
        </el-table-column>
        <!-- 多选框 -->
        <el-table-column
          v-else-if="item.type === 'selection'"
          :label="item.label"
          width="60"
          fixed="left"
          align="center"
          :type="item.type"
        >
        </el-table-column>
        <!-- 自定义主体数据 template模板类 -->
        <el-table-column
          v-else-if="item.template"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :min-width="item.minWidth"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :align="item.align"
        >
          <template slot-scope="scope">
            <slot :name="item.template" :index="scope.$index" :rowData="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- 自定义主体数据 formatter类 -->
        <el-table-column
          v-else-if="item.formatter"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :min-width="item.minWidth"
          :fixed="item.fixed"
          :formatter="item.formatter"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :align="item.align"
        >
          <template slot-scope="scope">
            <div v-html="item.formatter(scope.row[item.prop], scope.$index)"></div>
          </template>
        </el-table-column>
        <!-- 主体数据展示 -->
        <el-table-column
          v-else
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :min-width="item.minWidth"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :align="item.align"
        >
        </el-table-column>
      </div>
    </el-table>
    <div class="page" v-if="paginationConfig.isPagination">
      <!-- 
        small 是否使用小型分页样式
        page-size 每页显示条目个数
        background 是否为分页按钮添加背景色
        total 总条目数
        pager-count 页码按钮的数量，当总页数超过该值时会折叠
        current-page 当前页数
        layout 组件布局，子组件名用逗号分隔
        page-sizes 每页显示个数选择器的选项设置
        disabled 是否禁用
        hide-on-single-page 只有一页时是否隐藏
        size-change pageSize 改变时会触发
        current-change currentPage 改变时会触发
      -->
      <el-pagination
        :small="paginationConfig.small"
        :page-size="paginationConfig.pageSize"
        :total="paginationConfig.total"
        :pager-count="paginationConfig.pagerCount"
        :current-page="paginationConfig.currentPage"
        :layout="paginationConfig.layout"
        :page-sizes="paginationConfig.pageSizes"
        :disabled="paginationConfig.disabled"
        :hide-on-single-page="paginationConfig.hideOnSinglePage"
        :background="paginationConfig.backgroundColor"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableConfig: {
      type: Object
    },
    tableData: {
      type: Array
    },
    paginationConfig: {
      type: Object
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.tableConfig)
  },
  methods: {
    // 多选框事件
    selectionChange(selection) {
      this.$emit("selectionChange", selection);
    },
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  margin-top: 20px;
  text-align: right;
}
</style>