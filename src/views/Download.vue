<template>
  <section>
    <div class="main">
      <div style="position: absolute;float: right">
        <a href="http://app.jouletek.com:8080/DynamicWebTWAIN14.3.exe">Web扫描驱动</a>
        <br>
        <!--<a href="http://app.jouletek.com:8080/panguan.zip">快速注册</a>-->
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: "Download"
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
