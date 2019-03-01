<template>
  <div class="inner_element2" style="width: 69%; margin: 0 auto">
    <el-button type="primary" @click.native="handleMore" icon="el-icon-plus" style="float: right" v-text="more">查看更多
    </el-button>
    <el-button type="success" @click.native="handleCreate" icon="el-icon-plus" style="float: right;margin-right: 20px">
      新建考试
    </el-button>
    <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
      <el-table-column align="left" prop="name" label="考试名称"></el-table-column>
      <el-table-column align="left" prop="createUserName" label="创建人"></el-table-column>
      <el-table-column align="left" prop="createTime" label="创建时间" :formatter="dateFormat"></el-table-column>
      <el-table-column align="center" label="动作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click.native="handleEdit(scope.$index,scope.row)"
          >编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        :page-sizes="[5,10,20,30, 50]"
        :current-page="listQuery.page"
        :page-size="listQuery.pageSize"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
    <el-dialog :visible.sync="isAdd" @close="handleClose">
      <el-form :inline=true>
        <el-form-item label="考试名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="学校">
          <el-select v-model="checkedSchool" @change="handleSchoolChange" placeholder="请选择">
            <el-option
              v-for="item in schools"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年级">
          <el-select v-model="checkedGrade" @change="handleGradeChange" placeholder="请选择">
            <el-option
              v-for="item in tempSchool.grades"
              :key="item.name"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div>
        <el-table @selection-change="selsChange" :data="tableData2" :border=true stripe
                  style="width:100%; margin: auto">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column align="left" prop="name" label="考试名称"></el-table-column>
          <el-table-column align="left" prop="subjectName" label="学科"></el-table-column>
          <el-table-column align="left" prop="createUserName" label="创建人"></el-table-column>
          <el-table-column align="left" prop="createTime" label="创建时间" :formatter="dateFormat"></el-table-column>
        </el-table>
        <div class="pagination-container">
          <el-pagination
            :page-sizes="[5,10,20,30, 50]"
            :current-page="listQueryForGroup.page"
            :page-size="listQueryForGroup.pageSize"
            :total="total2"
            background
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange2"
            @current-change="handleCurrentChange2"/>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAdd=false">取 消</el-button>
        <el-button type="primary" @click="toCreate">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="isEdit" @close="handleClose">
      <el-form :inline=true>
        <el-form-item label="考试名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="学校">
          <el-select v-model="checkedSchool" @change="handleSchoolChange" placeholder="请选择">
            <el-option
              v-for="item in schools"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年级">
          <el-select v-model="checkedGrade" @change="handleGradeChange" placeholder="请选择">
            <el-option
              v-for="item in tempSchool.grades"
              :key="item.name"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div>
        <el-table ref="multipleTable" @selection-change="selsChange" :data="tableData2" :border=true stripe
                  style="width:100%; margin: auto">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column align="left" prop="name" label="考试名称"></el-table-column>
          <el-table-column align="left" prop="subjectName" label="学科"></el-table-column>
          <el-table-column align="left" prop="createUserName" label="创建人"></el-table-column>
          <el-table-column align="left" prop="createTime" label="创建时间" :formatter="dateFormat"></el-table-column>
        </el-table>
        <div class="pagination-container">
          <el-pagination
            :page-sizes="[5,10,20,30, 50]"
            :current-page="listQueryForGroup.page"
            :page-size="listQueryForGroup.pageSize"
            :total="total2"
            background
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange2"
            @current-change="handleCurrentChange2"/>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isEdit=false">取 消</el-button>
        <el-button type="primary" @click="toEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {getList as getSchoolList} from "@/api/TeachingAffair/school.js"
  import {getSchoolGradeList} from '@/api/school/school.js'
  import {getList, getTestList, addExamGroup, updateExamGroup} from '@/api/exam/examGroup.js'
  import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
  import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component";
  import ElRow from "element-ui/packages/row/src/row";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  export default {
    components: {
      ElForm,
      ElInput,
      ElRow,
      ElDialog,
      ElRadio
    },
    data(){
      return {
        name: '',
        tempSchool: {}, /*当前的学校*/
        checkedSchool: '', /*选中的学校*/
        schools: [], /*所有的学校*/
        checkedGrade: '', /*选中的年级*/
        grades: [], /*所有的年级*/
        tableData: [],
        tableData2: [], /*用于组合的考试*/
        selTests: [],
        total: 0,
        total2: 0,
        radio: 1,
        more: '查看更多',
        isAdd: false,
        isEdit: false,
        id: '',
        listQuery: {
          pageNum: 1,
          pageSize: 10,
          isAll: false,
        },
        listQueryForGroup: {
          pageNum: 1,
          pageSize: 5,
          isAll: true
        }
      }
    },
    created(){
      this.initTable();
    },
    methods: {
      initTable(){
        getSchoolGradeList().then(response => {
          this.schools = response.data
          this.tempSchool = this.schools[0]
        }),
          getList(this.listQuery).then(response => {
            this.tableData = response.data.list;
            this.total = response.data.total
          })
      },
      getCurrentRow(index, row){
        this.radio = index
      },
      tableRowClassName(row, rowIndex){
        row.index = rowIndex
      },
      selectedHighlight(){
        if ((this.getIndex) == rowIndex) {
          return {
            "background-color": "rgb(250,195,100)"
          }
        }
      },
      dateFormat(row, column, cellValue, index){
        const daterc = row[column.property]
        return daterc.substr(0, 10) + ' ' + daterc.substr(11, 8)
      },
      handleEdit(index, row){
        this.name = row.name
        this.checkedSchool = row.schoolID
        this.tempSchool = this.schools.find(item => {
          return item.id == row.schoolID
        })
        this.checkedGrade = row.gradeID
        this.isEdit = true
        this.listQueryForGroup.gradeID = this.checkedGrade
        this.listQueryForGroup.schoolID = this.checkedSchool
        /*设置请求参数是否isAll为所有的*/
        console.log(this.listQueryForGroup.isAll)
        this.listQueryForGroup.id = row.id
        getTestList(this.listQueryForGroup).then(response => {
          this.tableData2 = response.data.tests
          this.total2 = response.data.total
          console.log(this.tableData2)
          this.$nextTick(() => {
            for (let j = 0; j < this.tableData2.length; j++) {
              if (this.tableData2[j].checked == 1) {
                this.$refs.multipleTable.toggleRowSelection(this.tableData2[j])
              }
            }
          })
        })
      },
      toEdit(){
        let selsArray = [];
        for (let i = 0; i < this.selTests.length; i++) {
          selsArray.push(this.selTests[i].id)
        }
        updateExamGroup({
          id: this.listQueryForGroup.id,
          name: this.name,
          gradeID: this.checkedGrade,
          schoolID: this.checkedSchool,
          tests: selsArray.toString()
        }).then(response => {
          this.initTable()
          this.isEdit = false
          this.$message({
            message: '修改成功',
            type: "success",
            duration: 600
          })
        })
        console.log(this.selTests)
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.initTable()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val
        this.initTable()
      },
      handleSizeChange2(val) {
        this.listQueryForGroup.pageSize = val
        this.initTestData()
      },
      handleCurrentChange2(val) {
        this.listQueryForGroup.pageNum = val
        this.initTestData()
      },
      handleMore(){
        if (this.more == '查看更多') {
          this.more = '一周考试'
          this.listQuery.isAll = true
          this.initTable()
        } else {
          this.listQuery.isAll = false
          this.more = '查看更多'
          this.initTable()
        }
      },
      handleCreate(){
        this.id=''
        this.name = ''
        this.tableData2 = []
        this.checkedSchool = ''
        this.checkedGrade = ''
        this.isAdd = true
      },
      handleSchoolChange(val){
        this.checkedGrade = ''
        this.tempSchool = this.schools.find(item => {
          return item.id == val
        })
      },
      handleGradeChange(val){
        this.listQueryForGroup.gradeID = this.checkedGrade
        this.listQueryForGroup.schoolID = this.checkedSchool
        this.listQueryForGroup.id = ''
        this.initTestData()
      },
      initTestData(){
        getTestList(this.listQueryForGroup).then(response => {
          this.tableData2 = response.data.tests
          this.total2 = response.data.total
          this.$nextTick(() => {
            for (let j = 0; j < this.tableData2.length; j++) {
              if (this.tableData2[j].checked == 1) {
                this.$refs.multipleTable.toggleRowSelection(this.tableData2[j])
              }
            }
          })
        })
      },
      selsChange(val){
        this.selTests = val
      },
      toCreate(){
          console.log(this.selTests)
        if (this.name == "") {
          this.$message({
            message: '考试名不能为空!',
            type: "warning",
            duration: 600
          })
          return
        }
        let selsArray = [];
        for (let i = 0; i < this.selTests.length; i++) {
          selsArray.push(this.selTests[i].id)
        }
        addExamGroup({
          name: this.name,
          gradeID: this.checkedGrade,
          schoolID: this.checkedSchool,
          tests: selsArray.toString()
        }).then(response => {
          this.initTable()
          this.$message({
            message: '添加成功',
            type: "success",
            duration: 600
          })
          this.isAdd = false
        })
      },
      handleClose(){

      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  a {
    text-decoraction: none;
  }

  /*
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

    .dialogClass {
      background-color: red;
      height: 1000px !important;
      overflow: auto
    }*/
  .inner_element2 .el-dialog__body {
    padding-top: 0px;
  }
</style>
