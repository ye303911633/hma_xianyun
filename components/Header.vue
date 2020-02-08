<template>
  <header class="header">
    <el-row type="flex" justify="space-between" class="main">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>

      <!-- 菜单栏 -->
      <el-row type="flex" class="navs">
        <!-- <nuxt-link to="/">首页</nuxt-link>
                <nuxt-link to="/post">旅游攻略</nuxt-link>
                <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>-->
        <nuxt-link
          v-for="(item, index) in tabs"
          :key="index"
          :to="item.path"
          :class="{active:current=== item.path}"
        >{{item.title}}</nuxt-link>
      </el-row>

     <!-- 登录/用户信息  -->
      <el-row type="flex" align="middle">
        <!-- 消息 -->
        <el-dropdown class="message">
          <span class="el-dropdown-link">
            <i class="el-icon-bell"></i>
            消息
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>消息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 如果用户已登录，则显示 用户信息-->
        <el-dropdown v-if="loginStatu" class="account">
          <span class="el-dropdown-link">
            <img :src="$axios.defaults.baseURL+userInfo.defaultAvatar" alt />
            {{ userInfo.nickname }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- 链接 -->
            <el-dropdown-item>
              <nuxt-link to="#">个人中心</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item >
              <div class="logout" @click="handlerLogout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 没有登录，则显示登录/注册 -->
        <nuxt-link to="/user/login" class="login-link" v-else>登录 / 注册</nuxt-link>
      </el-row>
    </el-row>
  </header>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "首页",
          path: "/"
        },
        {
          title: "旅游攻略",
          path: "/post"
        },
        {
          title: "酒店",
          path: "/hotel"
        },
        {
          title: "国内机票",
          path: "/air"
        }
      ],
      current: "/"
    };
  },
  methods: {
     // 退出登录
    handlerLogout() {
      // 删除登录信息,变更到store
      this.$store.commit('user/setUserInfo', {})
    }
  },
  computed: {
    // 登录状态
    loginStatu() {
      if(this.$store.state.user.userInfo.token) {
        this.userInfo = this.$store.state.user.userInfo.user
        return true
      }else {
        return false
      }
      // return this.$store.state.user.userInfo.token 
    }
  },
  watch: {
    $route(a) {
      this.current = a.path;
      console.log(this.current);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  background: #fff;
  border-bottom: 1px #ddd solid;
  box-shadow: 0 3px 0 #f5f5f5;
  box-sizing: border-box;

  .main {
    width: 1000px;
    margin: 0 auto;
  }

  .logo {
    width: 156px;
    padding-top: 8px;

    img {
      display: block;
      width: 100%;
    }
  }

  .navs {
    margin: 0 20px;
    flex: 1;

    a {
      display: block;
      padding: 0 20px;
      height: 60px;
      box-sizing: border-box;

      &:hover,
      &:focus,
      &:active {
        border-bottom: 5px #409eff solid;
        color: #409eff;
      }
    }

    /deep/ .nuxt-link-exact-active {
      background: #409eff;
      color: #fff !important;
    }
  }

// 登录 / 个人信息
  .message {
    margin-right: 15px;
  }
  .account {
    margin-left: 20px;
    img {
      vertical-align: middle;
      border-radius: 50%;
      width: 32px;
      height: 32px;
    }
  }
  .login-link {
    font-size: 13px;
    &:hover {
      color: #409eff;
      text-decoration: underline; 
    }
  }
  /* .message {
    height: 36px;
    line-height: 1;
    cursor: pointer;
    .el-icon-bell {
      margin-right: 2px;
      font-size: 18px;
    }
  } */

  .el-dropdown-link {
    margin-left: 20px;

    &:hover {
      img {
        border-color: #409eff;
      }
    }

    a {
      display: block;
    }

    img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      border: 2px #fff solid;
      border-radius: 50px;
    }
  }

  .account-link {
    font-size: 14px;
    margin-left: 10px;
    color: #666;

    &:hover {
      color: #409eff;
      text-decoration: underline;
    }
  }
}
.active {
  background: #409eff;
  color: #fff !important;
}
</style>
