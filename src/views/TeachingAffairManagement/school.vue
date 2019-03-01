<template>
  <div style="width: 69%;margin: 0 auto;">
    <el-button type="primary" @click.native="handleAdd" icon="el-icon-plus" style="float: right">新增学校
    </el-button>
    <el-table :data="tableDataTrans" :border=true stripe style="width:100%; margin: auto">
      <el-table-column align="left" min-width="25%" prop="name" label="学校全名"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="abbrName" label="学校简称"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="districtName" label="地区"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="agentName" label="代理商"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="gradeJoin" label="包含年级"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="action" label="动作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary" plain
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="primary" plain
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="新增学校" :visible.sync="isAdd" @close="closeDialog">
      <el-form :model="addForm" :inline=true align="left">
        <el-form-item label="学校名称">
          <el-input autocomplete="off" v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学校简称">
          <el-input autocomplete="off" v-model="addForm.abbrName"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="选择地区">
          <el-select v-model="addForm.districtID" placeholder="请选择">
            <el-option
              v-for="item in districts"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择代理">
          <el-select v-model="addForm.agentID" placeholder="请选择">
            <el-option
              v-for="item in agents"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学校代码">
          <el-input autocomplete="off" v-model="addForm.schoolCode"></el-input>
        </el-form-item>
        <el-form-item label="包含年级">
          <el-select v-model="tempGrade" placeholder="请选择">
            <el-option
              v-for="item in gradeData"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="handleGradeAdd">新增年级</el-button>
        <p>当前年级:</p>
        <el-table :data="tempGrades" :border=true stripe style="width:100%; margin: auto" :show-header="false">
          <el-table-column align="left" min-width="25%" prop="name" label="班号"></el-table-column>
          <el-table-column align="left" min-width="50%" prop="action" label="动作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary" plain
                @click="handleGradeDelete(scope.$index, scope.row)">删除年级
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAdd=false">取 消</el-button>
        <el-button type="primary" @click="toAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="学校修改" :visible.sync="isEdit" @close="closeDialog">
      <el-form :model="editForm" :inline=true align="left">
        <el-form-item label="学校名称">
          <el-input autocomplete="off" v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学校简称">
          <el-input autocomplete="off" v-model="editForm.abbrName"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-select v-model="editForm.districtID" placeholder="请选择">
            <el-option
              v-for="item in districts"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="代理商">
          <el-select v-model="editForm.agentID" placeholder="请选择">
            <el-option
              v-for="item in agents"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学校代码">
          <el-input autocomplete="off" v-model="editForm.schoolCode"></el-input>
        </el-form-item>
        <el-form-item label="包含年级">
          <el-select v-model="tempGrade" placeholder="请选择">
            <el-option
              v-for="item in gradeData"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="handleGradeAdd">新增年级</el-button>
        <p>当前年级:</p>
        <el-table :data="tempGrades" :border=true stripe style="width:100%; margin: auto" :show-header="false">
          <el-table-column align="left" min-width="25%" prop="name" label="班级名称"></el-table-column>
          <el-table-column align="left" min-width="50%" prop="action" label="动作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary" plain
                @click="handleGradeDelete(scope.$index, scope.row)">删除年级
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isEdit=false">取 消</el-button>
        <el-button type="primary" @click="toEdit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="学校删除" :visible.sync="isDelete" width="30%">
      <span>确定删除</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDelete=false">取 消</el-button>
        <el-button type="primary" @click="toDelete">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {getSchoolGradeList} from '@/api/school/school'
  import {getGrade} from '@/api/school/school'
  import {getDistrictList} from '@/api/district/district'
  import {deleteSchool, updateSchool, addSchool} from '@/api/TeachingAffair/school'
  import {getList as getAgentList} from '@/api/TeachingAffair/agent'
  import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  export default {
    components: {
      ElOption,
      ElFormItem,
      ElSelectDropdown
    },
    data(){
      return {
        isAdd: false,
        isDelete: false,
        isEdit: false,
        agents: [], /*代理商数据*/
        tableData: [],
        tableDataTrans: [], /*转化后的数组*/
        tempGrades: [],
        tempGrade: '', /*当前选中的tempGrade*/
        districts: [],
        gradeData: [],
        listQuery: {
          schoolID: ''
        },
        addForm: {
          name: '',
          abbrName: '',
          agentID: '',
          grades: [],
          schoolCode:'',
          districtID: ''
        },
        editForm: {
          id: '',
          name: '',
          abbrName: '',
          agentID: '',
          grades: [],
          schoolCode:'',
          districtID: ""
        },
        deleteForm: {
          id: ''
        }
      }
    },
    created(){
      this.listQuery.schoolID = this.$route.params.schoolID
      this.addForm.schoolID = this.$route.params.schoolID
      this.initTable();
    },
    methods: {
      initTable(){
        getSchoolGradeList(this.listQuery).then(response => {
          this.tableData = response.data;
          this.tableDataTrans = this.tableData.slice(0, this.tableData.length)
          var gradeJoin = "";
          for (let i = 0; i < this.tableData.length; i++) {
            for (let j = 0; j < this.tableData[i].grades.length; j++) {
              gradeJoin += this.tableData[i].grades[j].name + " "
            }
            gradeJoin = gradeJoin.substr(0, gradeJoin.length - 1)
            this.tableDataTrans[i].gradeJoin = gradeJoin
            gradeJoin = "";
          }

        })
        getGrade(this.listQuery).then(response => {
          this.gradeData = response.data;
        })
        getAgentList().then(response => {
          this.agents = response.data
        })
        getDistrictList().then(response => {
          this.districts = response.data
        })
      },
      handleGradeAdd(){
        if (this.tempGrade !== '' && this.tempGrade !== null) {
          let grade = {};
          grade = this.gradeData.find((item) => {
            return item.id == this.tempGrade
          })
          this.tempGrades.push(grade)
        }
      },
      handleAdd(){
        this.addForm.schoolCode =""
        this.addForm.name = ""
        this.addForm.abbrName = ""
        this.addForm.districtName = ""
        this.addForm.agentID = ""

        this.isAdd = true
        this.tempGrades = []
      },
      handleEdit(index, row){
        this.isEdit = true
        this.editForm = row;
        this.tempGrades = row.grades.slice(0, row.grades.length)
      },
      handleDelete(index, row){
        this.isDelete = true
        this.deleteForm = row
      },
      toAdd(){
        this.addForm.grades = this.tempGrades
        addSchool(this.addForm).then(response => {
          this.$message({
            message: '添加成功',
            type: "success",
            duration: 600
          });
          this.isAdd = false
          this.initTable()
        })
      },
      toDelete(){
        deleteSchool(this.deleteForm).then(response => {
          this.$message({
            message: '删除成功',
            type: "success",
            duration: 600
          });
          this.isDelete = false
          this.initTable();
        })
      },
      toEdit(){
        this.editForm.grades = this.tempGrades
        updateSchool(this.editForm).then(response => {
          this.$message({
            message: '修改成功',
            type: "success",
            duration: 600
          });
          this.isEdit = false
          this.initTable()
        })
      },
      handleGradeDelete(index, row){
        var deleteGrade = {};
        deleteGrade = this.tempGrades.find((item) => {
          return item.id == row.id
        })
        for (let i = 0; i < this.tempGrades.length; i++) {
          if (this.tempGrades[i].id == deleteGrade.id) {
            this.tempGrades.splice(i, 1)
          }
        }
      },
      closeDialog(){
        this.initTable()
      }
    }
  }
</script>
