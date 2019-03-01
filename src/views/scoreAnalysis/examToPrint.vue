<template>
  <div>
    <el-button @click="handleReturn">返回</el-button>
    <el-button type="primary" v-print="'#print'">打印</el-button>
    <div class="content" style="margin:0 auto;text-align: center" id="print">
      <h3>{{classNumber}} 每题得分情况</h3>
      <div class="table" style="width: 210mm;margin: 0 auto;border-bottom: 1px solid black;">
        <div v-for="item in data" class="tr" style="text-align: left;border-left: 1px solid black;">
          <div class="td label" style="text-align: left; float:left; width: 20mm;border-top: 1px solid black;">{{item.label}}</div>
          <div class="td options" style="border-left: 1px solid black">
            <div v-for="option in item.answers" style="border-top: 1px solid black;border-right: 1px solid black;padding: 1mm;">
              <div class="td" style="width: 15mm">{{option.answerName}}</div>
              <div class="td" style="width: 30mm">{{option.numberAndPresent}}</div>
              <div class="td" style="width: 130mm;text-align: left;">{{option.studentJoin}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {exportEXCEL} from  '@/api/scoreAnalysis/statistics'
  export default{
    created(){
      this.testID = this.$route.query.testID
      this.classID = this.$route.query.classID
      this.classNumber = this.$route.query.classNumber
      this.initData()
    },
    data(){
      return {
        testID: '',
        classID: '',
        classNumber: '',
        data: [],
        students: []
      }
    },
    methods: {
      initData(){
        exportEXCEL({testID: this.testID, classID: this.classID}).then(response => {
          this.data = response.data
          for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].answers.length; j++) {
              let studentJoin = "";
              for (let s=0;s<this.data[i].answers[j].students.length;s++){
                studentJoin+=this.data[i].answers[j].students[s].name+","
              }
              studentJoin = studentJoin.substr(0,studentJoin.length-1)
              this.data[i].answers[j].studentJoin= studentJoin
              studentJoin="";
            }
          }
        })
/*
        for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < this.data[i].answers.length; j++) {
            let studentJoin = "";
            for (let s=0;s<this.data[i].answers[j].students;s++){
              studentJoin+=this.data[i].answers[j].students[s]+","
            }
            studentJoin.substr(0,studentJoin.length-1)
            this.data[i].answers[j].studentJoin= studentJoin
          }
        }
*/
      },
      handleReturn(){
          this.$router.go(-1)
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
</style>
