<template>
  <div class="custom-tree-container">
    <div class="block" style="width: 30%;margin: 0 auto">
      <el-tree
        :data="data3"
        show-checkbox
        default-expand-all
        :expand-on-click-node="false"
        :props="defaultProps">
        <span class="custom-tree-node" slot-scope="{ node, data }">
         <span>{{ node.label }}</span>
          <span>
          <el-button
            type="text"
            size="mini"
            @click="handleEdit(node ,data)">
            编辑
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="handleDelete(node,data)">
            删除
          </el-button>
             <el-button
               type="text"
               size="mini"
               @click="handleAdd(node,data)">
            +同级知识点
          </el-button>
             <el-button
               type="text"
               size="mini"
               @click="handleAdd2(node,data)">
            +子知识点
          </el-button>
        </span>
      </span>
      </el-tree>
    </div>
    <el-dialog title="添加同级知识点" :visible.sync="isAdd">
      <el-form :model="addForm">
        <el-form-item label="知识点" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="addForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAdd=false">取 消</el-button>
        <el-button type="primary" @click.native="toAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加子级知识点" :visible.sync="isAdd2">
      <el-form :model="addForm">
        <el-form-item label="知识点" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="addForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAdd2=false">取 消</el-button>
        <el-button type="primary"  @click.native="toAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改知识点" :visible.sync="isEdit">
      <el-form :model="editForm">
        <el-form-item label="知识点" :label-width="formLabelWidth">
          <el-input autocomplete="off" v-model="editForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isEdit=false">取 消</el-button>
        <el-button type="primary" @click.native="toEdit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="删除知识点" :visible.sync="isDelete" width="20%">
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDelete = false">取 消</el-button>
        <el-button type="primary" @click="toDelete">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {getTreeOfSubject, addPoint, deletePoint, updatePoint} from  '@/api/subject/knowledgeOfSubject'
  export default {
    data() {
      return {
        isAdd: false,
        isAdd2:false,
        isDelete: false,
        isEdit: false,
        data3: [],
        defaultProps: {
          label: 'name',
          children: 'child'
        },
        listQuery: {
          subjectID: ''
        },
        addForm: {
          id: '',
          subjectID:'',
          isSame: true,
          name: ''
        },
        editForm: {
          id: '',
          subjectID:'',
          name: ''
        },
        deleteForm: {
          id: 0,
        },
      }
    },
    created(){
      this.listQuery.subjectID = this.$route.params.subjectID
      this.addForm.subjectID = this.$route.params.subjectID
      this.editForm.subjectID = this.$route.params.subjectID
      this.initTree();
    },
    methods: {
      initTree(){
        getTreeOfSubject(this.listQuery).then(res => {
          this.data3 = res.data.child;
        })
      },
      handleAdd(node, data){
        this.addForm.id = data.id
        this.addForm.isSame=true
        this.isAdd = true
      },
      handleAdd2(node, data){
        this.addForm.id = data.id
        this.addForm.isSame=false
        this.isAdd2 = true
      },
      handleEdit(node, data){
        this.editForm.id = data.id;
        this.isEdit = true
      },
      handleDelete(node, data){
        this.deleteForm.id = data.id
        this.isDelete = true
      },
      toAdd(){
        addPoint(this.addForm).then(response => {
          this.$message({
            message: '添加成功',
            type: "success",
            duration: 600
          });
          this.isAdd = false
          this.isAdd2 =false
          this.initTree()
        })
      },
      toDelete(){
        deletePoint(this.deleteForm).then(response => {
          this.$message({
            message: '删除成功',
            type: "success",
            duration: 600
          });
          this.isDelete = false
          this.initTree()
        })
      },
      toEdit(){
        updatePoint(this.editForm).then(response => {
          this.$message({
            message: '修改成功',
            type: "success",
            duration: 600
          });
          this.isEdit = false
          this.initTree()
        })
      },
    },
  };
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
