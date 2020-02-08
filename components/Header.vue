<template>
  <div class="headerWrap">
    <el-row type="flex" justify="space-between" align="middle" class="header">
      <div class="logo">
        <img src="/logo.jpg" alt="">
      </div>

      <el-row type="flex" class="nav">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>

      <div style="font-size: 14px;">
        <nuxt-link to="/user/login">登录/注册</nuxt-link>
      </div>
    </el-row>
  </div>
</template>
<script>
  export default {
    data(){
      return {
      }
    },
    methods:{

    }
  }
</script>

<style lang="less" scoped>
  .headerWrap{
    height: 60px;
    background: #fff;
    box-shadow: 0 3px 2px #f6f6f6;
    border-bottom:1px #eee solid;
    .nav{
      flex: 1;
    }
    a{
      margin-left: 20px;
      height: 60px;
      display: inline-block;
      line-height: 60px;
      text-decoration: none;
      color: #000;
      &:hover{
        color: #409eff;
        border-bottom: 3px solid #409eff;
      }
    }
    .header{
      width: 1000px;
      height: 60px;
      margin: 0 auto;
    }
    .logo{
      width: 156px;
      height: 60px;
      display: flex;
      align-items: center;
      img{
        width: 100%;
      }
    }
  }



</style>
