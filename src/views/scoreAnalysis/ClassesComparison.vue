<template>
  <div id="app" style="width: 98%; margin: 0 auto">
    <!--创建一个echarts的容器-->
    <div ref="bar" style="width: 45%; height: 500px; float: left">
    </div>
    <div ref="line" style="width: 45%; height: 500px; float: right">
    </div>
  </div>
</template>
<script>
  import theme from 'echarts/theme/macarons.js'
  import {getData} from '@/api/scoreAnalysis/classesComparison'
  require('echarts/theme/macarons');
  export default{
    data(){
      return {
        classes:[],
        pass:[],
        good:[],
        outstanding:[],
        average:[],
        maxScore:[],
        listQuery:{
            testID: 0,
        }
      }
    },
    created(){
      this.listQuery.testID = this.$route.params.testID
      this.init()

    },
    methods: {
      init(){
         getData(this.listQuery).then(response=>{
           this.classes = response.data.classes
           this.pass = response.data.pass
           this.good = response.data.good
           this.outstanding =response.data.outstanding
           this.average = response.data.average
           this.maxScore =response.data.maxScore
           this.drawLine();
           this.drawBar()
         })
       },
      drawBar(){
      /*准备好的dom*/
/*
      let bar = this.$echarts.init(document.getElementById('bar'),'macarons')
*/
      var bar = this.$refs.bar
      /*绘制*/
      if (bar){
        let  mybar=this.$echarts.init(bar,'macarons')
        mybar.setOption({
          title : {
            text: '平均分',
            subtext: '所有班级'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['平均分','最高分'],
            selected: {
              '平均分': true,
              '最高分': true
            }
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              data : this.classes,
                /*
                 formatter: '{value} %'
                 */
               axisLabel:{
                 formatter: function (a) {
                   return a+'班'
                 },
                 interval:0
               }
            }
          ],
          yAxis : [
            {
              type : 'value',
            }
          ],
          series : [
            {
              name:'平均分',
              type:'line',
              // barWidth : 60,
              data:this.average,
              markPoint : {
                data : [
              /*    {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}*/
                  {}
                ]
              },
              itemStyle:{
                  normal:{
                      label:{
                          show:true,
                      }
                  }
              },
              markLine : {
                data : [
                  {type : 'average', name: '平均值'}
                ]
              },
            },
            {
              name:'最高分',
              type:'line',
              // barWidth : 60,
              data:this.maxScore,
              markPoint : {
                data : [
                  {type : 'max', name: '最大值'},
                ]
              },
              itemStyle:{
                normal:{
                  label:{
                    show:true,
                  }
                }
              },
              markLine : {
                data : [
                  {type : 'average', name : '平均值'}
                ]
              }
            }
          ]
        })
      }

    },
      drawLine(){
        /*准备好的dom*/
/*
        let line = this.$echarts.init( document.getElementById('line'))
*/
        var line = this.$refs.line
        /*绘制*/
        if (line){
          let  myline=this.$echarts.init(line)
          myline.setOption( {
              title : {
                text: '分数率',
                subtext: '所有班级'
              },
              tooltip : {
                trigger: 'axis',
              },
              legend: {
                data:['及格率(60%)','良好率(80%)','优秀率(90%)'],
              },
              toolbox: {
                show : true,
                feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
                }
              },
              calculable : true,
              xAxis : [
                {
                  type : 'category',
                  boundaryGap : false,
                  data : this.classes,
                  axisLabel:{
                    formatter: function (a) {
                      return a+'班'
                    }
                  }
                }
              ],
              yAxis : [
                {
                  type : 'value',
                  axisLabel : {
/*
                    formatter: '{value} %'
*/
                    formatter: function (a) {
                      return a*100+"%"
                    }
                  }
                }
              ],
              series : [
                {
                  name:'及格率(60%)',
                  type:'line',
                  data:this.pass,
                  barWidth : 60,
                  markPoint : {
                    data : [
                      {type : 'max', name: '最大值'},
                      /*
                       {type : 'min', name: '最小值'}
                       */
                    ]
                  },
                  markLine : {
                    data : [
                      {type : 'average', name: '平均值'}
                    ]
                  }
                },
                {
                  name:'良好率(80%)',
                  type:'line',
                  data:this.good,
                  markPoint : {
                    data : [
                      {type : 'max', name: '最大值'},
                    ]
                  },
                  markLine : {
                    data : [
                      {type : 'average', name : '平均值'}
                    ]
                  }
                },
                {
                  name:'优秀率(90%)',
                  type:'line',
                  data:this.outstanding,
                  markPoint : {
                    data : [
                      {type : 'max', name: '最大值'},
                    ]
                  },
                  markLine : {
                    data : [
                      {type : 'average', name : '平均值'}
                    ]
                  }

                }
              ]
            }
          )
        }

      },
      drawBubble(){
          let object = new Object();
          let array=new Array()
          for (let  i=0;i<this.classes.length;i++){

          }
      }
  }

  }
</script>
