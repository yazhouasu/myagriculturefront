<template>
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#ffcc00"
        text-color="#fff"
        active-text-color="white"
      >
        <el-menu-item index="1" @click="doContent2">实时数据</el-menu-item>
        <el-menu-item index="2" @click="doContent3">视频监控</el-menu-item>
        <el-menu-item index="3" @click="doContent4">历史数据</el-menu-item>
        <el-menu-item index="4" >设备控制</el-menu-item>
        <el-menu-item index="5" >数据分析</el-menu-item>
        <!--<el-menu-item index="6" v-if="isLogin">欢迎您:{{this.loginSuccessUser.username}}</el-menu-item>-->
        <el-submenu index="6" v-if="isLogin">
          <template slot="title">欢迎您:{{this.loginSuccessUser.username}}</template>
          <el-menu-item index="6-1">个人中心</el-menu-item>
          <el-menu-item index="6-2" @click="outLogin">退出登录</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
  var graceChecker = require("../../assets/js/graceChecker.js");
    export default {
        name: "NavBar",
      data() {
        return {
          activeIndex: '',
          isLogin: false, //判断用户登录状态
          loginSuccessUser:{}
        };
      },
      mounted() {
        this.isLogin = graceChecker.isLogin();
        if (this.isLogin) {
          if (sessionStorage.getItem("www.agriculture.com") != null) {
            this.loginSuccessUser = JSON.parse(sessionStorage.getItem("www.agriculture.com"));
            console.log(this.loginSuccessUser);

          }
          if (localStorage.getItem("www.agriculture.com") != null) {

            this.loginSuccessUser = JSON.parse(localStorage.getItem("www.agriculture.com"));
            console.log(this.loginSuccessUser);

          }
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          console.log("key是："+key);
          console.log("activeIndex1是："+this.activeIndex);
          //this.activeIndex=key;
          console.log("activeIndex2是："+this.activeIndex);
        },
        doContent2(){
          this.$router.replace('/content2')
        },
        doContent3(){
          this.$router.replace('/content3')
        },
        doContent4(){
          this.$router.replace('/content4')
        },

        outLogin: function () {
          if (this.isLogin) {
            if (sessionStorage.getItem("www.agriculture.com") != null) {
              sessionStorage.removeItem("www.agriculture.com");
            }
            if (localStorage.getItem("www.agriculture.com") != null) {
              localStorage.removeItem("www.agriculture.com");
            }
          }

          window.location.href = '/'
        }

      }
    }
</script>

<style scoped>
  .el-menu-demo{
    display: flex;
    justify-content:space-around;

  }
</style>
