<template>
  <div style="width: 100%;overflow: hidden;background: #f5f5f5;min-height: 740px;">
    <div style="width: 1200px;margin:30px auto 0;display: flex;overflow: hidden;">
      <!-- 左边 -->
      <div class="left-box" style="min-width: 25%;">
        <div v-for="(item, index) in leftList" :key="index" :class="position-1 == index ? 'line' : ''"
             @click="checkLeft(index)">{{ item.name }}
        </div>
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/research?position=1' }">您当前位置:调查研究</el-breadcrumb-item>
        <el-breadcrumb-item v-if="position == item.position"
                            v-for="(item,key) in leftList"
                            :key="key"
                            v-text="item.name"/>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Research',
    watch: {
      $route() {
        this.position = this.$route.query.position
      }
    },
    data() {
      return {
        position: 1,
        leftList: [
          { name: '顾问委员会', position: 1 },
          { name: '学术专家委员会', position: 2 },
          { name: '咨询专家委员会', position: 3 },
          { name: '研究员', position: 4 },
          { name: '助理研究员', position: 5 },
          { name: '研究报告', position: 6 },
          { name: '智库观点', position: 7 }]
      }
    },
    methods: {
      checkLeft(index) {
        this.position = index + 1
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
