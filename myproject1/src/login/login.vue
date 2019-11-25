<template>

  <div class="food-img">
	<el-row class="t">?</el-row><el-row class="t">?</el-row>
	<el-row class="t">?</el-row><el-row class="t">?</el-row>
	<el-row class="t">?</el-row><el-row class="t">?</el-row>
	<el-row class="t">?</el-row><el-row class="t">?</el-row>
    <el-form

      ref="loginForm"
      :model="form"
      :rules="rules"
      label-position="left"
      label-width="90px"
      class="login-box"
    >
      <h3>登入界面</h3>
      <el-radio-group v-model="radio" class="text">
        <el-radio :label="1">用户</el-radio>
        <el-radio :label="2">商家</el-radio>
      </el-radio-group>

      <el-form-item label="用户名" prop="username" class="form-item">
        <el-input
          prefix-icon="el-icon-user"
          placeholder="请输入用户名"
          v-model="form.username"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="form-item">
        <el-input
          type="password"
          prefix-icon="el-icon-key"
          suffix-icon="el-icon-view"
          @keyup.enter.native="onSubmit"
          placeholder="请输入密码"
          v-model="form.password"
          clearable
        ></el-input>
      </el-form-item>

      <el-row>
        <el-button type="warning" class="login-btn" @click="$router.push('/views/views1')">注 册</el-button>
        <el-button type="warning" class="login-btn" @click="onSubmit">登 录</el-button>
      </el-row>

      <el-dialog :visible.sync="dialogVisible" width="30%">
        <span>请检查用户名和密码格式是否正确</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="warning" size="small" @click="dialogVisible=!dialogVisible">确 定</el-button>
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>
<script>
// import jwtDecode from "jwt-decode";
// import { mapMutations } from "vuex";
// import { Dialog, Notification, MessageBox } from "element-ui";

export default {
  data () {
    return {
      radio: 1,
      form: {
        username: '',
        password: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性 blur失去焦点 change内容改变
      rules: {
        username: [
          { required: true, message: '用户名不可为空', trigger: 'blur' },
          { min: 3, max: 10, message: '长度为3到10的字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' },
          { min: 3, max: 10, message: '长度为3到10的字符', trigger: 'blur' }
        ]
      },
      // 对话框显示和隐藏
      dialogVisible: false
    }
  },
  methods: {
    onSubmit () {
      // 为表单绑定验证功能
      // 先通过ref获取dom元素 然后绑定名字：formName 通过validate效验
      this.$refs.loginForm.validate(valid => {
        console.log('onSubmit:-' + this.form.username + this.form.password)
        // 判断表单是否为空 即是否遵从rules   valid=true 或false false表示表单不通过
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          // this.$router.push("/index");
          /*  let url = "";
          if (this.radio === 1) {
            url = "consumer/login";
          } else if (this.radio === 2) {
            url = "shop/login";
          }

          this.$syspost(url, {
            username: this.form.username,
            password: this.form.password
          })
            .then(r => {
              // console.log(r.data)
              // 保存用户信息
              this.saveLoginData(r.data);
              // TODO: 返回前一页 ?
              // this.$router.go(-1)
              this.$router.push("/index");
              location.reload();
            })
            .catch(err => {
              // 报错
              Notification.error({
                title: "系统提示",
                message: "账号或密码错误"
              });
              // 清空用户信息
              this.$db.clear();
            }); */
          if (this.form.username === '123' && this.form.password === '123') {
            this.$message({
              showClose: true,
              message: '登入成功',
              type: 'success'
            })
            // 保存数据到localstrorage中
            this.$db.save('tokens', {uname: this.form.username, upass: this.form.password})
           
            /*
			 // 重新打开一个窗口进行跳转页面
			const { href } = this.$router.resolve({
			   path: '/newcontact'
            })
            window.open(href, '_blank')
			*/
            // 当前页跳转
             this.$router.push('/newcontact')
          } else {
            this.$message.error('账号或密码错误！请重新检查！')
          }
        } else {
          this.dialogVisible = true
          return false
        }
      })
    }
    /* ...mapMutations({
      setToken: "account/setToken",
      setExpireTime: "account/setExpireTime",
      setPermissions: "account/setPermissions",
      setRoles: "account/setRoles",
      setUser: "account/setUser",
      setId: "account/setId",
      setInfo: "account/setInfo"
    }),
    saveLoginData(data) {
      const decode = jwtDecode(data.data);
      // console.log(decode);

      this.setToken(data.data);
      this.setExpireTime(decode.expire_time);
      this.setUser(decode.username);
      this.setPermissions(decode.permission);
      this.setRoles(decode.roles);
      this.setId(decode.id);
      this.setInfo(data.info);

      // console.log(this.$db.get('USER_TOKEN'))
      // console.log(this.$db.get('EXPIRE_TIME'))
      // console.log(this.$db.get('USER'))
      // console.log(this.$db.get('PERMISSIONS'))
      // console.log(this.$db.get('ROLES'))
    },
    /*
      resetForm(loginForm){
        this.dialogVisible = false;
        this.$refs[loginForm].resetFields();
        },

    resetPassword() {
      if (this.radio === 1) {
        this.$router.push("/password_reset/consumer");
      } else {
        this.$router.push("/password_reset/shop");
      }
    } */
  }
}
</script>

<style scoped>
.food-img {
  background-image: url("");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  height: 100%;
}
.login-box {
  border: 2px solid #dcdfe6;
  width: 25%;
  background: rgba(255, 255, 255, 0.7);
  margin: auto auto 140px 35%;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}
.text {
  text-align: center;
  margin: 0 auto 20px auto;
  color: #e7b563;
}
.code {
  color: rgb(64, 158, 255);
  text-align: center;
  cursor: pointer;
}
.form-item {
  margin: 10px 0 20px 0;
}
.login-btn {
  margin: 10px 30px 10px 30px;
}
.login-btn:hover {
  background: rgba(230, 162, 60, 0.7);
}
.sign-btn {
  margin: 10px 30px 10px 30px;
}
.sign-btn:hover {
  background: rgba(255, 255, 255, 0.5);
  color: #000;
}
.t {
  color: rgba(0, 0, 0, 0);
}
</style>
