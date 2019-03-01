<template>
  <div>
    <el-button @click="handleReturn">返回</el-button>
    <el-button type="primary" v-print="'#print'">打印</el-button>
    <el-form :inline="true" style="margin-top: 20px">
      <el-form-item label="文科指标人数">
        <el-input v-model="artNumber"></el-input>
      </el-form-item>
      <el-form-item label="理科指标人数">
        <el-input v-model="scienceNumber"></el-input>
      </el-form-item>
      <el-button type="primary" @click="handleClick">确定</el-button>
    </el-form>
    <div class="content" style="margin:0 auto;margin:0;padding:0;text-align: center;" id="print">
      <h3 style="font-size: 20px"> 高二月考总体指标贡献率、命中率分析</h3>
      <!--理科-->
      <div style="width: 210mm; margin: 0 auto;">
        <div class="td" style="border-top: 2px solid black;border-left: 2px solid black;border-bottom: 2px solid black">
          <div class="item">类别</div>
          <div class="item" style="width: 45mm">单科上线分数</div>
          <div class="item">指标人数</div>
          <div class="item">指标学科上线人数</div>
          <div class="item">学科上线总人数</div>
          <div class="item">指标贡献率</div>
          <div class="item">指标命中率</div>
        </div><div class="td" v-for="(item,index) in scienceArray" style="border-top: 2px solid black;border-bottom: 2px solid black">
        <div v-if="index == scienceArray.length-1">
          <div class="item" style="border-right: 2px solid black;width: 25mm">{{item.subjectName}}</div>
          <div class="item" style="border-right: 2px solid black">{{item.uplineScore}}分</div>
          <div class="item" style="border-right: 2px solid black">{{item.quotaNumber}}人</div>
          <div class="item" style="border-right: 2px solid black">{{item.quotaNumber2}}人</div>
          <div class="item" style="border-right: 2px solid black">{{item.uplineTotal}}人</div>
          <div class="item" style="border-right: 2px solid black">{{item.quotaDevote}}%</div>
          <div class="item" style="border-right: 2px solid black">{{item.quotaHitRate}}%</div>
        </div><div v-else>
        <div class="item" style="width: 25mm">{{item.subjectName}}</div>
        <div class="item">{{item.uplineScore}}分</div>
        <div class="item">{{item.quotaNumber}}人</div>
        <div class="item">{{item.quotaNumber2}}人</div>
        <div class="item">{{item.uplineTotal}}人</div>
        <div class="item">{{item.quotaDevote}}%</div>
        <div class="item">{{item.quotaHitRate}}%</div>
      </div>
      </div>
<!--
        <div class="td" style="width: 10mm;height: 60mm;text-align: center;position: relative;font-size: 20px">
          <div style="position:relative;top: 30mm; height: 10mm;width: 10mm;vertical-align: bottom;text-align: center">理科</div>
        </div>
-->
      </div>
      <!--文科-->
      <div style="width: 210mm; margin: 0 auto;">
        <div class="td" style="border-top: 2px solid black;border-left: 2px solid black;border-bottom: 2px solid black">
          <div class="item">类别</div>
          <div class="item" style="width: 45mm">单科上线分数</div><div class="item">指标人数</div>
          <div class="item">指标学科上线人数</div>
          <div class="item">学科上线总人数</div>
          <div class="item">指标贡献率</div>
          <div class="item">指标命中率</div>
        </div><div class="td" v-for="(item,index) in artArray" style="border-top: 2px solid black;border-bottom: 2px solid black">
        <div v-if="index == artArray.length-1">
          <div class="item" style="border-right: 2px solid black;width: 25mm">{{item.subjectName}}</div>
          <div class="item" style="border-right: 2px solid black;">{{item.uplineScore}}分</div>
          <div class="item" style="border-right: 2px solid black;">{{item.quotaNumber}}人</div>
          <div class="item" style="border-right: 2px solid black">{{item.quotaNumber2}}人</div>
          <div class="item" style="border-right: 2px solid black">{{item.uplineTotal}}人</div>
          <div class="item" style="border-right: 2px solid black">{{item.quotaDevote}}%</div>
          <div class="item" style="border-right: 2px solid black">{{item.quotaHitRate}}%</div>
        </div>
        <div v-else>
          <div class="item" style="width: 25mm">{{item.subjectName}}</div>
          <div class="item">{{item.uplineScore}}分</div>
          <div class="item">{{item.quotaNumber}}人</div>
          <div class="item">{{item.quotaNumber2}}人</div>
          <div class="item">{{item.uplineTotal}}人</div>
          <div class="item">{{item.quotaDevote}}%</div>
          <div class="item">{{item.quotaHitRate}}%</div>
        </div>
      </div>
