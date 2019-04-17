<template>
  <div class="top">
    <el-menu
      router
      :default-active='$route.path'
      class="navbar"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">教务管理</template>
        <el-menu-item v-if="permission" index="/teachingAffair/agent">代理商管理</el-menu-item>
        <el-menu-item v-if="permission" index="/teachingAffair/district">地区管理</el-menu-item>
        <el-menu-item v-if="permission" index="/teachingAffair/school">学校管理</el-menu-item>
        <el-menu-item v-if="permission" index="/teachingAffair/class">班级管理</el-menu-item>
        <el-menu-item v-if="permission" index="/teachingAffair/teacher/">教师管理</el-menu-item>
        <el-menu-item index="/teachingAffair/student/">学生管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">学科管理</template>
        <el-menu-item v-if="permission" index="/subject/subject">学科管理</el-menu-item>
        <el-menu-item index="/subject/knowledgePoint">知识点管理</el-menu-item>
        <!--<el-menu-item index="2-3">知识点管理</el-menu-item>-->
      </el-submenu>
      <el-menu-item index="/template/show" v-if="permission">模板管理</el-menu-item>
      <el-submenu index="3">
        <template slot="title">考试管理</template>
        <el-menu-item index="/exam">新建单科考试</el-menu-item>
        <el-menu-item index="/exam/examGroup">新建综合考试</el-menu-item>
        <el-menu-item index="/exam/list">考试列表</el-menu-item>
          <el-menu-item index="/exam/breakdown">考试细目表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/scan/scan">试卷扫描</el-menu-item>
      <el-menu-item index="/proof/examForProof">试卷校对</el-menu-item>
      <el-menu-item index="/scoreAnalysis/tests/choose">成绩报表</el-menu-item>
      <el-menu-item index="/makeTemplate" v-if="permission">制作模板</el-menu-item>
      <!-- <el-menu-item index="6">统计信息</el-menu-item>
       <el-menu-item index="7">个人信息管理</el-menu-item>-->
      <div class="right-menu">
        <el-menu-item index="/home/personally" class="right-menu-item">个人中心</el-menu-item>
        <error-log class="errLog-container right-menu-item"/>
        <el-tooltip content="全屏" effect="dark" placement="bottom">
          <screenfull class="right-menu-item"/>
        </el-tooltip>
        <el-button class="right-menu-item" @click="logout">退出登录</el-button>
      </div>
    </el-menu>
  </div>
</template>

<script>
  import {logout} from '@/api/login'
  import ErrorLog from '@/components/ErrorLog'
  import Screenfull from '@/components/Screenfull'
  import ElMenuItemGroup from "../../../../node_modules/element-ui/packages/menu/src/menu-item-group";
  import ElSubmenu from "../../../../node_modules/element-ui/packages/menu/src/submenu";
  export default {
    components: {
      ElSubmenu,
      ElMenuItemGroup,
      ErrorLog,
      Screenfull,
    },
    data(){
      return {
        permission: true,
        activeIndex: ''
      }
    },
    methods: {
      logout(){
        this.$router.push('/');
        sessionStorage.removeItem("userToken")
        /*    logout().then(res => {
            })*/
      },
    },
    created(){
      let key = sessionStorage.getItem("role");
      if (key !== 'admin') {
        this.permission = false
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    position: fixed;
    height: 60px;
    line-height: 60px;
    width: 100%;
    border-radius: 0px !important;
    z-index: 1000;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
  }

  .right-menu-item {
    vertical-align: middle;
    display: inline-block;
    margin: 0 8px;
  }

</style>
