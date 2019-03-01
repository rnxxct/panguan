<template>
  <div style="width: 69%;margin: 0 auto;">
    <el-button type="primary" @click.native="handleAdd" icon="el-icon-plus" style="float: right">添加班级
    </el-button>
    <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
      <el-table-column align="left" min-width="25%" prop="name" label="班级名称"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="classNumber" label="班号"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="gradeName" label="年级"></el-table-column>
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
    <el-dialog title="班级添加" :visible.sync="isAdd" @close="closeDialog">
      <el-form :model="addForm">
        <el-form-item label="班级名称" >
          <el-input autocomplete="off" v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="班号" >
          <el-input autocomplete="off" v-model="addForm.classNumber"></el-input>
        </el-form-item>
        <el-form-item label="包含年级" >
          <el-select  v-model="addForm.gradeID" placeholder="请选择">
            <el-option
              v-for="item in grades"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAdd=false">取 消</el-button>
        <el-button type="primary" @click="toAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="班级修改" :visible.sync="isEdit" @close="closeDialog">
      <el-form :model="editForm">
        <el-form-item label="班级名称" >
          <el-input autocomplete="off" v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="班号" >
          <el-input autocomplete="off" v-model="editForm.classNumber"></el-input>
        </el-form-item>
        <el-form-item label="包含年级" >
          <el-select  v-model="editForm.gradeID" placeholder="请选择">
            <el-option
              v-for="item in grades"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isEdit=false">取 消</el-button>
        <el-button type="primary" @click="toEdit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="班级删除" :visible.sync="isDelete" width="30%">
      <span>确定删除</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDelete=false">取 消</el-button>
        <el-button type="primary" @click="toDelete">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {getList,addClass,deleteClass,updateClass} from '@/api/TeachingAffair/classOfSchool'
  import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  export default {
    components: {
      ElOption,
      ElFormItem,
      ElSelectDropdown},
    data(){
      return {
        isAdd:false,
        isDelete:false,
        isEdit:false,
        tableData:[],
        grades:[],
        listQuery:{
          schoolID:''
        },
        addForm:{
          schoolID:'',
          name: '',
          classNumber:'',
          gradeID:'',
        },
        editForm:{
          id:'',
          name: '',
          classNumber:'',
          gradeID:'',
        },
        deleteForm:{
          id:''
        }
      }
    },
    created(){
      this.listQuery.schoolID=this.$route.params.schoolID
      this.addForm.schoolID=this.$route.params.schoolID
      this.initTable();
    },
    methods: {
      initTable(){
        getList(this.listQuery).then(response =>{
          this.tableData=response.data.classes;
          this.grades = response.data.grade
        })
      },
      handleAdd(){
        this.addForm.name=""
        this.addForm.classNumber=""
        this.addForm.gradeID=""
        this.isAdd=true
      },
      handleEdit(index,row){
        this.isEdit=true
        this.editForm = row;
      },
      handleDelete(index,row){
        this.isDelete=true
        this.deleteForm=row
      },
      toAdd(){
        addClass(this.addForm).then(response=>{
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
        deleteClass(this.deleteForm).then(response =>{
          this.$message({
            message: '删除成功',
            type: "success",
            duration: 600
          });
          this.isDelete=false
          this.initTable();
        })
      },
      toEdit(){
        updateClass(this.editForm).then(response =>{
          this.$message({
            message: '修改成功',
            type: "success",
            duration: 600
          });
          this.isEdit=false
          this.initTable()
        })
      },
      closeDialog(){
        this.initTable()
      }
    }
  }
</script>
