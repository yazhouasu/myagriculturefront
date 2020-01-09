<template>
  <div>
    <div class="note" :style="note">
      <el-form :model="regUser" status-icon :rules="rules" ref="regUser" label-width="20px" class="demo-ruleForm login-container">
        <h3>用户注册</h3>
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" prefix-icon="el-icon-unlock" v-model="regUser.username"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="请输入密码" prefix-icon="el-icon-unlock" type="password" v-model="regUser.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item  prop="checkPass">
          <el-input placeholder="请确认密码" prefix-icon="el-icon-unlock" type="password" v-model="regUser.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-row>
            <el-col :span="8">
              <el-radio v-model="regUser.company" label="1" border size=" mini">首农集团</el-radio>
            </el-col>
            <el-col :offset="4" :span="8">
              <el-radio v-model="regUser.company" label="2" border size=" mini">顺鑫农业</el-radio>
            </el-col>

          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button
            style="width:50%; height: 45px; background: #3A825E; font-size:14px; font-family:PingFang SC; color:#fff; border-radius:10px "
            @click="doReg">注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Reg",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.regUser.checkPass !== '') {
            this.$refs.regUser.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regUser.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        regUser: {
          password: '',
          checkPass: '',
          username:'',
          company:''
        },
        rules: {
          username: [
            {required: true, message: "请输入账号", trigger: "blur"},
            {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
            //{ validator: validaePass }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' },
            {required: true, message: "请输入密码", trigger: "blur"},
            {min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur'}
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        note: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + require("../../assets/images/reg.jpeg") + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"
        },

      };
    },
    mounted() {

    },
    methods: {

      doReg: function () {
        let that = this;
        let url = this.websiteUrl + '/agricultureserver/users/reg2';
        this.axios.post(url, this.regUser)
          .then(function (response) {
            if (response.data.code == 200) {
              console.log("注册成功");
              window.location.href = '/login';
            } else {
              that.$message({
                message: response.data.msg,
                type: 'error'
              })
            }
          }).catch(function (error) {
          that.$message({
            message: '注册异常',
            type: 'error'
          })
        })
      }
    }
  }
</script>

<style scoped>
  .login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 10px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 3% 75% auto;
    width: 250px;
    height: 350px;
    padding: 25px 25px 15px 15px;
    background: #F0F8FF;
    border: 5px solid #eaeaea;
    box-shadow: 5px 5px 25px #050101;
  }

</style>
