<template>
  <div style="width: 69%;margin: 0 auto;">
    <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
      <el-table-column align="left" min-width="25%" prop="name" label="班级名称"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="classNumber" label="班号"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="gradeName" label="年级"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="action" label="动作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click.native="checkStudent(scope.$index,scope.row)">
          <!--  <router-link  :to="{path:'/teachingAffair/studentOfClass/'+scope.row.id,params:{classID:scope.row.id,schoolID:listQuery.schoolID}}" class="link-type">
              <span>学生管理</span>
            </router-link>-->
            学生管理
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
  import {getList} from '@/api/TeachingAffair/studentOfSchool'
  import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  export default {
    components: {
      ElOption,
      ElFormItem,
      ElSelectDropdown},
    data(){
      return {
        total:0,
        listQuery:{
          pageNum:1,
          schoolID:'',
          pageSize:10,
        },
        tableData:[]
      }
    },
    created(){
      this.listQuery.schoolID=this.$route.params.schoolID
      this.initTable();
    },
    methods: {
      initTable(){
        getList(this.listQuery).then(response =>{
           if (response.data.length==1){
               this.$router.push('/teachingAffair/studentOfClass/'+response.data[0].id)
           }
          this.tableData=response.data.classes;
          this.total=response.data.classes[0].total;
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
      checkStudent(index,row){
        this.$router.push('/teachingAffair/studentOfClass/'+row.id);
      }
    }
  }
</script>
