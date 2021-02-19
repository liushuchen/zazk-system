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
        <div class="content-box">
          <!--左侧菜单-->
          <LeftListCom :data-list="leftList"/>
          <div style="display: flex;flex-direction: column">
            <div style="margin-bottom: 10px">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: item.url }"
                                    :key="key"
                                    v-for="(item,key) in breadcrumbList">
                  {{key ==0?'当前位置:'+item.name:item.name}}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <!-- 管理团队 -->
            <PersonnelCom :data-list="rightList" v-if="position == 1"/>
            <PersonnelCom :data-list="rightList" v-if="position == 2"/>
            <PersonnelCom :data-list="rightList" v-if="position == 3"/>
            <PersonnelCom :data-list="rightList" v-if="position == 4"/>
            <PersonnelCom :data-list="rightList" v-if="position == 5"/>
            <MediaCoverage v-if="position == 6"/>
            <MediaCoverage v-if="position == 7"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PersonnelCom from '@/views/website/components/PersonnelCom'
  import MediaCoverage from '@/views/website/components/MediaCoverage'

  export default {
    name: 'Research',
    components: { MediaCoverage, PersonnelCom },
    watch: {
      $route() {
        this.position = this.$route.params.position
      }
    },
    data() {
      return {
        rightList: [
          {
            name: '党组书记，副主任',
            imageList: [
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' }
            ]
          },
          {
            name: '党组书记，副主任',
            imageList: [
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' }
            ]
          },
          {
            name: '党组书记，副主任',
            imageList: [
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' },
              { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', nickName: '张国荣' }
            ]
          }
        ],
        breadcrumbList: [
          {
            name: '调查研究', url: '/research/1'
          }, {
            name: '顾问委员会', url: '/research/1'
          }
        ],
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
        let position = index + 1
        this.$store.dispatch('website/changeMenuIndex', '/research/' + position)
        this.$router.push({ name: 'Research', params: { position: position } })
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
