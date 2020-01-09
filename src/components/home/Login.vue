<template>

  <!--背景图-->

  <div class="note" :style="note">
    <!--login框，表单+tab标签页的组合-->

    <el-form :model="account" :ref="account" :rules="rules" label-width="20px" class="demo-ruleForm login-container">

      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-user-solid" type="text" v-model="account.username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-unlock" type="password" v-model="account.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-row>
          <el-col :span="12">
            <el-input prefix-icon="el-icon-arrow-right" v-model="account.validateCode" placeholder="验证码"></el-input>
          </el-col>
          <el-col :span="12">
            <img style="cursor: pointer" title="换一张" :src="randomCodeUrl" @click="changeRandomCode">
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button
          style="width:50%; height: 45px; background: #3A825E; font-size:14px; font-family:PingFang SC; color:#fff; border-radius:10px "
          @click="doLogin">登录
        </el-button>
        <div style="font-size: 10px;text-align: right;color: #9d9d9d">还没有账号，点击<a href="/reg" style="color: red;font-size: 13px">注册</a></div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        note: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + require("../../assets/images/login.png") + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"
        },
        account: {
          username: "",
          password: "",
          validateCode: ''
        },
        rules: {
          username: [
            {required: true, message: "请输入账号", trigger: "blur"},
            {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
            //{ validator: validaePass }
          ],
          password: [
            {required: true, message: "请输入密码", trigger: "blur"},
            {min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur'}
            //{ validator: validaePass2 }
          ]
        },
        randomCodeUrl: '',//图片验证码的值
        token: '',//浏览器生成的令牌
        loginSuccessUser: {}//登陆成功的用户对象
      }
    },
    mounted() {
      this.changeRandomCode();
    },
    methods: {
      doLogin: function () {
        let url = this.websiteUrl + '/agricultureserver/users/login?token=' + this.token;
        let that = this;
        this.axios.get(url, {
          params: {
            username: that.account.username,
            password: that.account.password,
            validateCode: that.account.validateCode
          }
        }).then(function (response) {
            if (response.data.code == 200) {
              that.loginSuccessUser = response.data.data;
              //保存用户资料到localStorage;
              localStorage.setItem("www.agriculture.com", JSON.stringify(that.loginSuccessUser));
              //页面跳转
              window.location.href = '/content2';
            } else {
              that.$message({
                message: response.data.msg,
                type: 'error'
              });
            }
          }).catch(function (error) {
          that.$message({
            message: '登录失败了！',
            type: 'error'
          });
        })
      },

      //生成token值并返回图片内容
      changeRandomCode: function () {
        const jwt = require('jsonwebtoken');
        let payload = new Date().getTime() + ""; //当前时间的毫秒数
        let secret = 'www.simoniu.com'; //网站的域名
        this.token = jwt.sign(payload, secret);//那你的公钥+私钥，生成唯一token

        this.randomCodeUrl = this.websiteUrl + '/agricultureserver/commons/mathRandomCode?token=' + this.token
      }
    },
  };
</script>

<style>
  .login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 10px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 3% 75% auto;
    width: 250px;
    height: 275px;
    padding: 25px 25px 15px 15px;
    background: #F0F8FF;
    border: 5px solid #eaeaea;
    box-shadow: 5px 5px 25px #050101;
  }
</style>
