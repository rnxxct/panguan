<template>
  <div  style="width: 69%; margin: 0 auto">
    <el-button type="primary" @click.native="handleAdd" icon="el-icon-plus" style="float: right">添加地区
    </el-button>
    <el-table :data="tableData" :border=true stripe style="width:100%; margin: auto">
      <el-table-column align="left" min-width="25%" prop="name" label="地区全名"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="abbrName" label="地区简介"></el-table-column>
      <el-table-column prop="pAbbrName" min-width="25%"  label="上级代理"></el-table-column>
      <el-table-column  min-width="40%" label="动作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary" plain
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="success" plain
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="地区添加" :visible.sync="isAdd">
      <el-form :model="addForm">
        <el-form-item label="地区全名">
          <el-input autocomplete="off" v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="地区简称">
          <el-input autocomplete="off" v-model="addForm.abbrName"></el-input>
        </el-form-item>
        <el-form-item label="上级地区" prop="selectParentAgent">
          <el-select v-model="addForm.parentID" placeholder="请选择">
            <el-option
              v-for="item in tableData"
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
    <el-dialog title="地区修改" :visible.sync="isEdit">
      <el-form :model="editForm">
        <el-form-item label="地区全名">
          <el-input v-model="editForm.name"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地区简称">
          <el-input v-model="editForm.abbrName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上级地区">
          <el-select v-model="editForm.parentID" placeholder="请选择">
            <el-option
              v-for="item in tableData"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="toEdit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="地区删除" :visible.sync="isDelete" width="30%">
      <span>确定删除</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDelete=false">取 消</el-button>
        <el-button type="primary" @click="toDelete">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {getDistrictList,updateDistrict,deleteDistrict,addDistrict} from '@/api/district/district'
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
        selectParentAgent:'',
        isAdd: false,
        isDelete:false,
        isEdit:false,
        tableData: [],
        addForm:{
          name: '',
          abbrName:'',
          pAbbrName:'',
          parentID:''
        },
        editForm: {
          id: '',
          name: '',
          abbrName:'',
          pAbbrName:'',
          parentID:''
        },
        deleteForm: {
          id: '',
        }
      }
    },
    created(){
      this.initTable();
    },
    methods: {
      initTable(){
        getDistrictList().then(response =>{
          this.tableData=response.data;
        })
      },
      handleAdd(){
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
        addDistrict(this.addForm).then(response=>{
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
        deleteDistrict(this.deleteForm).then(response =>{
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
        updateDistrict(this.editForm).then(response =>{
          this.$message({
            message: '修改成功',
            type: "success",
            duration: 600
          });
          this.isEdit=false
          this.initTable()
        })
      },
      handleCancel(){
        this.isAdd=false
        this.isEdit=false
        this.initTable()
      }
    }
  }
</script>
