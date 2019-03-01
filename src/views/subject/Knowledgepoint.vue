<template>
  <div class="back">
    <el-button type="primary" @click.native="isAddSubject =true" icon="el-icon-plus" style="float: right">添加课程
    </el-button>
    <el-table :data="tableData" :border=true stripe style="width: 98%; margin: auto">
      <el-table-column align="left" min-width="50%" prop="name" label="学科名"></el-table-column>
      <el-table-column align="left" prop="action" min-width="50%" label="动作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain>
            <router-link :to="'/subject/knowledgeOfSubject/'+scope.row.id" class="link-type">
              <span>知识点管理</span>
            </router-link>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {getList} from '@/api/subject/subject'
  export default {
    components: {
    },
    data(){
      return {
        tableData: [],
        listQuery:{
            id:''
        }
      }
    },
    created(){
      this.handleSubject();
    },
    methods: {
      handleSubject(){
        getList().then(res => {
          this.tableData = res.data;
        })
      }
    },

  }
</script>
<style>
  .back {
    padding: 0px;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }

  body .el-table th.gutter {
    display: table-cell !important;
  }

</style>


