<template>
  <div style="width: 100%;overflow: hidden;background: #f5f5f5;min-height: 740px;">
    <div style="width: 1200px;margin:30px auto 0;display: flex;overflow: hidden;">
      <!-- 左边 -->
      <div class="left-box" style="min-width: 25%;">
        <div v-for="(item, index) in leftList" :key="index" :class="position-1 == index ? 'line' : ''"
             @click="checkLeft(index)">{{ item.name }}
        </div>
      </div>
      <!-- 右边 -->
      <div style="flex: auto;">
        <el-header style="text-align: right; font-size: 12px;width: 100%;height: 35px;padding: 0;">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/newsInformation?position=1' }">您当前位置:新闻动态</el-breadcrumb-item>
            <el-breadcrumb-item v-if="position == item.position"
                                v-for="(item,key) in leftList"
                                :key="key"
                                v-text="item.name"/>
          </el-breadcrumb>
        </el-header>
        <div style="background: #fff;padding: 20px;min-height: 600px;">
          <div class="document-box">
            <ul v-if="position ==2">
              <li>
                <div class="re_box">
                  <a target="_blank" href="http://zazk.httdmall.com/content/c_001.html" class="titleblack">
                    首届中国矿业法治暨矿业仲裁高峰论坛
                  </a>
                  <span class="date1">2020-10-25 09:08:01</span>
                </div>
              </li>
              <li>
                <div class="re_box">
                  <a target="_blank" href="http://zazk.httdmall.com/content/c_002.html" class="titleblack">
                    “矿业权评估与矿企改革研讨会”在京召开
                  </a>
                  <span class="date1">2020-10-25 09:08:01</span>
                </div>
              </li>
              <li>
                <div class="re_box">
                  <a target="_blank" href="http://zazk.httdmall.com/content/c_003.html" class="titleblack">
                    暨自然资源法治研究中心成立大会议程
                  </a>
                  <span class="date1">2020-10-25 09:08:01</span>
                </div>
              </li>
              <li>
                <div class="re_box">
                  <a target="_blank" href="http://zazk.httdmall.com/content/c_004.html" class="titleblack">
                    企研联手会商矿业权收益评估问题
                  </a>
                  <span class="date1">2020-10-25 09:08:01</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsInformation',
    watch: {
      $route() {
        this.position = this.$route.params.position
      }
    },
    data() {
      return {
        position: 1,
        leftList: [
          { name: '智库动态', position: 1 },
          { name: '媒体报道', position: 2 }
        ],
        html: ``
      }
    },
    methods: {
      checkLeft(index) {
        let position = index + 1
        this.$store.dispatch('website/changeMenuIndex', '/newsInformation/' + position)
        this.$router.push({ name: 'NewsInformation', params: { position: position } })
      }
    }
  }
</script>

<style scoped>
  .titleblack {
    display: block;
    color: #333333 !important;
    width: 600px;
    font-size: 15px;
    float: left;
  }

  .date1 {
    color: #7b7b7b;
    font-size: 14px;
    float: right;
  }

  .re_box {
    line-height: 50px;
  }

  ul {
    list-style: none;
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

  .pagination {
    text-align: right;
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
</style>
