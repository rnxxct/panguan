<template>
  <div style="width: 69%; margin: 0 auto;height: 100%;">
    <el-button type="primary" @click.native="handleAdd" icon="el-icon-plus" style="float: right">新建模板
    </el-button>
    <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
      <!--      <el-table-column align="center">
              <template slot-scope="scope">
                &lt;!&ndash; class="textRadio" &ndash;&gt;
                <el-radio @change.native="getCurrentRow(scope.$index,scope.row)" :label="scope.$index" v-model="radio"
                          class="textRadio">&nbsp;
                </el-radio>
              </template>
            </el-table-column>-->
      <el-table-column align="left" prop="name" label="模板名称"></el-table-column>
      <el-table-column align="left" prop="subjectName" label="学科"></el-table-column>
      <el-table-column align="left" prop="createUserName" label="创建人"></el-table-column>
      <el-table-column align="left" prop="createTime" label="创建时间" :formatter="dateFormat"></el-table-column>
      <el-table-column align="left" label="动作">
        <template slot-scope="scope">
          <el-button size="mini" type="info" @click.native="handleEdit(scope.$index,scope.row)"
                     style="float: left;">
            编辑
          </el-button>
          <el-button size="mini" type="danger" @click.native="handleDelete(scope.$index,scope.row)">删除
          </el-button>
          <el-button size="mini" type="primary" @click.native="handleCheck(scope.$index,scope.row)">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        :current-page="listQuery.page"
        :page-sizes="[5,10,20,30, 50]"
        :page-size="listQuery.pageSize"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
    <el-dialog title="模板删除" :visible.sync="isDelete" width="30%">
      <span>确定删除</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDelete=false">取 消</el-button>
        <el-button type="primary" @click="toDelete">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog width="55%" :visible.sync="isShow">
      <template>
        <div style="display: inline-block; width: 49%;">
          <el-carousel :autoplay="false" indicator-position="none" height="600px" :loop=false id="el-carousel">
            <el-carousel-item style="display: inline-block" v-for="(item,item_index) in imageList1" :key="item_index">
              <img :src="item" height="100%">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div style="display: inline-block; width: 49%;">
          <el-carousel :autoplay="false" height="600px" indicator-position="none" :loop=false>
            <el-carousel-item v-for="(item,item_index) in imageList2" :key="item_index">
              <img :src="item" height="100%">
            </el-carousel-item>
          </el-carousel>
        </div>
        <el-button @click="isShow=false">取 消</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script>
  import {getTemplateList, deleteTemplate, getTemplateUrls} from '@/api/template/template.js'
  import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
  export default {
    components: {
      ElRadio
    },
    data(){
      return {
        picSize: 2,//模板中试卷的页数
        isShow: false,
        screenWidth: 1920,
        bannerHeight: 700,
        imageList: [],
        imageList1: [],
        imageList2: [],
        tableData: [],
        isDelete: false,
        total: 0,
        radio: 1,
        listQuery: {
          pageNum: 1,
          pageSize: 10,
        },
        deleteForm: {
          templateID: 0
        }
      }
    },
    created(){
      this.initTable();
    },
    mounted(){
      const that = this
      this.setSize1()
/*
      window.addEventListener('resize',function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        that.screenWidth = width;
        that.setSize();
      },false)
*/
    },
    methods: {
      initTable(){
        getTemplateList(this.listQuery).then(response => {
          this.tableData = response.data.templates;
          this.total = response.data.total
        })
      },
      handleAdd(){
        this.$router.push({path: '/template/add'})
      },
      handleEdit(index, row){
        this.$router.push('/template/update/' + row.id)
      },
      handleDelete(index, row){
        this.isDelete = true
        this.deleteForm.templateID = row.id
      },
      toDelete(){
        deleteTemplate(this.deleteForm).then(response => {
          this.$message({
            message: '删除成功',
            type: "success",
            duration: 600
          });
          this.isDelete = false
          this.initTable();
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
        console.log(row, "row")
        this.getIndex = row.index
      },
      handleCheck(index, row){
        getTemplateUrls({id: row.id}).then(response => {
          this.imageList = response.data.imgURL
          if (this.imageList.length == 1) {
            this.picSize = 1
            this.imageList1 = []
            this.imageList2 = []
            this.imageList1.push(this.imageList[0])
          } else if (this.imageList.length == 2) {
            this.picSize = 2
            this.imageList1 = []
            this.imageList2 = []
            this.imageList1.push(this.imageList[0])
            this.imageList2.push(this.imageList[1])
          } else if (this.imageList.length == 4) {
            this.picSize = 4
            this.imageList1 = []
            this.imageList2 = []
            for (let i = 0; i < this.imageList.length; i += 2) {
              this.imageList1.push(this.imageList[i])
            }
            for (let j = 1; j < this.imageList.length; j += 2) {
              this.imageList2.push(this.imageList[j])
            }
          }
          this.isShow = true
        })
      },
      dateFormat(row, column, cellValue, index){
        const daterc = row[column.property]
        return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
      },
      setSize1(){
      /*  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.screenWidth = width;
        this.bannerHeight = 700 / 1920 * this.screenWidth - 50*/
        document.getElementById('el-carousel').style.height = 600 + 'px';

      },
      setSize(){
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.screenWidth = width
        this.bannerHeight = 700 / 1920 * this.screenWidth - 50
        document.getElementById("el-carousel").style.height = 600 + 'px'
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
  .el-carousel__container {
    height: 100% !important;
  }

  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }

</style>
