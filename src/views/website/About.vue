<template>
  <div style="width: 100%;overflow: hidden;background: #f5f5f5;min-height: 740px;">
    <div style="width: 1200px;margin:30px auto 0;display: flex;overflow: hidden;">
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
            <!-- 智库简介 -->
            <AboutUs v-if="position == 2"/>
            <!-- 组织机构 -->
            <OrganizationCom v-if="position == 3"/>
            <!-- 联系信息 -->
            <ContactCom v-if="position == 4"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import OrganizationCom from './components/OrganizationCom.vue'
  import ContactCom from './components/ContactCom.vue'
  import PersonnelCom from '@/views/website/components/PersonnelCom'
  import AboutUs from '@/views/website/components/AboutUs'
  import LeftListCom from '@/views/website/components/LeftListCom'
  import BreadcrumbCom from '@/views/website/components/BreadcrumbCom'

  export default {
    name: 'About',
    components: { BreadcrumbCom, LeftListCom, AboutUs, PersonnelCom, OrganizationCom, ContactCom },
    data() {
      return {
        breadcrumbList: [
          {
            name: '关于我们', url: '/about/1'
          }, {
            name: '管理团队', url: '/about/1'
          }
        ],
        position: 1,
        leftList: [
          { name: '管理团队', position: 1 },
          { name: '智库简介', position: 2 },
          { name: '组织机构', position: 3 },
          { name: '联系信息', position: 4 }
        ],
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
        ]
      }
    },
    watch: {
      $route() {
        this.position = this.$route.params.position
        this.breadcrumbList[1] = { name: this.leftList[this.position - 1].name, url: '/about/' + this.position }
        console.info(' this.breadcrumbList', this.breadcrumbList)
      }
    },
    methods: {
      checkLeft(index) {
        let position = index + 1
        this.$store.dispatch('website/changeMenuIndex', '/about/' + position)
        this.$router.push({ name: 'About', params: { position: position } })

      }
    }
  }
</script>

<style scoped>
  .content-box {
    display: flex;
    background: rgb(245, 245, 245);
    padding: 20px;
    min-height: 600px;
  }

</style>
