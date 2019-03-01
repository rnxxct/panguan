<template>
  <div>
    <el-button @click="handleReturn">返回</el-button>
    <el-button type="primary" v-print="'#print'">打印</el-button>
    <div class="content" style="margin:0 auto;text-align: center;margin:0;padding:0;" id="print">
      <div class="table" style="margin: 0 auto;border: 1px solid black;width: 73mm">
        <div style="display: inline-block;width: 30mm;border-right: 1px solid black;border-top: 1px solid black">
          <div v-for="item in science">{{item.classNumber}}</div>
        </div>
        <div style="display: inline-block;width: 20mm;">
          <div>班级总分</div>
          <div style="border-right: 1px solid black;border-top: 1px solid black">
            <div v-for="(item,index) in scienceAver">{{scienceAver[index]}}</div>
          </div>
        </div>
        <div style="display: inline-block;width: 20mm;">
          <div>各班排名</div>
          <div style="border-top: 1px solid black">
            <div v-for="item in sortArray">{{item}}</div>
          </div>
        </div>
      </div>
      <br/>
      <div class="table" style="margin: 0 auto;border: 1px solid black;width: 73mm">
        <div style="display: inline-block;width: 30mm;border-right: 1px solid black;border-top: 1px solid black">
          <div v-for="item in art">{{item.classNumber}}</div>
        </div>
        <div style="display: inline-block;width: 20mm;">
          <div>班级总分</div>
          <div style="border-right: 1px solid black;border-top: 1px solid black">
            <div v-for="(item,index) in artAver" >{{artAver[index]}}</div>
          </div>
        </div>
        <div style="display: inline-block;width: 20mm;">
          <div>各班排名</div>
          <div style="border-top: 1px solid black">
            <div v-for="(item,index) in sortArray2">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getGradeAnalysisList} from '@/api/exam/examGroup.js'
  export default{
    created(){
      this.multiTestID = this.$route.query.multiTestID
      this.initData()
    },
    data(){
      return {
        multiTestID: '',
        science: [],
        art: [],
        scienceAver: [],
        artAver: [],
        sortArray:[],
        sortArray2:[]
      }
    },
    methods: {
      initData(){
        getGradeAnalysisList({multiTestID: this.multiTestID}).then(response => {
          this.science = response.data.science
          this.art = response.data.art
          let scienceDetail = response.data.scienceDetail
          let artDetail = response.data.artDetail
          let array = new Array()
          for (let j = 0; j < scienceDetail[0].classComparisonDetails.length; j++) {
            let total = 0;
            for (let i = 0; i < scienceDetail.length; i++) {
              total = total + scienceDetail[i].classComparisonDetails[j].average
            }
            array.push(total.toFixed(2))
          }
          this.scienceAver = array
          let array2 = new Array()
          for (let x = 0; x < artDetail[0].classComparisonDetails.length; x++) {
            let total = 0;
            for (let s = 0; s < artDetail.length; s++) {
              total = total + artDetail[s].classComparisonDetails[x].average
            }
            array2.push(total.toFixed(2))
          }
          this.artAver = array2
          this.sort()
        })
      },
      handleReturn(){
        this.$router.push({path: '/scoreAnalysis/tests/choose', query: {isGroup: 1}})
      },
      sort(){
        let scienceAver =this.scienceAver.slice(0,this.scienceAver.length)
        for (let i = 0; i < scienceAver.length-1; i++) {
            for (let j=0;j<scienceAver.length-i-1;j++){
                if (scienceAver[j]>scienceAver[j+1]){
                  var swap = scienceAver[j]
                  scienceAver[j] = scienceAver[j+1]
                  scienceAver[j+1] = swap
                }
            }
        }
        scienceAver.reverse()
        let sortArray = new Array()
        for (let x=0;x<this.scienceAver.length;x++){
            for (let s=0;s<scienceAver.length;s++){
                if (this.scienceAver[x]==scienceAver[s]){
                    sortArray.push(s+1)
                    break
                }
            }
        }
        this.sortArray= sortArray

        let sortArray2 = new Array()
        let artAver =this.artAver.slice(0,this.artAver.length)
        for (let i = 0; i < artAver.length-1; i++) {
          for (let j=0;j<artAver.length-i-1;j++){
            if (artAver[j]>artAver[j+1]){
              var swap = artAver[j]
              artAver[j] = artAver[j+1]
              artAver[j+1] = swap
            }
          }
        }
        artAver.reverse()
        for (let x=0;x<this.artAver.length;x++){
          for (let s=0;s<artAver.length;s++){
            if (this.artAver[x]==artAver[s]){
              sortArray2.push(s+1)
              break
            }
          }
        }
        this.sortArray2= sortArray2
      }
    }
  }
</script>
<style scoped>
  .content {

  }

  .td {
    display: inline-table;
    font-size: 13px;
  }
</style>
