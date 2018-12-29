<template>
  <div class="domeWapper">
    <div class="btnWapper">
      <el-button type="primary" @click="mixniClick" size="small">点击查询</el-button>
      <el-button type="primary" @click="exportExcel" size="small">导出数据</el-button>
    </div>
    <el-table
    v-loading="loading"
    :data="tableData"
    border
    stripe
    style="width: 100%">
      <el-table-column
        align="center"
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import mixin from '@/assets/mixins/mixin.js'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  // mixins: [mixin],
  data () {
    return {
      loading: false,
      msg: 'baixue',
      tableData: []
    }
  },
  created () {
    this.hello()// mixins混入的方法
  },
  mounted () {},
  methods: {
    async mixniClick () {
      // console.log(this.name2)点击按钮的时候获取，mixins混入的数据
      let res = await this.$http.post(`/getTableList`)
      this.tableData = res.list
    },
    exportExcel () {
      console.log('导出数据')
      var wb = XLSX.utils.table_to_book(document.querySelector('.el-table'))
      var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'sheetjs.xlsx')
      } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
      return wbout
    }
  }
}
</script>
<style>
.domeWapper {
  /* width: 100%; */
  min-width: 600px;
  padding:0 40px 40px 40px;
}
.btnWapper{
  padding-bottom: 20px;
  text-align: right;
}
</style>
