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
            <el-breadcrumb-item :to="{ path: '/about?position=1' }">您当前位置：关于我们</el-breadcrumb-item>
            <el-breadcrumb-item v-if="position == item.position"
                                v-for="(item,key) in leftList"
                                :key="key"
                                v-text="item.name"/>
          </el-breadcrumb>
        </el-header>
        <div style="background: #fff;padding: 20px;min-height: 600px;">
          <!-- 管理团队 -->
          <div v-if="position == 1">
            <div v-for="(item, index) in rightList" :key="index">
              <div class="leadertext">{{ item.name }}：</div>
              <div style="display: flex;align-items: center;">
                <div v-for="(item2, index2) in item.list" :key="index2" style="width: 150px;margin: 0 20px;">
                  <el-image fit="cover" style="width: 100%; height: 150px;border-radius: 5px;" :src="item2.url">
                    <div slot="placeholder" class="image-slot">
                      加载中
                      <span class="dot">...</span>
                    </div>
                  </el-image>
                  <div style="text-align: center;margin: 10px 0 20px;">{{ item2.nickName }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 智库简介 -->
          <info v-if="position == 2"/>
          <!-- 组织机构 -->
          <organization v-if="position == 3"/>
          <!-- 联系信息 -->
          <contact v-if="position == 4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import info from './AboutComponents/info.vue'
  import organization from './AboutComponents/organization.vue'
  import contact from './AboutComponents/contact.vue'

  export default {
    name: 'About',
    components: { info, organization, contact },
    data() {
      return {
        position: 1,
        leftList: [
          { name: '管理团队', position: 1 },
          { name: '智库简介', position: 2 },
          { name: '组织机构', position: 3 },
          { name: '联系信息', position: 4 }],
        rightList: [
          {
            name: '党组书记，副主任',
            list: [
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' }
            ]
          },
          {
            name: '党组书记，副主任',
            list: [
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' }
            ]
          },
          {
            name: '党组书记，副主任',
            list: [
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' }
            ]
          }
        ]
      }
    },
    watch: {
      $route() {
        this.position = this.$route.query.position
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
