<template>
  <div style="width: 69%;margin: 0 auto">
    <div style="background:#f7f7f7;width: 60%;margin: 0 auto;border: 1px solid black;margin-bottom: 30px">
      <el-form label-position="left" label-width="80px" align="left" style="padding: 10px;">
        <el-form-item label="姓名">
          <el-col :span="12">
            <el-input autocomplete="off" v-model="data.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="登录名">
          <el-col :span="12">
            <el-input :disabled="true" autocomplete="off" width="50%" v-model="data.username"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="手机">
          <el-col :span="12">
            <el-input autocomplete="off" v-model="data.mobile"></el-input>
          </el-col>&nbsp;&nbsp;
          <el-button type="primary" @click="isEditInfo=true">修改个人资料</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div style="background:#f7f7f7;width: 60%;margin: 0 auto;border: 1px solid black;">
      <el-form label-position="left" label-width="80px" align="left" style="padding: 10px;">
        <el-form-item label="密码">
          <el-col :span="12">
            <el-input :disabled="true" autocomplete="off" type="password" value="test"></el-input>
          </el-col>&nbsp;&nbsp;
          <el-button type="primary" @click="isEdit=true">修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog title="更改密码" :visible.sync="isEdit" width="30%">
      <el-form labelWidth="100px">
        <el-form-item label="原来密码">
          <el-col :span="20">
            <el-input autocomplete="off" v-model="editForm.passwordOld" type="password"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="新密码">
          <el-col :span="20">
            <el-input autocomplete="off" v-model="editForm.passwordNew"type="password"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-col :span="20">
            <el-input autocomplete="off" v-model="editForm.passwordNews2" type="password"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isEdit=false">取 消</el-button>
        <el-button type="primary" @click="toEdit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="更改个人资料" :visible.sync="isEditInfo" width="20%">
      <span>确定更改</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isEditInfo=false">取 消</el-button>
        <el-button type="primary" @click="toEditInfo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {getUser, updateUser,updatePassword} from '@/api/personal'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component";
  import ElCol from "element-ui/packages/col/src/col";
  export default{
    components: {
      ElCol,
      ElDialog,
      ElForm,
      ElButton
    },
    created() {
      this.initData();
    },
    data(){
      return {
        isEdit: false,
        isEditInfo: false,
        data: {},
        editForm: {
          passwordOld: '',
          passwordNew: '',
          passwordNews2: ''
        }
      }
    },
    methods: {
      initData(){
        getUser().then(response => {
          this.data = response.data
        })
      },
      toEdit(){
        if (this.editForm.passwordOld !== '' && this.editForm.passwordNew && this.editForm.passwordNews2 !== '') {
          if (this.editForm.passwordNew !== this.editForm.passwordNews2) {
            this.$message({
              message: '新密码不相同',
              type: "warning",
              duration: 600
            });
          }
        } else {
          this.$message({
            message: '密码不能为空',
            type: "warning",
            duration: 600
          });
          return
        }
        updatePassword({oldPassword:this.editForm.passwordOld,newPassword:this.editForm.passwordNew}).then(response=>{
          this.$message({
            message: '修改成功',
            type: "success",
            duration: 600
          });
          this.initData()
          this.isEdit=false
        })
      },
      toEditInfo(){
        if (this.data.name!==''){
            updateUser({name:this.data.name,mobile:this.data.mobile}).then(response=>{
              this.$message({
                message: '修改成功',
                type: "success",
                duration: 600
              });
            })
            this.initData()
            this.isEditInfo=false
        }else {
          this.$message({
            message: '姓名不能为空',
            type: "warning",
            duration: 600
          });
        }
      }
    }
  }
</script>
