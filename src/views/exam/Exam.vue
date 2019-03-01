<template>
  <div style="width: 69%; margin: 0 auto">
    <el-button type="primary" @click="handleReturn" v-bind:style={display:display}>取消</el-button>
    <div v-loading="loading2" element-loading-text="分析中" element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">
      <span style="float: left">请选择考试模板</span><br/>
      <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
        <el-table-column align="left" prop="name" label="模板名称"></el-table-column>
        <el-table-column align="left" prop="subjectName" label="学科"></el-table-column>
        <el-table-column align="left" prop="createUserName" label="创建人"></el-table-column>
        <el-table-column align="left" prop="createTime" label="创建时间" :formatter="dateFormat"></el-table-column>
        <el-table-column align="left" label="动作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click.native="checkTemplate(scope.$index,scope.row)"
                       style="float: left;">
              选择
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <iframe src="/panguan/static/scan/Scan_Standard.html" ref="iframe" width="100" height="50" frameborder="3"
              scrolling="auto" style="border: 2px;display: none"></iframe>
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
      <el-dialog width="55%" :visible.sync="isShow">
        <template>
          <div style="display: inline-block; width: 49%;">
            <span class="demonstration"><!--正面图片--></span>
            <el-carousel :height="imgHeight" :autoplay="false" arrow="always" ref="carousel1" indicator-position="none"
                         @change="handleChange" :loop=false>
              <el-carousel-item v-for="(item,index) in imageList1" :key="index">
                <img :src="item" width="100%" ref="picHeight">
              </el-carousel-item>
              <!--
                            <img :src="imageList1[0]" width="100%" height="141%">
              -->
            </el-carousel>
          </div>
          <div style="display: inline-block; width: 49%;height: 100%" v-if="this.picSize!=1">
            <span class="demonstration"><!--反面图片--></span>
            <el-carousel :height="imgHeight" :autoplay="false" arrow="always" ref="carousel2" indicator-position="none"
                         @change="handleChange" :loop=false>
              <el-carousel-item v-for="(item,index) in imageList2" :key="index">
                <img :src="item" width="100%" ref="picHeight">
              </el-carousel-item>
              <!--
                            <img :src="imageList1[1]" width="100%" height="141%">
              -->
            </el-carousel>
          </div>
          <div>
            <el-button type="primary" @click="handleDownload">
              下载文档
            </el-button>
           <!-- <el-button type="success" @click="createExam">
              创建考试
            </el-button>-->
            <el-button type="success" @click="handleScan">
              扫描答案
            </el-button>
            <el-button type="warning" @click="handleCanvas">
              点选答案
            </el-button>
            <el-button type="info" @click="isShow=false">
              取 消
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import {getTemplateList, getTemplateUrls} from '@/api/template/template.js'
  import {getPicUrls} from '@/api/exam/exam.js'
  import {isDone} from '@/api/exam/scan.js'
  import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
  import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
      ElButton,
      ElDialog,
      ElRadio
    },
    data(){
      return {
        picSize: 2,
        imageList: [],
        imageList1: [],
        imageList2: [],
        standardSheetID: 0,
        loading2: false,
        docURL: '',
        display:'none',
        tableData: [],
        isShow: false,
        total: 0,
        radio: 1,
        screenHeight: 0,
        imgHeight: '600px',
        picTimer: {},
        listQuery: {
          pageNum: 1,
          pageSize: 10,
        },
        examParams: {
          id: 0,
          name: '',
          gradeID: 0,
          subjectID: 0,
          schoolID: 0,
        }
      }
    },
    created(){
      this.screenHeight = document.body.clientWidth
      this.initTable();
    },
    mounted(){
      var that = this
      window.onresize = function temp() {
        console.log("====" + JSON.stringify(that.$refs.picHeight))
        that.imgHeight = that.$refs.picHeight[0].height + 'px'
        console.log("---------" + that.imgHeight)
      }
    },
    beforeRouteLeave(to, from, next){
      clearInterval(this.timer)
      next()
    },
    methods: {
      initTable(){
        getTemplateList(this.listQuery).then(response => {
          this.tableData = response.data.templates;
          this.total = response.data.total
        })
      },
      timer(){

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
        console.log(row, "row")
        this.getIndex = row.index
      },
      checkTemplate(index, row){
        /*多张展示*/
        var that = this
        var picTimer = setInterval(function () {
          if (that.$refs.picHeight[0].complete) {
            //that.initCanvas2()
            that.imgHeight = that.$refs.picHeight[0].height + 'px'
            clearInterval(picTimer)
          }
        }, 1000)
        this.picTimer = picTimer

        this.examParams = row
        getTemplateUrls({id: row.id}).then(response => {
          this.imageList = response.data.imgURL
          this.docURL = response.data.docURL
          if (this.imageList.length == 1) {
            this.picSize = 1;
            this.imageList1[0] = this.imageList[0]
          } else {
            for (let i = 0; i < this.imageList.length; i++) {
              if (i % 2 == 0) {
                this.imageList1.push(this.imageList[i])
              } else {
                this.imageList2.push(this.imageList[i])
              }
            }
          }
        })
        this.isShow = true
      },
      createExam(){
        this.isShow = false
        this.$router.push({
          path: "/exam/create/",
          query: {
            subjectID: this.examParams.subjectID,
            id: this.examParams.id,
            gradeID: this.examParams.gradeID,
            schoolID: this.examParams.schoolID
          }
        })
      },
      dateFormat(row, column, cellValue, index){
        const daterc = row[column.property]
        return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
      },
      handleDownload(){
        var a = document.createElement('a')
        var event = new MouseEvent('click')
        a.download = name || '下载图片名称'
        a.href = this.docURL
        a.target = "_blank"
        a.dispatchEvent(event)
        this.isShow = false
      },
      handleCanvas(){
        this.$router.push({
          path: "/exam/canvas", query: {
            templateID: this.examParams.id,
            subjectID: this.examParams.subjectID,
            gradeID: this.examParams.gradeID,
            schoolID: this.examParams.schoolID
          }
        })
      },
      /*当走马灯改变的时候出发*/
      handleChange(new_index, old_index){
        this.$refs.carousel1.setActiveItem(new_index)
        this.$refs.carousel2.setActiveItem(new_index)
      },
      handleScan(){
        this.isShow = false
        sessionStorage.removeItem("standardSheetID")
        sessionStorage.removeItem("templateID")
        sessionStorage.setItem("templateID", this.examParams.id)
        this.$refs.iframe.contentWindow.AcquireImage();
        if (this.$refs.iframe.contentWindow.bSelected) {//判断是否点击确定
          var that = this;
          this.loading2 = true
          this.display='block'
          var timer = setInterval(function () {
            let sheetID = sessionStorage.getItem("standardSheetID")
            if (sheetID != null && sheetID != '' && sheetID != 0) {
              that.standardSheetID = sheetID
              isDone({sheetID: that.standardSheetID}).then(response => {
                if (response.data == 1) {
                  that.loading2 = false
                  clearInterval(timer)
                  that.$router.push({
                    path: "/exam/canvas",
                    query: {
                      templateID: that.examParams.id,
                      subjectID: that.examParams.subjectID,
                      gradeID: that.examParams.gradeID,
                      schoolID: that.examParams.schoolID,
                      sheetID: that.standardSheetID,
                    }
                  })
                }
              })
            }
          }, 500)
          this.timer = timer
        }
      },
      handleReturn(){
        clearInterval(this.timer)
        this.display = 'none'
        this.loading2 = false
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
