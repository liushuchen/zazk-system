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
            <el-breadcrumb-item>您当前位置:问矿中国</el-breadcrumb-item>
            <el-breadcrumb-item v-if="position == item.position"
                                v-for="(item,key) in leftList"
                                :key="key"
                                v-text="item.name"/>
          </el-breadcrumb>
        </el-header>
        <div style="background: #fff;padding: 20px;min-height: 600px;">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AskChina',
    watch: {
      $route() {
        this.position = this.$route.params.position
      }
    },
    data() {
      return {
        position: 1,
        leftList: [
          { name: '组委会', position: 1 },
          { name: '专项活动', position: 2 },
          { name: '视频团队', position: 3 },
          { name: '《矿业三人谈》', position: 4 }]
      }
    },
    methods: {
      checkLeft(index) {
        let position = index + 1
        this.$store.dispatch('website/changeMenuIndex', '/askChina/' + position)
        this.$router.push({ name: 'AskChina', params: { position: position } })
      }
    }
  }
</script>

<style scoped>
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
</style>
