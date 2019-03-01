<template>
  <div>
    <div style="width: 1200px;margin: 0 auto">
      <div>
        <div style="float: left;width: 25%">
          <div class="custom-tree-container">
            <el-tree
              :data="data"
              nodeKey="id"
              ref="tree"
              accordion
              :defaultCheckedKeys="checkedKeys"
              @node-click="handleClick"
              :highlight-current="true"
              :expand-on-click-node="true"
              :props="defaultProps">
              <span class="" slot-scope="{ node, data }">
                <span>{{ node.label }}</span>
              </span>
            </el-tree>
          </div>
        </div>
        <div style="float: right; width: 73%;">
          <!--<el-button type="primary" style="" @click="handleExport">导出报表</el-button>-->
          <!--<el-button type="success" @click="handlePrint">打印报表</el-button>-->
          <div ref="bar" style="width: 90%;height: 400px"></div>
          <div ref="pie" style="width: 100%;height: 500px;display: none"></div>
          <!--<div style="margin: 10px">-->
          <!--<div v-if="subjective && item.students.length!==0" v-for="item in studentsList" style="text-align: left">-->
          <!--<span>{{item.answerName}}</span>-->
          <!--<span v-for="student in item.students" style="padding: 2px">-->
          <!--<a href="javascript:void(0)" @click="handleChangeImg(student.id)" :id="student.id">{{student.name}}</a>-->
          <!--</span>-->
          <!--</div>-->
          <!--</div>-->
          <div>
            <el-button type="primary" @click="handlePre">
              <上一题
            </el-button>
            <el-button type="success" @click="handleNext">下一题></el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mod-layer-forgot" v-bind:style="{display:display}">
      <el-button style="margin-top: 80px;margin-bottom:20px;color: black;font-weight: 700" @click="handleReturn">返回
      </el-button>
      <div>
        <img v-if="imgUrl.length==1" v-bind:src="imgUrl" width="50%" style="background: #000"/>
        <img v-if="imgUrl.length!==1" v-bind:src="imgUrl[0]" width="40%" style="background: #000"/>
        <br/>
        <img v-if="imgUrl.length!==1" v-bind:src="imgUrl[1]" width="40%" style="background: #000"/>
      </div>
    </div>
  </div>
