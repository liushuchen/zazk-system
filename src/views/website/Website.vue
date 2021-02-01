<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./../../assets/website/top_logo.png" alt/>
        </div>
        <el-menu
          :default-active="menuIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
          @open="handleOpen"
          @close="handleClose"
        >
          <!--首页-->
          <el-menu-item index="/home">首页</el-menu-item>
          <!--新闻动态-->
          <el-submenu index="/newsInformation">
            <template slot="title">
              <a @click="toIndex('/newsInformation?position=1')">新闻动态</a>
            </template>
            <el-menu-item index="/newsInformation?position=1">智库动态</el-menu-item>
            <el-menu-item index="/newsInformation?position=2">媒体报道</el-menu-item>
          </el-submenu>
          <!--调查研究-->
          <el-submenu index="/research">
            <template slot="title">
              <a @click="toIndex('/research?position=1')">
                调查研究
              </a>
            </template>
            <el-menu-item index="/research?position=1">顾问委员会</el-menu-item>
            <el-menu-item index="/research?position=2">学术专家委员会</el-menu-item>
            <el-menu-item index="/research?position=3">咨询专家委员会</el-menu-item>
            <el-menu-item index="/research?position=4">研究员</el-menu-item>
            <el-menu-item index="/research?position=5">助理研究员</el-menu-item>
            <el-menu-item index="/research?position=6">研究报告</el-menu-item>
            <el-menu-item index="/research?position=7">智库观点</el-menu-item>
          </el-submenu>
          <!--合作交流-->
          <el-submenu index="/cooperation">
            <template slot="title">
              <a @click="toIndex('/cooperation?position=1')">
                合作交流
              </a>
            </template>
            <el-menu-item index="/cooperation?position=1">合作交流</el-menu-item>
            <el-menu-item index="/cooperation?position=2">合作单位</el-menu-item>
            <el-menu-item index="/cooperation?position=3">经典案例</el-menu-item>
          </el-submenu>
          <!--问矿中国-->
          <el-submenu index="/askChina">
            <template slot="title">
              <a @click="toIndex('/askChina?position=1')">
                问矿中国
              </a>
            </template>
            <el-menu-item index="/askChina?position=1">组委会</el-menu-item>
            <el-menu-item index="/askChina?position=2">专项活动</el-menu-item>
            <el-menu-item index="/askChina?position=3">视频团队</el-menu-item>
            <el-menu-item index="/askChina?position=4">《矿业三人谈》</el-menu-item>
          </el-submenu>
          <!--关于我们-->
          <el-submenu index="/about">
            <template slot="title">
              <a @click="toIndex('/about?position=1')">
                关于我们
              </a>
            </template>
            <el-menu-item index="/about?position=1">管理团队</el-menu-item>
            <el-menu-item index="/about?position=2">智库简介</el-menu-item>
            <el-menu-item index="/about?position=3">组织机构</el-menu-item>
            <el-menu-item index="/about?position=4">联系信息</el-menu-item>
          </el-submenu>
        </el-menu>
        <!--搜索框-->
        <el-input
          style="width: 230px;position: absolute;right: 30px;padding: 10px;height: 40px;"
          placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </el-main>
      <div class="footer" v-show="isShow">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>联系我们</p>
              <span>邮箱：ZAI@zazk.org.cn</span>
              <span>电话：021-55802368</span>
              <span>地址：广州市天河区黄埔大道中199号整栋(部位:8层801-804)(仅限办公)</span>
            </li>
          </ul>
          <img src="./../../assets/img/ercode.png" alt/>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Website',
    data() {
      return {
        router: true,
        menuIndex: this.$store.getters.menuIndex,
        isShow: this.$store.getters.menuIndex != '/home'
      }
    },
    watch: {
      '$store.getters.menuIndex'() {
        this.menuIndex = this.$store.getters.menuIndex
        this.isShow = this.menuIndex != '/home'
      }
    },
    created() {
      this.$store.dispatch('website/changeMenuIndex', this.$route.fullPath)
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log('handleOpen', key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log('handleClose', key, keyPath)
      },
      handleSelect(key) {

        this.$store.dispatch('website/changeMenuIndex', key)
      },
      toIndex(location) {
        this.$store.dispatch('website/changeMenuIndex', location)
        this.$router.push(location)
      }
    }
  }
</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .el-header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 1240px;
    margin: 0 auto;
    //background-color: #fff;

    .logo {
      width: 280px;
      padding: 0px;

      img {
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
      }
    }
  }

  .el-main {
    padding: 0 !important;
  }

  .footer {
    width: 100%;
    height: 216px;
    overflow: hidden;
    background-color: #14679f;

    &-content {
      width: 1240px;
      margin: 0 auto;
      padding-top: 20px;
      display: flex;
      justify-content: space-between;

      .content-nav {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;

        li {
          display: flex;
          flex-direction: column;
          padding: 0 20px;
          //justify-content: center;
          align-items: flex-start;

          p {
            font-size: 20px;
            color: #d4edff;
            padding: 10px 0;
          }

          span {
            color: #f7f7f7;
            font-weight: 300;
            padding: 5px 0;
          }
        }
      }

      img {
        width: 170px;
        height: 170px;
        padding: 10px;
      }
    }

    .copyright {
      height: 30px;
      background: #125688;

      span {
        color: #fff;
        line-height: 30px;
      }
    }
  }
</style>
