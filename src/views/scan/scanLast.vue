<template>
  <div style="width: 69%; margin: 0 auto">
    <div style="position: relative;height: 80px">
      <el-button size="mini" type="primary" :disabled="disabled" @click="handleScan">
        <span v-if="time==0">开始扫描</span>
        <span v-if="time>=1">继续扫描</span>
        <iframe src="/panguan/static/scan/DWT_Scan_Upload_Demo.html" ref="iframe" width="100" height="50" frameborder="3"
                scrolling="auto" style="border: 2px;display: none"></iframe>
      </el-button>
      <el-button size="mini" type="danger" @click="handleEnd">结束扫描</el-button>
      <div class="cell">
        <div class="card">
          <span style="line-height: 12px;" v-text='scanState'></span>
          <span id="timer-loader" style="display: none;margin-top:10px;" class="timer-loader">Loading&#8230;</span>
        </div>
      </div>
    </div>
    <div style="height: 30px;"></div>
    <div  style="margin: 0 auto;width: 70%;" v-if="list!==null" >
      <div  v-for="(item,index) in list.students" style="border-radius: 8px;border: 2px solid rgb(96,96,96); margin-bottom: 50px;background: #eef0f4">
        <h3 style="">{{item.classNumber}}班 未阅学生名单 ({{item.students.length}})</h3>
<!--
        <h4 style="text-align: left;margin-left: 20px;margin-bottom: 20px;">未阅学生名单 ({{item.students.length}})</h4>
-->
        <div>
          <span style="padding: 5px 5px 10px 5px;display:inline-block;"  v-for="student in item.students">{{student}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import QS from 'qs'
  import {getList} from '@/api/scan/scanNew'
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {
      ElButton,
      ElOption,
      ElSelectDropdown,
      ElCheckbox
    },
    created(){
      this.listQuery.testID = this.$route.query.testID
      this.examName = this.$route.query.name
      var that = this
      this.timer = setInterval(function () {
        that.initList()
      }, 2000);
    },
    beforeRouteLeave(to,from,next){
      clearInterval(this.timer)
      next()
    },
    data(){
      return {
        isShow:false,
        time:0,
        timer:{},
        scanState:'',
        examName:'',
        disabled:false,
        list:{},
        listQuery: {
          testID: 0,
        },
      }
    },
    methods: {
      initList(){
        getList(this.listQuery).then(response => {
          this.list = response.data
          var isScanDone = sessionStorage.getItem("isScanDone")
          if (isScanDone==1){
            if  (response.data.state == 1){
              this.scanState="阅卷完毕"
              document.getElementById("timer-loader").style.display='none'
              sessionStorage.removeItem("isScanDone")
            }else {
              this.scanState="阅卷中"
              document.getElementById("timer-loader").style.display='inline-block'
            }
          }else {
            if (this.$refs.iframe.contentWindow.bSelected){
              this.scanState ="扫描中(请等待)"
              document.getElementById("timer-loader").style.display='inline-block'
            }
            if  (response.data!==null){
                if (response.data.state == 1){
                  this.scanState="阅卷完毕"
                  document.getElementById("timer-loader").style.display='none'
                  sessionStorage.removeItem("isScanDone")
                }
            }
          }
        })
      },
      //继续扫描的按钮
      handleScan(){
        sessionStorage.removeItem("isScanDone")
        this.time++;
        this.$refs.iframe.contentWindow.AcquireImage();
      },
      //结束扫描的按钮
      handleEnd(){
        clearInterval(this.timer)
        this.$router.push('/scoreAnalysis/tests/'+this.listQuery.testID)
        this.$router.push({path:'/scoreAnalysis/test/',query:{testID:this.listQuery.testID,name:this.examName}})
      },
    }
  }
</script>
<style scoped="true">
  @import "../../style/css/spinners.css";
  .cell {
    position: absolute;
    right: 20%;
    top: 0px;
    width: 120px;
    box-sizing: border-box;
    display: table;
  }
  .card {
    font-weight: 700;
    background: white;
    border-radius: 15px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    height: 40px;
  }
</style>
