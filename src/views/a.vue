<template>
  <!-- 表格示例 -->
  <div class="ev-table">
    <el-alert
      title="该页面为表格组件参考页面，简易的封装element表格组件基础功能，展示其功能传参，如有需要自行修改GBtable组件"
      type="info"
      style="margin-bottom: 20px"
    >
    </el-alert>
    <GBtable
      :tableConfig = "tableConfig"
      :tableData = "tableData"
      :paginationConfig = "paginationConfig"
    >
      <div slot="handle" slot-scope="scope">
        <el-button type="primary" class="ev-button-mini" @click="modification(scope)">修改</el-button>
        <el-button type="danger" class="ev-button-mini" @click="remove(scope)">删除</el-button>
      </div>
    </GBtable>
    <el-dialog
      title="修改"
      :visible.sync="dialogVisible"
      width="520px"
      class="ev-dialog"
    >
      <div class="modification-box">
        <el-form ref="form" :model="form" label-width="100px" label-position="top" size="small" class="ev-form">
          <el-form-item label="姓名：" class="ev-form-position-top">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="身份证号：" class="ev-form-position-top">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="标题：" class="ev-form-position-top">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="内容：" class="ev-form-position-top">
            <el-input type="textarea" v-model="form.csentence"></el-input>
          </el-form-item>
          <el-form-item label="Email：" class="ev-form-position-top">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item class="ev-form-handle">
            <el-button type="primary" @click="onSubmit" :loading="loading">确 定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { tableData } from '@/api/api.js';
import GBtable from '@/components/GBtable.vue';
export default {
  data() {
    return {
      tableData: [],
      tableConfig: {
        border: true,
        loading: true,
        tableHeaders: [
          {
            type: 'index',
            index: 1
          },
          {
            prop: 'name',
            label: '姓名',
            minWidth: 100,
            showOverflowTooltip: true,
            align: 'center'
          },
          {
            prop: 'id',
            label: '身份证号',
            minWidth: 160,
            showOverflowTooltip: true,
            align: 'center'
          },
          {
            prop: 'title',
            label: '标题',
            minWidth: 200,
            showOverflowTooltip: true,
            align: 'center'
          },
          {
            prop: 'csentence',
            label: '内容',
            minWidth: 200,
            showOverflowTooltip: true,
            align: 'center'
          },
          {
            prop: 'email',
            label: 'Email',
            minWidth: 200,
            showOverflowTooltip: true,
            align: 'center'
          },
          {
            prop: 'county',
            label: '地址',
            minWidth: 200,
            showOverflowTooltip: true,
            align: 'center'
          },
          {
            prop: 'boolean',
            label: '性别',
            align: 'center',
            formatter(row) {
              if(row) {
                return "<span style='color: #409EFF'>男</span>"
              } else {
                return "<span style='color: #F56C6C'>女</span>"
              }
            }
          },
          {
            label: '操作',
            align: 'center',
            fixed: 'right',
            template: 'handle',
            width: 200
          }
        ]
      },
      paginationConfig: {
        isPagination: true,
        backgroundColor: true,
        total: 1000,
        currentPage: 1,
        pageSize: 10
      },
      dialogVisible: false,
      form: {
        name: '',
        id: '',
        title: '',
        csentence: '',
        email: '',
      },
      loading: false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let _this = this;
      _this.tableConfig.loading = true;
      tableData().then(res => {
        console.log(res , 11123)
        _this.tableConfig.loading = false;
        _this.tableData = res;
      }).catch(err => {

      })
    },
    remove(item) {
      console.log(item)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    modification(item) {
      console.log(item)
      this.dialogVisible = true;
      this.form.name = item.rowData.name;
      this.form.id = item.rowData.id;
      this.form.title = item.rowData.title;
      this.form.csentence = item.rowData.csentence;
      this.form.email = item.rowData.email;
    },
    onSubmit() {
      let _this = this;
      _this.loading = true;
      setTimeout(function() {
        _this.dialogVisible = false;
        _this.loading = false;
      }, 1500);
    }
  },
  components: {
    GBtable
  }
}
</script>

<style lang="less" scoped>
</style>