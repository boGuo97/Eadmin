<template>
  <div class="theme">
    <div class="theme-box" @click="dialogVisible = true">
      <i class="el-icon-sunny"></i>
    </div>
    <el-dialog
      title="主题"
      :visible.sync="dialogVisible"
      width="620px"
      :before-close="handleClose"
      append-to-body
      class="ev-theme-dialog"
    >
      <div>
        <GBtable
          :tableConfig = "tableConfig"
          :tableData = "tableData"
          :paginationConfig = "paginationConfig"
        >
          <div slot="handle" slot-scope="scope">
            <el-button v-if="scope.rowData.name === isUse" type="success" round size="small" icon="el-icon-check">使用中</el-button>
            <el-button v-else round size="small" @click="use(scope)">使用</el-button>
          </div>
          <div slot="sampleGraph" slot-scope="scope">
            <el-image 
              style="width: 100px; height: 50px"
              :src="scope.rowData.img"
              :preview-src-list="[scope.rowData.img]"
            >
            </el-image>
          </div>
        </GBtable>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import GBtable from '@/components/GBtable.vue';
import Setting from '@/config/setting.js';
import { mapState, mapActions } from 'vuex';
import cookies from '@/libs/cookies.js'
export default {
  data() {
    return {
      dialogVisible: false,
      tableConfig: {
        border: true,
        tableHeaders: [
          {
            prop: 'img',
            label: '示例图',
            align: 'center',
            template: 'sampleGraph'
          },
          {
            prop: 'title',
            label: '主题名称',
            align: 'center'
          },
          {
            label: '操作',
            align: 'center',
            width: 200,
            template: 'handle',
            fixed: 'right'
          }
        ]
      },
      tableData: [],
      paginationConfig: {
        isPagination: false
      },
      isUse: 'ev'
    };
  },
  computed: {
    ...mapState('theme', [
      'activeName'
    ])
  },
  created() {
    this.tableData = Setting.theme.list;
    console.log(this.activeName)
    if(cookies.get('theme-active')) {
      this.isUse = cookies.get('theme-active');
    }
  },
  methods: {
    ...mapActions('theme', [
      'set'
    ]),
    handleClose(done) {
      done();
    },
    use(item) {
      this.isUse = item.rowData.name;
      this.set(item.rowData.name)
    }
  },
  components: {
    GBtable
  }
};
</script>

<style lang="less" scoped>
.theme {
  .theme-box {
    padding: 0 10px;
    i {
      color: #615a6e;
      font-size: 22px;
      position: relative;
      top: 3px;
    }
  }
}
</style>

<style lang="less">
.ev-theme-dialog {
  .el-dialog__body {
    padding: 10px 20px 20px;
  }
}
</style>