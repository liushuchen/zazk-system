<template>
  <div id="app">
    <el-container>
      <el-header>
        <img src="./../../assets/website/logo.png" class="logo" align="center"/>
        <el-menu
          :default-active="menuIndex"
          mode="horizontal"
          :router="router"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose"
        >
          <!--首页-->
          <el-menu-item index="/home" style="color: #3566ce">首页</el-menu-item>
          <el-submenu :index="item.url"

                      v-for="(item,key) in dataList"
                      :key="key">
            <template slot="title">
              <a @click="toIndex(item.url+'/'+item.subList[0].position)" style="color: #3566ce">
                {{item.title}}
              </a>
            </template>
            <el-menu-item :index="item.url+'/'+i.position"
                          v-for="(i,k) in item.subList"
                          style="background: #3566ce;color: #ffffff;"
                          :key="k">{{i.title}}
            </el-menu-item>

          </el-submenu>
        </el-menu>
        <!--搜索框-->
        <div class="search">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"/>
          </el-input>

        </div>
      </el-header>
      <!--这块是内容-->
      <el-main>
        <div v-if="isBanner">
          <Home></Home>
        </div>
        <div v-else>
          <!-- 左边 -->
          <LeftListCom/>

          <router-view/>
          <FooterCom/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Home from '@/views/website/Home'
  import FooterCom from '@/views/website/components/FooterCom'
  import LeftListCom from '@/views/website/components/LeftListCom'

  export default {
    components: { LeftListCom, FooterCom, Home },
    name: 'Website',
    data() {
      return {
        //是否是首页
        isBanner: true,
        router: true,
        menuIndex: this.$store.getters.menuIndex,
        dataList: [
          {
            title: '新闻动态',
            url: '/newsInformation',
            subList: [
              {
                title: '智库动态',
                position: '1'
              }, {
                title: '媒体报道',
                position: '2'
              }
            ]
          },
          {
            title: '调查研究',
            url: '/research',
            subList: [
              {
                title: '顾问委员会',
                position: '1'
              }, {
                title: '学术专家委员会',
                position: '2'
              }, {
                title: '咨询专家委员会',
                position: '3'
              }, {
                title: '研究员',
                position: '4'
              }, {
                title: '助理研究员',
                position: '5'
              }, {
                title: '研究报告',
                position: '6'
              }, {
                title: '智库观点',
                position: '7'
              }
            ]
          }, {
            title: '合作交流',
            url: '/cooperation',
            subList: [
              {
                title: '合作交流',
                position: '1'
              }, {
                title: '合作单位',
                position: '2'
              }, {
                title: '经典案例',
                position: '3'
              }
            ]
          }, {
            title: '问矿中国',
            url: '/askChina',
            subList: [
              {
                title: '组委会',
                position: '1'
              }, {
                title: '专项活动',
                position: '2'
              }, {
                title: '视频团队',
                position: '3'
              }, {
                title: '《矿业三人谈》',
                position: '4'
              }
            ]
          }, {
            title: '关于我们',
            url: '/about',
            subList: [
              {
                title: '管理团队',
                position: '1'
              }, {
                title: '智库简介',
                position: '2'
              }, {
                title: '组织机构',
                position: '3'
              }, {
                title: '联系信息',
                position: '4'
              }
            ]
          }
        ]
      }
    },
    watch: {
      '$store.getters.menuIndex'() {
        this.menuIndex = this.$store.getters.menuIndex
        this.isBanner = this.menuIndex == '/home'
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

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #3566ce;
  }

  .el-menu-demo {
    color: #3566ce;
  }

  .el-header {
    display: flex;
    align-content: center;
    width: 1240px;
    margin: 0 auto;

    .logo {
      text-align: center;
      height: 60px;
      line-height: 60px;
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

  .left-box > div {
    width: 260px;
    margin: 0px 0 13px;
    height: 50px;
    font-size: 18px;
    cursor: pointer;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 6px solid #fff;
    transition: all 0.3s;
  }

  .line {
    border-left: 6px solid #095baf !important;
    color: #095baf !important;
  }

  .leadertext {
    background: #f3f4f6;
    line-height: 28px;
    color: #095baf;
    font-size: 15px;
    font-weight: bold;
    padding: 0 0 0 10px;
    display: block;
    margin-bottom: 20px;
  }

  .el-menu--popup {
    background: #3566ce;
  }

  .el-menu-item {

  }
</style>
