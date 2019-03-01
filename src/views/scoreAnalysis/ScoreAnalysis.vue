<template>
  <div style="width: 69%; margin: 0 auto">
    <el-button type="primary" @click.native="handleMore" icon="el-icon-plus" style="float: right">查看更多
    </el-button>
    <el-table :data="tableData":border=true stripe style="width:100%; margin: auto" highlight-current-row>
      <el-table-column align="left" min-width="25%" prop="name" label="考试名称"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="createUserName" label="创建人"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="createTime" :formatter="dateFormat"  label="创建时间"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="scanTime"   :formatter="dateFormat" label="扫描时间"></el-table-column>
      <el-table-column align="left" min-width="100%">
        <template slot-scope="scope">
          <el-button  size="mini" type="primary" @click.native="handleCheck(scope.$index,scope.row)"  style="float: left;">成绩单
          </el-button>
          <el-button size="mini" type="success" @click.native="handleStatistics(scope.$index,scope.row)" style="float: left;">单题统计
          </el-button>
          <el-button  size="mini" type="danger" @click.native="handleComparison(scope.$index,scope.row)" style="float: left">班级对比
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        :current-page="listQuery.pageNum"
        :page-sizes="[10,20,30, 50]"
        :page-size="listQuery.pageSize"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>
<script>
  import {getList} from '@/api/scoreAnalysis/testList'
  import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  export default {
    components: {
      ElOption,
      ElFormItem,
      ElSelectDropdown
    },
    data(){
      return {
        total: 0,
        listQuery: {
          isAll: false,
          pageNum: 1,
          pageSize: 10,
        },
        tableData: []
      }
    },
    created(){
      this.initTable();
    },
    methods: {
      initTable(){
        getList(this.listQuery).then(response => {
          this.tableData = response.data.list;
          this.total = response.data.total;
        })
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.initTable()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val
        this.initTable()
      },
      handleMore(){
        this.listQuery.isAll = true
        this.initTable()
      },
      handleCheck(index,row){
        this.$router.push({path:"/scoreAnalysis/test/",query:{testID:row.id,name:row.name}})
      },
      handleStatistics(index,row){
        this.$router.push({path:"/scoreAnalysis/statistics/",query:{testID:row.id,name:row.name}})
      },
      handleComparison(index,row){
        this.$router.push({path:"/scoreAnalysis/classesComparison/"+row.id})
      },
      dateFormat(row, column, cellValue, index){
        const daterc = row[column.property]
        return daterc.substr(0,10) +' '+ daterc.substr(11,8)
      }
    }
  }
</script>