<!--
        <div class="td" style="width: 10mm;height: 60mm;text-align: center;position: relative;font-size: 20px">
          <div style="position:relative;top: 30mm; height: 10mm;width: 10mm;vertical-align: bottom;text-align: center">文科</div>
        </div>
-->
      </div>
      <h3 style="font-size: 20px">指标贡献率=指标学科上线人数/指标数*100%</h3>
      <h3 style="font-size: 20px">指标命中率=指标学科上线人数/学科总上线人数*100%</h3>
      <br/>
      <br/>
    </div>
  </div>
</template>
<script>
  import {getList} from '@/api/TeachingAffair/classOfSchool.js'
  import {getGradeList, getQuotaList} from '@/api/exam/examGroup.js'
  import {getList as getClasses} from '@/api/TeachingAffair/studentOfSchool.js'
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {
      ElButton,
      ElInput,
      ElFormItem,
      ElForm
    },
    created(){
      this.multiTestID = this.$route.query.multiTestID
    },
    data(){
      return {
        scienceNumber: 72,
        artNumber: 72,
        multiTestID: '',
        data: [],
        artArray: [],
        scienceArray: []
      }
    },
    methods: {
      initData(){

      },
      handleClick(){
        if (this.scienceNumber == '' && this.scienceNumber == 0 && this.artNumber == '' && this.artNumber == 0) {
          this.$message({
            type: 'warning',
            message: '指标人数不能为空或0!',
            duration: 600
          })
        }
        getQuotaList({
          multiTestID: this.multiTestID,
          artQuotaNumber: this.artNumber,
          scienceQuotaNumber: this.scienceNumber
        }).then(response => {
          let artArray = response.data.art
          let scienceArray = response.data.science
          let scienceSubject = ['语文', '数学', '英语', '物理', '化学', '生物']
          let artSubject = ['语文', '数学', '英语', '历史', '地理', '政治']

          let tempartArray = new Array()
          let tempscienceArray = new Array()

          for (let i = 0; i < artSubject.length; i++) {
            for (let j = 0; j < artArray.length; j++) {
              if (artSubject[i] == artArray[j].subjectName) {
                if (artArray[j].subjectName=='语文' || artArray[j].subjectName=='数学' || artArray[j].subjectName=='英语'){
                    artArray[j].subjectName+='文'
                }
                tempartArray.push(artArray[j])
              }
            }
          }
          for (let x = 0; x < scienceSubject.length; x++) {
            for (let s = 0; s < scienceArray.length; s++) {
              if (scienceSubject[x] == scienceArray[s].subjectName) {
                if (scienceArray[s].subjectName=='语文' || scienceArray[s].subjectName=='数学' || scienceArray[s].subjectName=='英语'){
                  scienceArray[s].subjectName+='理'
                }
                tempscienceArray.push(scienceArray[s])
              }
            }
          }
          this.artArray = tempartArray
          this.scienceArray = tempscienceArray
        })
      },
      handleReturn(){
/*
        this.$router.go(-1)
*/
        this.$router.push({path:'/scoreAnalysis/tests/choose',query:{isGroup:1}})
      }
    }
  }
</script>
<style scoped>
  .content {
  }

  .td {
    display: inline-table;
  }

  .item {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    height: 10mm;
  }
</style>
