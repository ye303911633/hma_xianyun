<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="checkPassword">
      <el-input placeholder="确认密码" type="password" v-model="form.checkPassword"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
      /* 
            rule 规则 
            value 输入框的值
            callback 回调
        */
      const validatePass = (rules, value, callback) => {
          if(value === ''){
              callback(new Error('请输入密码'))
          }else{
              if(this.form.checkPass !== ''){
                  this.$refs.form.validateField('check')
              }
              callback()
          }
      }

      const validateCheckPass = (rules, value, callback)=>{
          if(value === ''){
              callback(new Error('请再次输入密码'))
          }else if(value !== this.form.password){
              callback(new Error('两次密码不一致!'))
          }else{
              callback()
          }
      }

      const validateUsername = (rules, value, callback)=>{
          if(value === ''){
              callback(new Error('请输入手机号!'))
          }else if(/^1[3-9][0-9]{9}$/.test(value) === false){
              callback(new Error('手机格式错误!'))
          }else{
              callback()
          }
      }
    return {
      // 表单数据
      form: {
        username: "",
        password: "",
        nickname: "",
        captcha: "",
        checkPassword: ""
      },
      // 表单规则
      rules: {
        username: [
          { validator: validateUsername, trigger: "blur" }
        ],
        captcha: [
            { required: true, message: "请输入验证码", trigger: "blur" }
        ],
        nickname: [
            { required: true, message: "请输入昵称", trigger: "blur" }
        ],
        password: [
            // validator是验证的函数，输入框失去焦点时候触发函数执行
            { validator: validatePass, trigger: 'blur' }
        ],
        checkPassword: [
            { validator: validateCheckPass, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    // 发送验证码
    handleSendCaptcha() {
        if(this.form.username === ''){
            return;
        }

        this.$store.dispatch('user/sendCaptcha', this.form.username).then(res=>{
            this.$message.success('模拟验证码：000000')
        })
    },

    // 注册
    handleRegSubmit() {
        // console.log(this.form);
        // 判断表单全部验证是否成功
        this.$refs.form.validate(valid=>{
            if(valid){
                const {checkPassword, ...data} = this.form
                this.$store.dispatch('user/register', data).then(res=>{
                    this.$message.success('注册成功!')
                    this.$router.push('/')
                })                
            }
        })
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>