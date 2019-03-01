<template>
  <div class="back" style="margin: 0 auto; width: 69%;" >
    <el-button type="primary" @click.native="isAddSubject =true" icon="el-icon-plus" style="float: right">添加课程
    </el-button>
    <el-table :data="tableData" :border=true stripe style="width: 98%; margin: auto">
      <el-table-column align="left" min-width="25%" prop="id" label="序号"></el-table-column>
      <el-table-column align="left" min-width="50%" prop="name" label="学科名"></el-table-column>
      <el-table-column prop="action" min-width="50%" label="动作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="updateSubject(scope.$index,scope.row)">
            <i class="el-icon-edit"></i>修改
          </el-button>
          <el-button
            size="mini"
            type="success"
            @click="deleteSubject(scope.$index,scope.row)">
            <i class="el-icon-printer"></i>删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="课程添加" :visible.sync="isAddSubject">
      <el-form :model="addForm">
        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="addForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAddSubject=false">取 消</el-button>
        <el-button type="primary"  @click.native="addSubject">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="课程修改" :visible.sync="isUpdateSubject">
      <el-form :model="updateForm">
        <el-form-item label="课程ID" :label-width="formLabelWidth">
          <el-input v-model="updateForm.id" disabled="true" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="updateForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isUpdateSubject=false">取 消</el-button>
        <el-button type="primary" @click="toUpdateSubject">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="课程删除" :visible.sync="isDeleteSubject">
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDeleteSubject = false">取 消</el-button>
        <el-button type="primary" @click="todeleteSubject">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getList,addSubject,deleteSubject,updateSubject} from '@/api/subject/subject'
  export default {
    components: {
    },
    data(){
      return {
        isDeleteSubject: false,
        isUpdateSubject: false,
        isAddSubject: false,
        formLabelWidth: '120px',
        activeIndex: '1',
        tableData: [],
        addForm: {
          name: ''
        },
        updateForm: {
          id: '',
          name: ''
        },
        deleteForm: {
          id: '',
          name: ''
        }
      }
    },
    created(){
     this.handleSubject();
    },
    methods: {
      handleSubject(){
       getList().then(res => {
            this.tableData = res.data;
        })
      },
      addSubject(){
        addSubject(this.addForm).then(res => {
            this.$message({
              message: '添加成功',
              type: "success",
              duration: 600
            });
            this.isAddSubject = false;
            this.handleSubject()
        })
      },
      updateSubject: function (index, row) {
        this.isUpdateSubject = true
        this.updateForm=row;
      },
      toUpdateSubject(){
        updateSubject(this.updateForm).then(res => {
            this.$message({
              message: '更新成功',
              type: "success",
              duration: 600
            })
            this.isUpdateSubject = false;
            this.handleSubject();
        })
      },
      deleteSubject: function (index, row) {
        this.isDeleteSubject = true
        this.deleteForm=row;
      },
      todeleteSubject(){
        deleteSubject(this.deleteForm).then(res => {
            this.$message({
              message: '删除成功',
              type: "success",
              duration: 600
            });
            this.handleSubject();
            this.isDeleteSubject = false;
        })
      }
    },

  }
</script>
<style>
  .back {
    padding: 0px;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }

  body .el-table th.gutter {
    display: table-cell !important;
  }

</style>


