<template>
  <div style="width: 100%;overflow: hidden;background: #f5f5f5;min-height: 740px;">
    <div style="width: 1200px;margin:30px auto 0;display: flex;overflow: hidden;">
      <!-- 右边 -->
      <div style="flex: auto;">
        <div class="content-box">
          <!--左侧菜单-->
          <LeftListCom :data-list="leftList" name="NewsInformation" payload="/newsInformation/"/>
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
            <MediaCoverage v-if="position == 2 "/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MediaCoverage from '@/views/website/components/MediaCoverage'
  import LeftListCom from '@/views/website/components/LeftListCom'

  export default {
    name: 'NewsInformation',
    components: { LeftListCom, MediaCoverage },
    watch: {
      $route() {
        this.position = this.$route.params.position
        this.breadcrumbList[1] = {
          name: this.leftList[this.position - 1].name,
          url: '/newsInformation/' + this.position
        }
      }
    },
    mounted() {
      this.position = this.$route.params.position
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
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .content-box {
    display: flex;
    background: rgb(245, 245, 245);
    padding: 20px;
    min-height: 600px;
  }

  ul {
    list-style: none;
  }
</style>
