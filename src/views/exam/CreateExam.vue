<template>
  <div style="width: 69%;margin: 0 auto">
    试卷名称：
    <el-input v-model="addParams.examName" type="text" size="size" style="width: 200px;"></el-input>
    <el-table
      :data="data"
      :row-style="showTr">
      <!--  <el-table-column v-for="(column, index) in columns" :key="column.dataIndex"
                         :label="column.text" align="left">
          <template slot-scope="scope">
            <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
                  :key="levelIndex"></span>
            <span v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index)">
              <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
              <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
            </span>
            <span v-else-if="index===0" class="ms-tree-space"></span>
            {{scope.row[column.dataIndex] | btnType}}
          </template>
        </el-table-column>-->
      <el-table-column label="题目" align="left" :rules='rules.name' min-width="40%">
        <template slot-scope="scope">
        <span v-if="spaceIconShow(0)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
              :key="levelIndex"></span>
          <span v-if="toggleIconShow(0,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </span>
          <span v-else-if="0===0" class="ms-tree-space"></span>
          {{scope.row['lable'] | btnType}}
        </template>
      </el-table-column>
      <el-table-column label="正确答案" align="left" min-width="100%">
        <template slot-scope="scope">
          <span v-if="spaceIconShow(1)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
                :key="levelIndex"></span>
          <span v-if="toggleIconShow(1,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </span>
          <span v-else-if="1===0" class="ms-tree-space"></span>
          <el-radio-group :min="0" v-if="!scope.row._expanded && scope.row.type==='单项选择题'"
                          v-model="scope.row.selectionKeys[0]">
            <el-radio v-for="value in scope.row.options" :label="value" :key="value">{{value}}</el-radio>
          </el-radio-group>
          <el-checkbox-group :min="0" v-if="!scope.row._expanded && scope.row.type==='多项选择题'"
                             v-model="scope.row.selectionKeys">
            <el-checkbox v-for="value in scope.row.options" :label="value" :key="value">{{value}}</el-checkbox>

          </el-checkbox-group>
        </template>
      </el-table-column>
      <el-table-column label="满分" align="left" min-width="40%">
        <template slot-scope="scope">
        <span v-if="spaceIconShow(1)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
              :key="levelIndex"></span>
          <span v-if="toggleIconShow(1,scope.row)" @click="toggle(scope.$index)">
             <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
             <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
           </span>
          <span v-else-if="1===0" class="ms-tree-space"></span>
          <span v-if="!scope.row._expanded && scope.row.type==='多项选择题'">正选得分:</span>
          <el-input v-if="scope.row.type!=='选择题'" style="width: 50px; display: inline-block" v-model="scope.row.fullScore" type="text"
                    size="mini">
            {{scope.row.fullScore}}
          </el-input>
          <br/>
          <span v-if="!scope.row._expanded && scope.row.type==='多项选择题'">漏选分值:</span>
          <el-input style="width: 50px; display: inline-block"
                    v-if="!scope.row._expanded && scope.row.type==='多项选择题'"
                    v-model="scope.row.partScore" type="text" size="mini">{{scope.row.partScore}}
          </el-input>
        </template>
      </el-table-column>
      <el-table-column label="类型" align="left" min-width="30%">
        <template slot-scope="scope">
        <span v-if="spaceIconShow(1)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
              :key="levelIndex"></span>
          <span v-if="toggleIconShow(1,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </span>
          <span v-else-if="1===0" class="ms-tree-space"></span>
          <el-select v-model="scope.row.type" placeholder="请选择">
            <el-option
              v-for="item in scope.row.types"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <!-- <el-table-column align="left" label="操作" v-if="treeType === 'normal'">
         <template slot-scope="props">
           <el-button type="primary" size="small" plain>修改</el-button>
           <el-button type="danger" size="small" plain>删除</el-button>
         </template>
       </el-table-column>-->
    </el-table>
    <el-button type="primary" @click="handleCreate">
      确定
    </el-button>
    <el-button type="success" @click="handleCancel">
      取消
    </el-button>
    <el-dialog title="确定创建" :visible.sync="isCreate" width="20%">
      <span>您创建的考试满分为:{{totalScore}}</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isCreate=false">取 消</el-button>
        <el-button type="primary" @click.native="toCreate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import Utils from '@/utils/tree/index'
  import {getTree, createExam} from '@/api/exam/createExam'
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
  //  import Vue from 'vue'
  export default {
    components: {
      ElRadio,
      ElInput,
      ElCheckbox
    },
    name: 'tree-grid',
    /*props: {
     // 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
     treeStructure: {
     type: Boolean,
     default: function () {
     return false
     }
     },
     // 这是相应的字段展示
     columns: {
     type: Array,
     default: function () {
     return []
     }
     },
     // 这是数据源
     dataSource: {
     type: Array,
     default: function () {
     return []
     }
     },
     // 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来
     requestUrl: {
     type: String,
     default: function () {
     return ''
     }
     },
     // 这个是是否展示操作列
     treeType: {
     type: String,
     default: function () {
     return 'normal'
     }
     },
     // 是否默认展开所有树
     defaultExpandAll: {
     type: Boolean,
     default: function () {
     return false
     }
     }
     },*/
    data () {
      return {
        isCreate: false,
        columns: [
          {
            text: '题目',
            dataIndex: 'menuName'
          },
          {
            text: '类型',
            dataIndex: 'menuType'
          }
        ],
        totalScore: 0,
        dataSource: [],
        label: '-选择',
        inTestSN: 0,
        type: null,
        children: [],
        menuData: [],
        treeStructure: true,
        defaultExpandAll: false,
        treeType: 'normal',
        dialogStatus: false,
        title: ['新增菜单', '修改菜单'],
        titleStatus: 0,
        id: '',
        defaultProps: {
          children: 'menuBeans',
          label: 'menuName'
        },
        listQuery: {
          id: 118
        },
        addParams: {
          id: 0,
          examName: '',
          subjectID: 0,
          gradeID: 0,
          schoolID: 0,
          xmlQuestionSets: []
        },
        rules: {
          name: [{type: "string", required: true, message: "必填字段", trigger: "change"}]
        }
      }
    },
    computed: {
      // 格式化数据源
      data: function () {
        let me = this
        if (me.treeStructure) {
          let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)
          console.log('333', data)
          return data
        }
        return me.dataSource
      },
      dataWithoutStep: function () {
        let array = new Array()
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].type !== "步骤分") {
            array.push(this.data[i])
          }
        }
        return array
      }
    }
    ,
    filters: {
      btnType(value)
      {
        if (value === 'M') {
          return '菜单'
        } else if (value === 'B') {
          return '按钮'
        } else {
          return value
        }
      }
    }
    ,
    created()
    {
      this.listQuery.id = this.$route.query.id
      this.addParams.id = this.$route.query.id
      this.addParams.schoolID = this.$route.query.schoolID
      this.addParams.gradeID = this.$route.query.gradeID
      this.addParams.subjectID = this.$route.query.subjectID
    }
    ,
    mounted()
    {
      this.initTree()
    },
    methods: {
      initTree()
      {
        getTree(this.listQuery).then(response => {
          //this.dataSource = response.data
          /*  let array = new Array();
           for (let i = 0; i < response.data.length; i++) {
           array.push(response.data[i].xmlQuestionSet)
           }*/
          this.dataSource = response.data
        })
      },
      // 显示行
      /* showTr(row, index)
       {
       let show = (row.row._parent ? (row.row._parent._expanded && row.row._parent._show) : true)
       row.row._show = show
       return show ? '' : 'display:none;'
       },*/
      //显示行修改，隐藏步骤分，总分
      showTr(row, index)
      {
        /*
         let show = (row.row._parent ? (row.row._parent._expanded && row.row._parent._show) : true)
         */
        if (!row.row._parent) {
          row.row._show = true
          return '';
        } else {
          if (row.row._parent._expanded && row.row._parent._show && row.row.type !== '步骤分'  && row.row.lable !== '总分') {
            row.row._show = true
            return ''
          }
        }
        row.row._show = false
        return 'display:none'
      },
      // 展开下级
      toggle(trIndex)
      {
        let record = this.data[trIndex]
        record._expanded = !record._expanded
      }
      ,
      // 显示层级关系的空格和图标
      spaceIconShow(index)
      {
        if (this.treeStructure && index === 0) {
          return true
        }
        return false
      }
      ,
      // 点击展开和关闭的时候，图标的切换
      toggleIconShow(index, record)
      {
        if (this.treeStructure && index === 0 && record.children && record.children.length > 0) {
          return true
        }
        return false
      }
      ,
      handleDelete()
      {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      handleCreate(){
        if (this.addParams.examName == '' || this.addParams.examName == null) {
          this.$message({
            type: 'warning',
            message: '考试名不能为空！'
          })
          return
        }
        for (let j = 0; j < this.data.length; j++) {
          if (this.data[j].type == '单项选择题' || this.data[j].type == '多项选择题') {
            if (this.data[j].selectionKeys.length == 0 && (this.data[j].fullScore !== 0 && this.data[j].fullScore !== '0')) {
              this.$message({
                type: 'warning',
                message: '选择题非0分不能空选！'
              })
              return
            }
          }
        }
        this.totalScore = 0;
        let total = 0;
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].type == '单项选择题' || this.data[i].type == '多项选择题' || (this.data[i].type == "主观题" && this.data[i].lable!=='总分')) {
            if (this.data[i].fullScore == null || this.data[i].fullScore == undefined) {

            } else {
              total = total + parseInt(this.data[i].fullScore)
            }
          }
        }
        this.totalScore = total;
        this.isCreate = true
      },
      toCreate(){
        this.isCreate = false
        let array = new Array;
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i]._level == 0) {
            array.push(this.data[i]);
          }
        }
        let result = JSON.stringify(array, function (key, value) {
          if (key == '_parent') {
            return undefined
          }
          return value
        })
        let resultTrans = JSON.parse(result)
        this.addParams.xmlQuestionSets = resultTrans
        createExam(this.addParams).then(response => {
          this.$message({
            message: '考试添加成功',
            type: "success",
            duration: 600
          });
          this.$router.push('/exam/list')
        })
      },
      handleCancel(){
        this.$router.push('/exam/list')
      },

    }
  }
</script>
<style scoped>
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 18px;
    height: 14px;
  }

  .ms-tree-space::before {
    content: ""
  }

  table td {
    line-height: 26px;
  }
</style>