</template>
<script>
  import {getTree, getData} from '@/api/scoreAnalysis/knowledgestatistics'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";

  require('echarts/theme/macarons');
  export default {
    components: {ElButton},
    data() {
      return {
        /*
         classes: ['一班', '二班','三班'],
         */
        imgUrl: [], /*考试图片的地址*/
        display: 'none',
        testName: '',
        subjective: false,
        classes: [],
        studentsList: [], /*学生集合*/
        data: [],
        tree: [],//构建一颗完整的有根节点的树
        checkedKeys: [],
        questionTitle: '测试题目',
        difficulty: '',
        difference: '',
        currentNode: -0,//当前节点
        currentClass: {},//当前班级
        currentClassIndex: 0,
        point: 0,//判断是不是key相同的节点
        point2: 0,
        preNodeId: -0,//上一个提标志
        preNode: {},
        root: 0,//判断是不是根节点的标志
        studentsQuestionResultsOfClasses: [],
        defaultProps: {
          label: 'name',
          children: 'child'
        },
        treeQuery: {
          testID: '',
        },
        listQuery: {
          testID: 0,
          questionID: 2
        }
      }
    },
    created() {
      this.treeQuery.testID = this.$route.query.testID
      this.listQuery.testID = this.$route.query.testID
      this.testName = this.$route.query.name
      this.initTree();
      //this.initData();
    },
    mounted() {
      this.$refs.tree.setCurrentKey(this.currentNode)
    },
    watch: {
      'currentClassIndex': function (val) {
        this.studentsList = this.getStudentsList()
      }
    },
    methods: {
      initTree() {
        getTree(this.treeQuery).then(res => {
          this.data = res.data;
          this.listQuery.questionID = this.data[0].child[0].id
          this.currentNode = this.data[0].child[0].id
          this.questionTitle = this.data[0].child[0].name
          this.$refs.tree.setCurrentKey(this.currentNode)
          this.firstData()
        })
      },
      initData() {
        getData(this.listQuery).then(res => {
          this.classes = res.data.classes
          this.subjective = res.data.subjective
          this.studentsQuestionResultsOfClasses = res.data.studentsQuestionResultsOfClasses
          this.difference = this.studentsQuestionResultsOfClasses[this.currentClassIndex].difference
          this.difficulty = this.studentsQuestionResultsOfClasses[this.currentClassIndex].difficulty
          this.studentsList = this.getStudentsList()
          if (this.currentClasses == null) {
            let object = new Object();
            for (let i = 0; i < this.classes.length; i++) {
              if (i == 0) {
                object[this.classes[i].text] = true
              } else {
                object[this.classes[i].text] = false
              }
            }
            this.currentClass = object
          }
          this.drawBar();
          this.drawPie()
        })
      },
      firstData() {
        getData(this.listQuery).then(res => {
          if (res.msg === 'next') {
            this.handleNext();
          }
          this.classes = res.data.classes
          this.subjective = res.data.subjective
          this.studentsQuestionResultsOfClasses = res.data.studentsQuestionResultsOfClasses
          this.difference = this.studentsQuestionResultsOfClasses[0].difference
          this.difficulty = this.studentsQuestionResultsOfClasses[0].difficulty
          this.$refs.tree.setCurrentKey(this.currentNode)
          let object = new Object();
          for (let i = 0; i < this.classes.length; i++) {
            if (i == 0) {
              object[this.classes[i].text] = true
            } else {
              object[this.classes[i].text] = false
            }
          }
          this.currentClass = object
          this.studentsList = this.getStudentsList()
          this.drawBar();
        })
      },
      initClasses() {
        let object = new Object();
        for (let i = 0; i < this.classes.length; i++) {
          if (i == 0) {
            object[this.classes[i].text] = true
          } else {
            object[this.classes[i].text] = false
          }
        }
        return object
      },
      getAnswers() {
        let array = new Array();
        //在此处判断是否为客观题，从而进行
        if (this.studentsQuestionResultsOfClasses[0].right !== null) {
          // array.push(this.studentsQuestionResultsOfClasses[0].right.answerName + '(正确)')
        } else {

        }
        for (let i = 0; i < this.studentsQuestionResultsOfClasses[0].answers.length; i++) {
          array.push(this.studentsQuestionResultsOfClasses[0].answers[i].answerName);
        }
        return array
      },
      getClasses() {
        let array = new Array();
        for (let i = 0; i < this.classes.length; i++) {
          array.push(this.classes[i].text);
        }
        return array
      },
      getAnswersNumbers(a) {
        let array = new Array();
        if (this.studentsQuestionResultsOfClasses[0].right !== null) {
          // array.push(this.studentsQuestionResultsOfClasses[a].right.students.length)
        }
        for (let i = 0; i < this.studentsQuestionResultsOfClasses[a].answers.length; i++) {
          array.push(this.studentsQuestionResultsOfClasses[a].answers[i].students.length);
        }
        return array
      },
      getLegendsSeries() {
        var series = [];
        for (let i = 0; i < this.classes.length; i++) {
          series.push({
            name: this.classes[i].text,
            barWidth: 60,
            type: 'bar',
            data: this.getAnswersNumbers(i),
            itemStyle: {
              normal: {
                color: function (param) {
                  var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3',
                    '#B74AE5', '#0AAF9F', '#E89589']
                  return colorList[param.dataIndex]
                }
              }
            },
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          })
        }
        return series
      },
      drawBar() {
        var bar = this.$refs.bar
        if (bar) {
          let mybar = this.$echarts.init(bar, 'macarons')
          var that = this;
          mybar.setOption({
            title: {
              text: this.questionTitle,
              subtext: '满分:' + this.studentsQuestionResultsOfClasses[0].right.answerName,
            },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                var students = '';
                /*修改判断存在正确答案*/
                /*
                 if (params[0].name == that.studentsQuestionResultsOfClasses[params[0].componentIndex].right.answerName + '(正确)') {
                 */
                if (that.studentsQuestionResultsOfClasses[0].right !== null && params[0].name == that.studentsQuestionResultsOfClasses[params[0].componentIndex].right.answerName + '(正确)') {

                  let count = 0;
                  for (let i = 0; i < that.studentsQuestionResultsOfClasses[params[0].componentIndex].right.students.length; i++) {
                    count++;
                    if (count !== 0 && count % 5 == 0) {
                      students = students + '<br/>'
                    }
                    students = students + that.studentsQuestionResultsOfClasses[params[0].componentIndex].right.students[i].name + ','
                  }
                } else {
                  for (let i = 0; i < that.studentsQuestionResultsOfClasses[params[0].componentIndex].answers.length; i++) {
                    if (params[0].name == that.studentsQuestionResultsOfClasses[params[0].componentIndex].answers[i].answerName) {
                      let count = 0
                      for (let a = 0; a < that.studentsQuestionResultsOfClasses[params[0].componentIndex].answers[i].students.length; a++) {
                        count++;
                        if (count !== 0 && count % 5 == 0) {
                          students = students + '<br/>'
                        }
                        students = students + that.studentsQuestionResultsOfClasses[params[0].componentIndex].answers[i].students[a].name + ','
                      }
                      break
                    }
                  }
                }
                var res = '<div><p>班级:' + params[0].seriesName + '<br/>' + students
                res = res.substring(0, res.length - 1)
                return res
              }
            },
            legend: {
              type: 'scroll',
              orient: 'vertical',
              right: -0,
              top: 20,
              data: this.getClasses(),
              selected: this.currentClass
            },
            toolbox: {
              show: true,
              feature: {
                dataView: {show: false, readOnly: false},
                magicType: {show: false, type: ['line', 'bar']},
                restore: {show: false},
                saveAsImage: {show: false}
              }
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                data: this.getAnswers(),
                axisLabel: {
                  interval: 0
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: this.getLegendsSeries()
          })
          mybar.on('legendselectchanged', function (obj) {
            var option = this.getOption();
            let j = 0;
            for (var s1 in  obj.selected) {
              if (obj.name == s1) {
                // that.difference = this.studentsQuestionResultsOfClasses[j].right.answerName;
                that.difficulty = that.studentsQuestionResultsOfClasses[j].difficulty

                that.currentClassIndex = j;
              }
              j++;
            }
            let name = obj.name;
            let object = new Object();
            for (var s in  obj.selected) {
              if (obj.name !== s) {
                object[s] = false
              } else {
                object[s] = true
              }
            }
            option.legend[0].selected = object
            // option.title[0].subtext = '满分:' + that.difference;
            that.currentClass = object
            this.setOption(option)
          })
        }
      },
      //画饼图
      drawPie() {
        var pie = this.$refs.pie
        if (pie) {
          let mypie = this.$echarts.init(pie, 'macarons')
          var that = this;
          mypie.setOption({
            title: {
              text: '某站点用户访问来源',
              subtext: '纯属虚构',
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data: this.getClasses(),
              //selected: this.currentClass
            },
            toolbox: {
              show: true,
              feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {
                  show: true,
                  type: ['pie', 'funnel'],
                  option: {
                    funnel: {
                      x: '25%',
                      width: '50%',
                      funnelAlign: 'left',
                      max: 1548
                    }
                  }
                },
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            calculable: true,
            series: [
              {
                name: '1611',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                  {value: 335, name: 'A'},
                  /*           {value:310, name:'B'},
                   {value:234, name:'C'},
                   {value:135, name:'D'},
                   {value:1548, name:'E'}*/
                ]
              },
              {
                name: '1622',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                  {value: 335, name: 'A'},
                  {value: 310, name: 'B'},
                  {value: 234, name: 'C'},
                  {value: 135, name: 'D'},
                  {value: 1548, name: 'E'}
                ]
              }
            ]
          })
        }
      },
      handleClick(data) {
        this.listQuery.questionID = data.id
        this.currentNode = data.id
        this.questionTitle = data.name
        this.initData()
      },
      handleNext() {
        let object = new Object();
        object.id = 0;
        object.child = this.data
        this.root = 0
        this.traverseTree(object)
        this.listQuery.questionID = this.currentNode
        this.$refs.tree.setCurrentKey(this.currentNode)
        this.initData()
      },
      handlePre() {
        this.point2 = 0
        this.root == 0
        let object = new Object();
        object.id = 0;
        object.child = this.data
        this.traverseTreePre(object);
        if (this.preNode.child.length > 0) {
          this.point2 = 0
          this.$refs.tree.setCurrentKey(this.currentNode)
          this.traverseTreePre(object);
        }
        this.currentNode = this.preNodeId
        this.listQuery.questionID = this.currentNode
        this.$refs.tree.setCurrentKey(this.currentNode)
        this.initData()
      },
      traverseTree(node) {
        if (!node) {
          return;
        }
        if (this.root == 0) {
          this.traverseNode(node)
        }
        if (node.child && node.child.length > 0) {
          var i = 0;
          for (i = 0; i < node.child.length; i++) {
            this.traverseTree(node.child[i])
          }
        }
      },
      traverseNode(node) {
        // alert(node.id+"-----current--id"+this.currentNode)
        if (node.id == this.currentNode) {
          this.point = 1
        } else if (this.point == 1) {
          if (node.child.length > 0 && this.point == 1) {
            this.currentNode = node.child[0].id
            this.questionTitle = node.child[0].name
            this.point = 0;
            this.root = 1;
            return;
          } else {
            this.currentNode = node.id
            this.questionTitle = node.name
            this.point = 0;
            this.root = 1;
            return;
          }
        }
      },
      traverseTreePre(node) {
        if (!node) {
          return;
        }
        this.traverseNodePre(node)
        /*if (this.point2==1){
         alert("t退出")
         this.point2=0
         return
         }*/
        /*
         alert("遍历")
         */
        if (node.child && node.child.length > 0) {
          var i = 0;
          for (i = 0; i < node.child.length; i++) {
            this.traverseTreePre(node.child[i])
          }
        }
      },
      traverseNodePre(node) {
        if (node.id == this.currentNode) {
          this.point2 = 1
          return
        } else if (this.point2 == 0) {
          this.preNodeId = node.id
          this.preNode = node
          this.questionTitle = node.name
        }
      },
      handleExport() {
        exportEXCEL({
          testID: this.listQuery.testID,
          classID: this.classes[this.currentClassIndex].value
        }).then(response => {
          var result = response.data
          var array = new Array()
          for (let j = 0; j < result.length; j++) {
            for (let x = 0; x < result[j].answers.length; x++) {
              let question = new Object()
              if (x == 0) {
                question.number = result[j].label
                question.option = result[j].answers[x].answerName + " (正确)"
              } else {
                question.number = ""
                question.option = result[j].answers[x].answerName
              }
              /*
               question.option = result[j].answers[x].answerName
               */
              question.total = result[j].answers[x].numberAndPresent
              let studentName = "";
              for (let s = 0; s < result[j].answers[x].students.length; s++) {
                studentName += result[j].answers[x].students[s].name + ","
              }
              studentName = studentName.substr(0, studentName.length - 1)
              question.students = studentName
              array.push(question)
            }
            let question = new Object()
            question.number = ""
            question.option = ""
            question.total = ""
            question.students = ""
            array.push(question)
          }
          import('@/vendor/Export2Excel').then(excel => {
            const tHeader = ['题号', '选项', '汇总', '名单']
            const filterVal = ['number', 'option', 'total', 'students']
            const data = this.formatJson(filterVal, array)
            excel.export_json_to_excel({
              header: tHeader,
              data,
              filename: this.testName + "_" + this.classes[this.currentClassIndex].text + "班",
              autoWidth: this.autoWidth
            })
          })
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
      handlePrint() {
        this.$router.push({
          path: '/examToPrint', query: {
            testID: this.listQuery.testID,
            classID: this.classes[this.currentClassIndex].value, classNumber: this.classes[this.currentClassIndex].text
          }
        })
      },
      handleCheck() {
        this.display = 'block'
      },
      handleReturn() {
        this.display = 'none'
      },
      handleChangeImg(id) {
        getImg({studentID: id, testID: this.listQuery.testID, questionID: this.listQuery.questionID}).then(response => {
          this.display = 'block'
          this.imgUrl = response.data
        })
      },
      getStudentsList() {
        let array = new Array();
        if (this.studentsQuestionResultsOfClasses[this.currentClassIndex].right != null) {
          // array.push(this.studentsQuestionResultsOfClasses[this.currentClassIndex].right)
        }
        for (let j = 0; j < this.studentsQuestionResultsOfClasses[this.currentClassIndex].answers.length; j++) {
          array.push(this.studentsQuestionResultsOfClasses[this.currentClassIndex].answers[j])
          array.push()
        }
        return array
      }
    },
  };
</script>
<style scoped>
  .custom-tree-container {
    width: 40%;
    position: relative;
    float: left;
    margin: 5% 15px;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
    padding: 20px;
    /*
        background-color: navy !important;
    */
  }

  .el-tree-node__content {
    background-color: red !important;
  }

  .line {
    height: 0px;
  }

  .mod-layer-forgot {
    height: 1000px;
    width: 100%;
    position: absolute;
    z-index: 1001;
    top: -100px;
    left: 0px;
    background: #000000;
    opacity: 1;
  }
</style>
