<template>
  <div style="width: 69%; margin: 0 auto">
    <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
      <el-table-column align="left" min-width="25%" prop="name" label="学校全名"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="abbrName" label="学校简称"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="districtName" label="地区"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="agentName" label="代理商"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="action" label="动作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary"  @click.native="checkStudent(scope.$index,scope.row)">
          <!--  <router-link :to="'/teachingAffair/studentOfSchool/'+scope.row.id" class="link-type">
              <span>学生管理</span>
            </router-link>-->
            学生管理
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import {getList} from '@/api/TeachingAffair/student'
  import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
      ElButton,
      ElOption,
      ElFormItem,
      ElSelectDropdown
    },
    data(){
      return {
        tableData: [],
      }
    },
    created(){
      this.initTable();
    },
    methods: {
      initTable(){
        getList().then(response => {
          if (response.data.length==1){
            this.$router.push('/teachingAffair/studentOfSchool/'+response.data[0].id)
          }
          this.tableData = response.data;
        })
      },
      checkStudent(index,row){
          this.$router.push('/teachingAffair/studentOfSchool/'+row.id)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  a {
    text-decoraction: none;
  }
</style>
