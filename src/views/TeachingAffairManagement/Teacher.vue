<template>
  <div style="width: 69%; margin: 0 auto">
    <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
      <el-table-column align="left" min-width="25%" prop="name" label="学校全名"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="abbrName" label="学校简称"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="districtName" label="地区"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="agentName" label="代理商"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="action" label="动作">
        <template slot-scope="scope">
          <!--          <el-button
                      size="mini"
                      type="primary" plain
                      @click="handleSearch(scope.$index, scope.row)">班级管理-->
          <!--
                    </el-button>
          -->
          <el-button size="mini" type="primary" plain>
            <router-link :to="'/teachingAffair/teacherOfSchool/'+scope.row.id" class="link-type">
              <span>教师管理</span>
            </router-link>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import {getList} from '@/api/TeachingAffair/teacher'
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
          this.tableData = response.data;
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  a {
    text-decoraction: none;
  }
</style>
