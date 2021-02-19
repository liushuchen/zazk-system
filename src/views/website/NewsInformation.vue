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
            <MediaCoverage v-if="position==2"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MediaCoverage from '@/views/website/components/MediaCoverage'

  export default {
    name: 'NewsInformation',
    components: { MediaCoverage },
    watch: {
      $route() {
        this.position = this.$route.params.position
      }
    },
    data() {
      return {
        breadcrumbList: [
          {
            name: '新闻动态', url: '/newsInformation/1'
          }, {
            name: '智库动态', url: '/newsInformation/1'
          }
        ],
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
