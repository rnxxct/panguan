<template>
  <div id="wrapper">
    <div id="head" style="text-align:left">
      <div class="mod-header">
        <img src="../../static/images/logo.png"/>
      </div>
      <ul class="mod-userbar">
        <li>
          <a  href="#" @click="handleToLogin">登录</a>
        </li>
        <li>|</li>
        <li>
          <a href="#" @click="handleToRegister">注册</a>
        </li>
      </ul>
    </div>
    <div id="nav">
      <div class="nav-2">
        <div class="mod-nav clearfix">
          <h1 class="page-type-notab">设置密码</h1>
        </div>
      </div>
    </div>
    <div id="content">
      <div class="mod-forgot" style="text-align: left;">
        <form id="fotgotsel">
          <div class="mod-step-detail p-t30">
            <div class="input_control">
              密码：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
              <input type="password"  v-model="ruleForm2.password" class="from_input" placeholder="请输入密码"/>
            </div>
            <div class="input_control">
              确认密码：
              <input type="password" class="from_input"  v-model="ruleForm2.password2" placeholder="请输入密码"/>
            </div>
            <div v-if="state=='1'" class="input_control">
              手机设置：
              <input type="text" v-model="ruleForm2.phoneNumber" class="from_input" placeholder="请输入手机号"/>
            </div>
            <div style="margin-top: 30px;margin-left: 80px;width: 100%">
              <input id="btn2"  type="button" @click="handleSubmit" value="下 一 步"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import {updatePassword} from '@/api/login.js'
  export default{
      created(){
        this.state = this.$route.query.state
      },
      data(){
          return{
            state:0,
            ruleForm2:{
                phoneNumber:'',
                password:"",
                password2:''
            }
          }
      },
      methods:{
        handleSubmit(ev) {
          var _this = this;
          if (_this.ruleForm2.schoolCode !== '' && _this.ruleForm2.account !== '' && _this.ruleForm2.checkPass !== '') {
            this.handleUpdate();
          } else {
            this.$message({
              message: '用户名和密码不能为空',
              type: "warning",
              duration: 600
            });
          }
        },
        handleUpdate(){
          if (this.ruleForm2.password=='' ){
            this.$message({
              message: '密码不能为空',
              type: "warning",
              duration: 1000
            })
          }
          if (this.ruleForm2.password !== this.ruleForm2.password2) {
            this.$message({
              message: '两次密码不相同!',
              type: "warning",
              duration: 600
            });
            return
          }
          updatePassword(this.ruleForm2.password,this.ruleForm2.phoneNumber).then(response=>{
            this.$router.push('/scoreAnalysis/tests');
          })
        },
        handleToLogin(){
            this.$router.push("/")
            return false
        },
        handleToRegister(){
            this.$router.push("/register")
        }

      }
  }

</script>
<style scoped>
  input[type="text"] {
    -web-kit-appearance: none;
    -moz-appearance: none;
    font-size: 14px;
    height: 35px;
    margin: auto;
    width: 30%;
    border-radius: 4px;
    margin-top: 20px;
    border: 1px solid rgb(178, 178, 178);
    padding: 10px 5px 10px 32px;
  }
  input[type="password"] {
    -web-kit-appearance: none;
    -moz-appearance: none;
    font-size: 14px;
    height: 35px;
    margin: auto;
    width: 30%;
    border-radius: 4px;
    margin-top: 20px;
    border: 1px solid rgb(178, 178, 178);
    padding: 10px 5px 10px 32px;
  }
  #btn2 {
    -web-kit-appearance: none;
    -moz-appearance: none;
    font-size: 20px;
    height: 30px;
    margin: 0 auto;
    width: 30%;
    border-radius: 4px;
    box-sizing: content-box;
    color: #fff;
    border: 1px solid rgb(178, 178, 178);
    padding: 10px 21px 10px 21px;
    background: rgb(64, 158, 255);
  }
  #wrapper{
    font-family: Arial, Helvetica, STHeiti, 宋体;
    background: url("../../static/images/header_bg.png") no-repeat;
  }
  #head{
    width: 980px;
    margin-left: auto;
    margin-right: auto;
    height: 75px;
    z-index: 100;
  }
  .mod-header{
    display: inline;
    font-size: 66px;
  }
  .mod-userbar{
    position: absolute;
    top: 15px;
    right: 20px;
    z-index:300;
    list-style: none;
  }
  .mod-userbar li{
    float: left;
    display: list-item;
    margin: 0 5px;
    color: #ccc;
    height: 24px;
  }
  #nav{
    height: 42px;
    width:100%;
    background: #fafafa;
  }
  .nav-2{
    height: 46px;
    background: url("../../static/images/hdbg.png");
    width:100%;
  }
  .mod-nav{
    position: relative;
    width: 980px;
    margin-left: auto;
    margin-right: auto;
  }
  .clearfix {
    zoom: 1;
  }
  .clearfix:after{
    content: '\20';
    height: 0;
    clear: both;
  }
  .page-type-notab{
    color: #333;
    font-size: 14px;
    font-weight: 700;
    float: left;
    margin-left: 70px;
    line-height: 46px;
    display: inline;
  }
  #content{
    width: 980px;
    margin-left: auto;
    margin-right: auto;
    min-height: 500px;
  }
  .mod-forgot{
    width: 910px;
    margin-left: 70px;
  }
  #mod-forgot{
    position: relative;
  }
  .p-t30{
    padding-top: 30px;
    text-align: left;
  }
  .pass-input-container{
    margin-bottom: 20px;
    position: relative;
  }
</style>
