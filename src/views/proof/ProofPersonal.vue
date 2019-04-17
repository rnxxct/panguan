<template>
  <div style="width: 90%; margin: 0 auto">
    <div class="left" style="position:fixed;width: 35%; float: left">
      <el-button type="info" @click="handlePre">上一面</el-button>
      <el-button type="warning" icon="el-icon-refresh" @click="handleRotate">旋转</el-button>
      <el-button type="info" @click="handleNext">下一面</el-button>
      <el-button type="danger" @click="handleDis">这是废卷</el-button>
      <el-carousel :autoplay="false" height="700px" arrow="never"  indicator-position="none" :loop=false v-if="done==1"
                   ref="carousel">
        <el-carousel-item v-for="(item,item_index) in imgsList" :key="item.id" >
          <img :src="item" v-bind:id="'imgRotate'+item_index" width="70%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right" style="width: 55%;float: right">
      <el-form :inline="true">
        <el-form-item label="学生姓名">
          <el-input v-model="proofParams.studentName" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="学生学号">
          <el-input  v-model="proofParams.studentNumber" placeholder="请输入内容"></el-input>
        </el-form-item>
          <el-form-item label="第几张卷">
              <el-input  v-model="proofParams.sheetNum" placeholder="请输入1或2"></el-input>
          </el-form-item>
      </el-form>
      <el-table
        :data="data"
        :row-style="showTr">
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
            <!--<el-radio-group v-if="!scope.row._expanded && scope.row.type==='单项选择题'"-->
                            <!--v-model="scope.row.selectionKeys[0]">-->
              <!--<el-radio v-for="value in scope.row.options" :label="value" :key="value">{{value}}</el-radio>-->
            <!--</el-radio-group>-->
            <el-checkbox-group v-if="!scope.row._expanded && scope.row.type==='单项选择题'"
            v-model="scope.row.selectionKeys">
            <el-checkbox v-for="value in scope.row.options" :label="value" :key="value">{{value}}</el-checkbox>
            </el-checkbox-group>
            <el-checkbox-group :min="0" v-if="!scope.row._expanded && scope.row.type==='多项选择题'"
                               v-model="scope.row.selectionKeys">
              <el-checkbox v-for="value in scope.row.options" :label="value" :key="value">{{value}}</el-checkbox>
            </el-checkbox-group>
          </template>
        </el-table-column>
        <el-table-column label="得分" align="left" min-width="40%">
          <template slot-scope="scope">
        <span v-if="spaceIconShow(1)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"
              :key="levelIndex"></span>
            <span v-if="toggleIconShow(1,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-caret-bottom" aria-hidden="true"></i>
        </span>
            <span v-else-if="1===0" class="ms-tree-space"></span>
            <el-input style="width: 50px; display: inline-block" v-if="!scope.row._expanded && scope.row.lable==='总分' || scope.row.type==='步骤分'"
                      v-model="scope.row.fullScore" type="text" size="mini">{{scope.row.fullScore}}
            </el-input>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="success" @click="handleProof">校对完毕</el-button>
    </div>
    <el-dialog title="确定校对" :visible.sync="isSure" width="20%">
      <div slot="footer" class="dialog-footer">
        <el-button @click="isSure=false">取 消</el-button>
        <el-button type="primary" @click.native="toProof">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="确定废卷" :visible.sync="isDis" width="20%">
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDis=false">取 消</el-button>
        <el-button type="primary" @click.native="toDis">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {getType,getStudentNameByNumber,getSheetOfStudent} from '@/api/proof/proof'
  import {getVerifySheetList, toConfirmSheet} from '@/api/proof/proof'
  import Utils from '@/utils/tree/index'
  import {getTree, createExam} from '@/api/exam/createExam'
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  export default {
    components: {
      ElFormItem,
      ElForm,
      ElRadio,
      ElInput,
      ElCheckbox
    },
    name: 'tree-grid',
    created()
    {
      this.listQuery.testID = this.$route.query.testID
      this.listQuery.studentID = this.$route.query.studentID
      this.listQuery.serverFileID = this.$route.query.serverFileID
      this.pageSize = this.$route.query.pageSize
      this.pageNum = this.$route.query.pageNum
      this.proofParams.testID = this.$route.query.testID
      if (this.$route.query.serverFileID){
        this.proofParams.sheetID = this.$route.query.serverFileID.split('_')[1]
      }
      this.getData()
    },
    mounted(){

    },
    watch: {
      'imgsList': function (newVal, oldVal) {
        this.done = 1;
      },
      'proofParams.studentNumber':function (val) {
        this.handleChange(val)
      }
    },
    data () {
      return {
        pageNum:1,
        pageSize:10,
        currentPicIndex:0,
        done: 0,
        isSure: false,
        isDis: false,
        imgsList: [],
        rotateIndex: 0,
        currentImgs: {imgs: []},
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
        titleStatus: 0,
        id: '',
        defaultProps: {
          children: 'menuBeans',
          label: 'menuName'
        },
        listQuery: {
          testID: 118,
          studentID:0,
          serverFileID:'',
        },
        proofParams: {
          testID: '',
          sheetID: '',
          studentName: '',
          studentNumber: '',
            sheetNum: '',
          questions: [],
          disable: false,
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
          return data
        }
        return me.dataSource
      }
    },
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
    },
    methods: {
      getData () {
        getSheetOfStudent(this.listQuery).then(response => {
          this.dataSource = response.data.questions
          this.imgsList = response.data.verifySheet.imgs
          this.proofParams.studentName = response.data.verifySheet.studentName
          this.proofParams.studentNumber = response.data.verifySheet.studentNumber
            this.proofParams.sheetNum = response.data.verifySheet.sheetNum
        })
      },
      // 显示行
      showTr(row, index){
        let show = (row.row._parent ? (row.row._parent._expanded && row.row._parent._show) : true)
        row.row._expanded = show
        return show ? '' : ''
      },
      // 展开下级
      toggle(trIndex){
        console.log('------------'+trIndex)
        let record = this.data[trIndex]
        record._expanded = !record._expanded
      }
      ,
      // 显示层级关系的空格和图标
      spaceIconShow(index){
        if (this.treeStructure && index === 0) {
          return true
        }
        return false
      }
      ,
      // 点击展开和关闭的时候，图标的切换
      toggleIconShow(index, record){
        if (this.treeStructure && index === 0 && record.children && record.children.length > 0) {
          return true
        }
        return false
      },
      handleProof(){
        if (this.proofParams.studentName == '' || this.proofParams.studentName == null) {
          this.$message({
            type: 'warning',
            message: '学号和姓名不能为空！'
          })
          return
        }
          if (this.proofParams.sheetNum == '') {
              this.$message({
                  type: 'warning',
                  message: '请输入卷号！'
              })
              return
          }
        this.isSure = true
      },
      toProof(){
        this.isSure = false
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
        this.proofParams.questions = resultTrans
        this.proofParams.disable = false
        toConfirmSheet(this.proofParams).then(response => {
          this.$message({
            message: '校对成功',
            type: "success",
            duration: 300
          });
          this.$router.back(-1)
        })
      },
      handleDis(){
        this.isDis = true
      },
      toDis(){
        this.isDis = false
        this.proofParams.disable = true
        toConfirmSheet(this.proofParams).then(response => {
          this.$message({
            message: '废卷成功',
            type: "success",
            duration: 300
          });
          this.$router.back(-1)
        })
      },
      handleRotate(){
        //this.imgStyle=""
        document.getElementById("imgRotate"+this.currentPicIndex).style.transform = 'rotate(' + (90 * this.rotateIndex) + 'deg)';
        this.rotateIndex++
      },
      handlePre(){
        this.$refs.carousel.prev()
        if (this.currentPicIndex == 1){
          this.currentPicIndex=0
        }else {
          this.currentPicIndex=1
        }
      },
      handleNext(){
        this.$refs.carousel.next()
        if (this.currentPicIndex == 1){
          this.currentPicIndex=0
        }else {
          this.currentPicIndex=1
        }
      },
      handleChange(value){
        getStudentNameByNumber({testID:this.listQuery.testID,studentNumber:value}).then(response=>{
          this.proofParams.studentName = response.data
        })
      }
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
