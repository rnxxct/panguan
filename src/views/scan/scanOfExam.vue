<template>
  <div style="width: 69%; margin: 0 auto">
    <iframe src="/panguan/static/scan/DWT_Scan_Upload_Demo.html" id="iframe" ref="iframe"
            frameborder="3" scrolling="auto" style="margin: 0 auto;border: 2px;width: 500px;height: 300px;display: none"></iframe>
    <div>
      <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
        <el-table-column align="left" width="100%" prop="name" label="考试名称"></el-table-column>
        <el-table-column align="left" prop="subjectName" label="学科"></el-table-column>
        <el-table-column align="left" prop="createUserName" label="创建人"></el-table-column>
        <el-table-column align="left" prop="createTime" label="创建时间" :formatter="dateFormat"></el-table-column>
        <el-table-column align="left"  label="动作">
          <template slot-scope="scope">
<!--
            <el-button size="mini" type="primary" @click.native="handleScan(scope.$index,scope.row)"
                       style="float: left;">
              扫描
            </el-button>
-->
          <!--  <el-button size="mini" type="primary" @click.native="handleScanNew(scope.$index,scope.row)"
                       style="float: left;">
              扫描
            </el-button>-->
            <el-button size="mini" type="primary" @click.native="handleScanChoose(scope.$index,scope.row)"
                       style="float: left;">
              扫描
            </el-button>
            <el-button size="mini" type="danger" @click.native="handleClear(scope.$index,scope.row)"
                       style="float: left;">
              清空数据
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="清空扫描数据" :visible.sync="isClear" width="20%">
        <div slot="footer" class="dialog-footer">
          <el-button @click="isClear=false">取 消</el-button>
          <el-button type="primary"  @click.native="cleanData">确 定</el-button>
        </div>
      </el-dialog>
      <div class="pagination-container">
        <el-pagination
          :page-sizes="[5,10,20,30, 50]"
          :current-page="listQuery.page"
          :page-size="listQuery.pageSize"
          :total="total"
          background
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"/>
      </div>
    </div>
  </div>
</template>
<script>
  import {getList} from '@/api/exam/exam.js'
  import {emptyData} from '@/api/scan/scan.js'
  import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
  import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component";
  export default {
    components: {
      ElDialog,
      ElRadio
    },
    data(){
      return {
        isClear:false,
        testID:0,
        tableData: [],
        total: 0,
        radio: 1,
        screenHeight: 0,
        listQuery: {
          pageNum: 1,
          pageSize: 10,
          isAll: false,
        },
        examParams: {
          id: 0,
          name: '',
          gradeID: 0,
          subjectID: 0,
          schoolID: 0
        }
      }
    },
    created(){
      this.screenHeight = document.body.clientWidth
      this.initTable();
    },
    mounted(){
      this.isDownloadMsiTimer()
    },
    methods: {
      isDownloadMsiTimer(){
        var timer1= setInterval(function () {
          if (sessionStorage.getItem("downloadMis")==1){
            document.getElementById("iframe").style.display="block";
            clearInterval(timer1);
          }else {
              if (sessionStorage.getItem("downloadMis")==true || sessionStorage.getItem("downloadMis")==''){
                clearInterval(timer1);
              }
          }
        },500)
      },
      initTable(){
        getList(this.listQuery).then(response => {
          this.tableData = response.data.list;
          this.total = response.data.total
        })
      },
      getCurrentRow(index, row){
        this.radio = index
      },
      tableRowClassName(row, rowIndex){
        row.index = rowIndex
      },
      selectedHighlight(){
        if ((this.getIndex) == rowIndex) {
          return {
            "background-color": "rgb(250,195,100)"
          }
        }
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.initTable()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val
        this.initTable()
      },
      rowClick(row, event, column){
        this.getIndex = row.index
      },
      handleScan(index, row){
        sessionStorage.removeItem("examID")
        sessionStorage.removeItem("isScanDone")
        sessionStorage.setItem("examID", row.id)
        let  that =this
       /* this.$refs.iframe.contentWindow.AcquireImage();
        var timer1= setInterval(function () {
          if (sessionStorage.getItem("isScanDone")==1){
            sessionStorage.removeItem("isScanDone")
            clearInterval(timer1);
            that.$router.push('/scan/scanResult/' + row.id)
          }
        },500)*/ /*判断是否执行完毕扫描的代码*/
        that.$router.push('/scan/scanResult/' + row.id)
        this.$router.push({path:"/scan/scanResult/",query:{testID:row.id,name:row.name}})

      },
      handleScanNew(index,row){
          sessionStorage.removeItem("examID")
          sessionStorage.removeItem("isScanDone")
          sessionStorage.setItem("examID",row.id)
          this.$router.push({path:'/scan/scanLast/',query:{testID:row.id,name:row.name}})
      },
      handleScanChoose(index,row){
        sessionStorage.removeItem("examID")
        sessionStorage.removeItem("isScanDone")
        sessionStorage.setItem("examID",row.id)
        this.$router.push({path:'/scan/scanChoose/',query:{testID:row.id,name:row.name}})
      },
      dateFormat(row, column, cellValue, index){
        const daterc = row[column.property]
        return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
      },
      handleClear(index,row){
          this.isClear=true
          this.testID = row.id
      },
      cleanData(){
        this.isClear=false
        emptyData({testID:this.testID}).then(response=>{
            this.$message({
              type:'success',
              message:'成功清空',
              duration: 800
            })
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  a {
    text-decoraction: none;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .dialogClass {
    background-color: red;
    height: 1000px !important;
    overflow: auto
  }
</style>
