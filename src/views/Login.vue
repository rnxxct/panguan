<template>
  <div class="back">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">欢迎访问判官阅卷系统</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <!--
          <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      -->
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2"
                   :loading="this.$store.state.loading">登录
        </el-button>
        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  //import NProgress from 'nprogress'
  import {loginByUserName} from '@/api/login'
  export default {
    data() {
      return {
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            //{ validator: validaePass }
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    created(){
      var mb = this.myBrowser();
      if (mb !== 'Chrome' && mb !== 'Chromium') {
        alert("您现在使用的不是Chrome阅览器，可能会出现未知问题，建议请使用Chrome阅览器!")
      }
    },
    methods: {
      myBrowser(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (isOpera) {
          return "Opera"
        }
        ; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
          return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1) {
          return "Chrome";
        }
        if (userAgent.indexOf("Safari") > -1) {
          return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
          return "IE";
        }
      },
      isChromeBrowser(){
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf("Chrome") > -1) {
          return "Chrome";
        } else {
          return ''
        }
        if (userAgent.indexOf('Chromium' > -1)) {
          return "Chromium";
        } else {
          return ''
        }
      },
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true;
            this.requestLogin();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      requestLogin(){
        loginByUserName(this.ruleForm2.account, this.ruleForm2.checkPass).then(data => {
            if (data.code == 200) {
              this.$message({
                message: '登陆成功',
                type: "success",
                duration: 600
              });
              /*将token放入sessionStorage*/
              sessionStorage.setItem("userToken", data.data.token);
              sessionStorage.setItem("role", data.data.role)
              this.$router.push('/scoreAnalysis/tests');
            } else {
              this.$message({
                message: '用户名或密码错误',
                type: "error",
                duration: 600
              });
              this.logining = false;
            }
          }
        );
      },
    }
  }
</script>

<style lang="scss" scoped>
  .back {
    position: absolute;
    padding: 0px;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background: rgba(43, 57, 76, 1)
  }

  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #435776;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #fff;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
