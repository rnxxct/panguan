<template>
  <section>
    <div class="content nav">
      <div class="logo">
        <img src="../../static/images/logo.png"/>
      </div>
      <div class="contact">
        <img src="../../static/images/tel.png"/>&nbsp;&nbsp;<label class="phone">188-1088-5651</label>
      </div>
    </div>
    <div class="main">
      <div style="position: absolute;height: 100%;width: 1200px;margin:auto;left:0; right:0; top:0; bottom:0;">
        <div class="login">
          <div style="height: 50px;padding: 10px 20px;text-align: center;border-bottom: 1px solid rgb(178, 178, 178)">
            <a href="http://app.jouletek.com:8080/panguan/index.html#/">账号登录</a>
            <a href="http://app.jouletek.com:8080/panguan/index.html#/register">快速注册</a>
          </div>
          <form method="get" style="margin-bottom: 16px;" ref="ruleForm2" :rules="rules2">
            <div class="input_control">
              <input type="text" v-model="ruleForm2.schoolCode" class="from_input" placeholder="学校代码"/>
              <div style="padding-top: 20px;" v-bind:style="style">{{schoolName}}</div>
            </div>
            <div class="input_control">
              <input type="text" v-model="ruleForm2.account" class="from_input" placeholder="请输入用户名/手机号"/>
            </div>
            <div class="input_control">
              <input type="password" v-model="ruleForm2.checkPass" class="from_input" placeholder="请输入密码"/>
            </div>
            <div class="input_checkbox">
              <div style="width: 80%;margin: 0 auto">
                <input type="checkbox" style="display: inline-block; float: left"><span
                style="display: inline-block;font-size: 14px; float: left">记住密码</span>
                <span style="display: inline-block;font-size: 14px;float: right;"><a href="#" @click="forgotPassword">忘记密码?</a></span>
              </div>
            </div>
            <div class="input_control">
              <input id="btn1" type="button" @click="handleSubmit2" value="登 录"/>
            </div>
          </form>
        </div>
      </div>
      <div class="content bg">
        <img src="../../static/images/bgp.jpg" style="right: 150px;position: relative"/>
      </div>
    </div>
    <div class="content footer">
      <div style="margin: 0 auto;text-align: center" class="info">Copyright 2017. 焦耳科技 京ICP备15065089号-1</div>
    </div>
    <!--添加找回密码-->
    <div class="mod-layer-forgot"></div>
    <div class="mod-forgot-dialog-body">
      <div class="forgot-dialog-title">
        <span>手机验证码登录</span>
        <a href="###" @click="handleVerify"></a>
      </div>
      <form method="get" style="margin-bottom: 16px;" ref="ruleForm2" :rules="rules2">
        <div class="input_verify_control">
          <div style="width:90%;margin-left: 0;text-align: left!important;">
            <input type="text" v-model="ruleFormVerify.phoneNumber" class="from_input" placeholder="请输入手机号"/>
          </div>
        </div>
        <div class="input_verify_control message">
          <div style="width: 90%;margin-left: 0;text-align: left!important;">
            <input type="password" v-model="ruleFormVerify.code" style="text-align: left!important;" class="from_input"
                   placeholder="请输入验证码"/>
            <button type="button" id="getPassword" @click="getPassword">获取验证码</button>
          </div>
        </div>
        <div style="padding-top: 0;text-align: left!important;">
          <input id="btn2" style="margin-left: 30px;" type="button" @click="handleSubmit3" value="下 一 步"/>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
  //import NProgress from 'nprogress'
  /*回车事件*/
  import {loginByUserName, loginByCode, getCode} from '@/api/login'
  import {getSchoolNameByCode} from '@/api/school/school'
  export default {
    data() {
      return {
        isLoginVue: true,
        schoolName: '',
        style: {display: 'none'},
        ruleForm2: {
          account: '',
          checkPass: '',
          schoolCode: ''
        },
        ruleFormVerify: {
          phoneNumber: '',
          code: ''
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
      this.ruleForm2.account = this.getCookie('loginName')
      this.ruleForm2.schoolCode = this.getCookie('schoolCode')
      document.onkeyup = (ev => {
        /*按键信息以参数的形式传递进来,为了防止全局起作用，需要判断当前是不是登录页面*/
        var code = ev.charCode || ev.keyCode
        if (code == 13) {
            this.handleSubmit2();
        }
      })
    },
    watch: {
      'ruleForm2.schoolCode': function (val) {
        this.handleChange(val)
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
        /*
         this.$refs.ruleForm2.validate((valid) => {
         if (valid) {
         this.logining = true;
         this.requestLogin();
         } else {
         console.log('error submit!!');
         return false;
         }
         });
         */
        if (_this.ruleForm2.account !== '' && _this.ruleForm2.checkPass !== '') {
          this.requestLogin();
        } else {
          this.$message({
            message: '用户名和密码不能为空',
            type: "warning",
            duration: 600
          });
        }
      },
      requestLogin(){
        loginByUserName(this.ruleForm2.schoolCode, this.ruleForm2.account, this.ruleForm2.checkPass).then(data => {
            if (data.code == 200) {
              /*将token放入sessionStorage*/
              sessionStorage.setItem("userToken", data.data.token);
              sessionStorage.setItem("role", data.data.role)
              if (data.data.state == 1) {
                this.$message({
                  message: '请设置密码',
                  type: "success",
                  duration: 1000
                });
                this.setCookie('schoolCode', this.ruleForm2.schoolCode)
                this.setCookie('loginName', this.ruleForm2.account)
                this.$router.push({path: '/resetPassword', query: {state: data.data.state}})
              } else {
                this.setCookie('schoolCode', this.ruleForm2.schoolCode)
                this.setCookie('loginName', this.ruleForm2.account)
                this.$message({
                  message: '登陆成功',
                  type: "success",
                  duration: 600
                });
                /*清空enter登录监听事件*/
                document.onkeyup = (ev => {
                })
                this.$router.push('/scoreAnalysis/tests/Choose');
              }
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
      forgotPassword(){
        document.getElementsByClassName("mod-layer-forgot")[0].style.display = "block"
        document.getElementsByClassName("mod-forgot-dialog-body")[0].style.display = "block"
        return false
      },
      handleVerify(){
        document.getElementsByClassName("mod-layer-forgot")[0].style.display = "none"
        document.getElementsByClassName("mod-forgot-dialog-body")[0].style.display = "none"
      },
      getPassword(){
        if (this.ruleFormVerify.phoneNumber == '') {
          return false
        }
        getCode(this.ruleFormVerify.phoneNumber).then(response => {
        })
        var countTime = 120;
        document.getElementById("getPassword").style.background = "#f6f6f6;"
        document.getElementById("getPassword").style.color = " #c5c5c5"
        document.getElementById("getPassword").innerHTML = "test"
        document.getElementById("getPassword").disabled = true

        function setTime(val) {
          if (countTime == 0) {
            val.style.backg = "#f7f7f7"
            val.style.color = "#000"
            val.innerHTML = "获取验证码"
            document.getElementById("getPassword").disabled = false
            return false
          } else {
            val.innerHTML = "重新发送(" + countTime + ")"
            countTime--
          }
          setTimeout(function () {
            setTime(val)
          }, 1000)
        }

        setTime(document.getElementById("getPassword"))
      },
      handleSubmit3(){
        if (this.ruleFormVerify.phoneNumber == '' || this.ruleFormVerify.code == '' || this.ruleFormVerify.code == null) {
          this.$message({
            message: '手机和验证码不能为空',
            type: "warning",
            duration: 600
          });
          return
        }
        loginByCode(this.ruleFormVerify.phoneNumber, this.ruleFormVerify.code).then(response => {
          if (response.data.state == 2) {
            sessionStorage.setItem("userToken", response.data.token);
            sessionStorage.setItem("role", response.data.role)
            this.$router.push("/resetPassword")
          }
        })
      },
      setCookie(name, value){
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
      },
      getCookie(name){
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg))

          return unescape(arr[2]);
        else
          return null;
      },
      handleChange(val){
        getSchoolNameByCode({schoolCode: val}).then(response => {
          this.schoolName = response.data
          if (this.schoolName == '' || this.schoolName == null) {
            this.style.display = 'none'
          } else {
            this.style.display = 'block'
          }
        })
      }
    }
  }
</script>
<style type="text/css" scoped>
  a {
    text-decoration: none;
    color: #333;
  }

  .nav {
    height: 70px;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
  }

  .main {
    width: 100%;
    background-color: #e5f3ff;
    position: relative;
  }

  .bg {
    height: 610px;
    text-align: left !important;
  }

  .logo {
    display: inline-block;
    float: left;
  }

  .contact {
    float: right;
    height: 70px;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    font-family: "Microsoft YaHei UI";
  }

  .phone {
    height: 70px;
    line-height: 70px;
    margin: 0 auto;
  }

  .footer {

  }

  .info {
    display: table;
    margin: 0 auto;
    height: 80px;
    line-height: 80px;
    font-family: "Microsoft YaHei UI";
  }

  input[type="text"] {
    -web-kit-appearance: none;
    -moz-appearance: none;
    font-size: 14px;
    height: 35px;
    margin: auto;
    width: 70%;
    border-radius: 4px;
    border: 1px solid rgb(178, 178, 178);
    padding: 10px 5px 10px 32px;
  }

  input[type="password"] {
    -web-kit-appearance: none;
    -moz-appearance: none;
    font-size: 14px;
    height: 35px;
    margin: auto;
    width: 70%;
    border-radius: 4px;
    border: 1px solid rgb(178, 178, 178);
    padding: 10px 5px 10px 32px;
  }

  .input_control {
    width: 300px;
    text-align: center;
    padding-top: 20px;
  }

  .login {
    background-color: #ffffff;
    position: absolute;
    top: 15%;
    right: 0px;
    width: 300px;
    border-radius: 10px;
    z-index: 100;
  }

  .login .input_control:nth-child(1) {
    width: 300px;
    text-align: center;
    padding-top: 30px;
  }

  .login .input_control:nth-child(4) {
    padding-top: 0px;
    padding-bottom: 20px;
  }

  #btn1 {
    -web-kit-appearance: none;
    -moz-appearance: none;
    font-size: 20px;
    height: 50px;
    margin: auto;
    width: 260px;
    border-radius: 4px;
    color: #fff;
    border: 1px solid rgb(178, 178, 178);
    padding: 10px 5px 10px 5px;
    background: rgb(64, 158, 255);
  }

  #btn2 {
    -web-kit-appearance: none;
    -moz-appearance: none;
    font-size: 20px;
    height: 50px;
    width: 260px;
    border-radius: 4px;
    color: #fff;
    border: 1px solid rgb(178, 178, 178);
    padding: 10px 5px 10px 5px;
    background: rgb(64, 158, 255);
  }

  .input_checkbox {
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: #fff;
    padding-top: 20px;
    font-style: normal;
    font-family: "Microsoft YaHei UI";
  }

  .login > div a:nth-child(1) {
    float: left;
    width: 30%;
    height: 60px;
    font-size: 17px;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    font-family: "Microsoft YaHei UI";
    border-bottom: 3px solid rgb(64, 158, 255);
  }

  .login a:nth-child(2) {
    font-size: 17px;
    width: 30%;
    height: 60px;
    line-height: 50px;
    float: right;
    padding-left: 10px;
    padding-right: 10px;
    font-family: "Microsoft YaHei UI";
    /*
        border-bottom: 3px solid rgb(64, 158, 255);;
    */
  }

  .mod-layer-forgot {
    height: 900px;
    width: 100%;
    position: absolute;
    display: none;
    z-index: 999;
    top: 0;
    left: 0px;
    background: #000000;
    opacity: .15;
  }

  .mod-forgot-dialog-body {
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
    z-index: 1000;
    background-color: #fff;
    border: 2px solid #ccc;
  }

  .forgot-dialog-title {
    background-color: #f7f7f7;
    border-bottom: 1px solid #eee;
    font-family: Arial, Helvetica, STHeiti, "宋体";
    font-size: 14px;
    text-align: left;
    margin-bottom: 20px;
  }

  .forgot-dialog-title span {
    color: #333;
    line-height: 45px;
    width: auto;
    font-weight: 700;
    padding-left: 20px;
    font-size: 14px;
    text-align: left;
  }

  .forgot-dialog-title a {
    width: 14px;
    height: 13px;
    position: absolute;
    top: 16px;
    right: 15px;
    background: url("https://passport.baidu.com/static/passpc-base/img/ui/close.png");
    background-position: 0 0;
  }

  .input_verify_control input {
    -web-kit-appearance: none;
    -moz-appearance: none;
    font-size: 14px;
    height: 30px;
    margin-left: 30px;
    width: 70%;
    border-radius: 4px;
    margin-bottom: 30px;
    border: 1px solid rgb(178, 178, 178);
    padding: 10px 5px 10px 20px;
    text-align: left;

  }

  .message input {
    width: 36%;
  }

  .message button {
    -web-kit-appearance: none;
    -moz-appearance: none;
    font-size: 14px;
    height: 50px;
    background: #f7f7f7;
    border-radius: 1px;
    border: 1px solid #ddd;
    margin-left: 10px;
    padding: 10px 20px 10px 20px;
  }

</style>
