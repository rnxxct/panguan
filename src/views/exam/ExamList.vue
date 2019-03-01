<template>
  <div style="width: 69%; margin: 0 auto">
      <div>
      <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
        <el-table-column align="left" prop="name" label="考试名称"></el-table-column>
        <el-table-column align="left" prop="subjectName" label="学科"></el-table-column>
        <el-table-column align="left" prop="createUserName" label="创建人"></el-table-column>
        <el-table-column align="left" prop="createTime" label="创建时间" :formatter="dateFormat"></el-table-column>
        <el-table-column align="left" label="动作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click.native="handleEdit(scope.$index,scope.row)"
                       >编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
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
  import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
  import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component";
  export default {
    components: {
      ElDialog,
      ElRadio
    },
    data(){
      return {
        tableData: [],
        total: 0,
        radio: 1,
        screenHeight: 0,
        listQuery: {
          pageNum: 1,
          pageSize: 10,
          isAll: false,
        },
        examParams:{
          id:0,
          name:'',
          gradeID:0,
          subjectID:0,
          schoolID:0
        }
      }
    },
    created(){
      this.screenHeight = document.body.clientWidth
      this.initTable();
    },
    methods: {
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
      dateFormat(row, column, cellValue, index){
        const daterc = row[column.property]
        return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
      },
      handleEdit(index,row){
        this.$router.push({path:"/exam/edit",query:{subjectID:row.subjectID,testID:row.id,gradeID:row.gradeID,schoolID:row.schoolID,templateID:row.templateID}})
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.initTable()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val
        this.initTable()
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
