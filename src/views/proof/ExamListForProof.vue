<template>
  <div style="width: 69%; margin: 0 auto">
    <el-button type="primary" @click.native="handleMore" icon="el-icon-plus" style="float: right">查看更多
    </el-button>
    <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto" highlight-current-row>
      <el-table-column align="center" min-width="25%" prop="name" label="考试名称"></el-table-column>
      <el-table-column align="center" min-width="50%" prop="createUserName" label="创建人"></el-table-column>
      <el-table-column align="center" min-width="50%" prop="createTime" :formatter="dateFormat"  label="创建时间"></el-table-column>
      <el-table-column align="center" min-width="50%" prop="scanTime"   :formatter="dateFormat" label="扫描时间"></el-table-column>
      <el-table-column align="center" min-width="30%">
        <template slot-scope="scope">
          <el-button  size="mini" type="primary" @click.native="handleProof(scope.$index,scope.row)" >校对
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
  import {getType} from '@/api/proof/proof'
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
      handleProof(index,row){
        getType({testID:row.id}).then(response=>{
            if (response.data==2 ||response.data==3){
              this.$router.push({path:"/proof/proofSheet/"+row.id})//在这里判断进行页面的跳转
            }else if (response.data == 1){
              this.$router.push({path:"/proof/proof/"+row.id})//在这里判断进行页面的跳转
            }else {
                this.$message({
                  type:'warning',
                  message:'本次考试无需校对',
                  duration: 2000
                })
            }
        })
      },
      dateFormat(row, column, cellValue, index){
        const daterc = row[column.property]
        return daterc.substr(0,10) +' '+ daterc.substr(11,8)
      }
    }
  }
</script>
