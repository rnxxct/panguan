<template>
  <div class="back">n
    <div class="top">
      <el-menu
        :default-active="activeIndex"
        class="navbar"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">试卷列表</el-menu-item>
        <el-menu-item index="2">试卷编辑</el-menu-item>
        <el-menu-item index="3">试卷扫描</el-menu-item>
        <el-menu-item index="4">试卷校对</el-menu-item>
        <el-menu-item index="5">成绩查看</el-menu-item>
        <el-menu-item index="6" @click="handleSubject">课程查看</el-menu-item>
        <div class="right-menu">
          <error-log class="errLog-container right-menu-item"/>
          <el-tooltip content="全屏" effect="dark" placement="bottom">
            <screenfull class="right-menu-item"/>
          </el-tooltip>
          <el-button class="right-menu-item" @click="logout">退出登录</el-button>
        </div>
      </el-menu>

    </div>
    <div class="line"></div>
    <el-table :data="tableData" border="true" stripe style="width: 98%; margin: auto">
      <el-table-column align="left" min-width="25%" prop="subject" label="学科"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="examName" label="试卷名称"></el-table-column>
      <el-table-column prop="author" min-width="25%" label="出卷人"></el-table-column>
      <el-table-column prop="date" min-width="40%" label="出卷时间"></el-table-column>
      <el-table-column prop="state" min-width="20%" label="状态">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="info" plain
            @click="handleEdit(scope.$index, scope.row)">待编辑
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="action" min-width="50%" label="动作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">
            <i class="el-icon-edit"></i>编辑
          </el-button>
          <el-button
            size="mini"
            type="success"
            @click="handleDelete(scope.$index, scope.row)">
            <i class="el-icon-printer"></i>扫描
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  import screenfull from '../components/Screenfull'
  export default {
    components: {
      screenfull
    },
    data(){
      return {
        activeIndex: '1',
        tableData: [],
      }
    },
    created(){
      this.$http.get("/auth/isLogin").then(res => {
        let body = res.data;
        if (body.code != 200) {
          this.$message({
            message: '未登录',
            type: "error",
            duration: 600
          });
          this.$router.push('/');
        } else {
          this.handleSearch();
        }
      })
    },
    methods: {
      handleSearch(){
        this.$http.get("/Exam").then(res => {
          let body = res.data;
          if (body.code == "200") {
            this.tableData = body.data;
          }
        })
      },
      logout(){
        this.$http.get("/auth/logout").then(res=>{
            let body=res.data;
            if (body.code=="400"){
              this.$router.push('/');
            }
        })
      },
      handleSubject(){
        alert("test");
        this.$http.get("/").then(res=>{
          let  body =res.data;
          if (body.code=="200"){
            this.$router.push('/Subject');
          }
        })
      }
    }
  }
</script>
<style>
  .back {
    position: absolute;
    padding: 0px;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }

  body .el-table th.gutter {
    display: table-cell !important;
  }

  .navbar {
    height: 60px;
    line-height: 60px;
    border-radius: 0px !important;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
  }

  .right-menu-item {
    vertical-align: middle;
    display: inline-block;
    margin: 0 8px;
  }
  .line{
    height: 30px;
  }

</style>


