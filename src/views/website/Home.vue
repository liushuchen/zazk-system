<template>
  <div>
    <el-carousel
      trigger="click"
      height="800px"
      :autoplay="false"
      arrow="always"
    >
      <el-carousel-item class="carousel" v-for="(item,key) in bannerList"
                        :key="key">
        <img :src="item.filePrefix+item.fileUrl"
                  @click="clickBanner(item)"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        loading: true,
        bannerList: [{
          jumpType: 2,
          jumpParam: 'http://zazk.httdmall.com/content/c_001.html',
          fileUrl: 'zazk/banner/2.png',
          filePrefix: 'https://file.httdmall.com/'
        }, {
          jumpType: 2,
          jumpParam: 'http://zazk.httdmall.com/content/c_002.html',
          fileUrl: 'zazk/banner/1.png',
          filePrefix: 'https://file.httdmall.com/'
        }, {
          jumpType: 2,
          jumpParam: 'http://zazk.httdmall.com/content/c_003.html',
          fileUrl: 'zazk/banner/4.jpeg',
          filePrefix: 'https://file.httdmall.com/'
        }, {
          jumpType: 2,
          jumpParam: 'http://zazk.httdmall.com/content/c_004.html',
          fileUrl: 'zazk/banner/3.png',
          filePrefix: 'https://file.httdmall.com/'
        }]
      }
    },
    methods: {
      clickBanner(item) {
        if (item.jumpType === 0) {
          // 点击没有反应
        } else if (item.jumpType === 1) {
          // 点击内部打开H5页面
        } else if (item.jumpType === 2) {
          // 点击打开外部H5页面
          this.$confirm('您已离开中安智库网站,即将打开第三方页面', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // 点击确定,打开第三方页面
            window.open(item.jumpParam, '_blank')
          }).catch(() => {
            // 点击取消,不做处理
          })
        } else if (item.jumpType === 3) {
          this.$store.dispatch('website/changeMenuIndex', item.jumpParam)
          // 点击打开路由页面
          this.$router.push(item.jumpParam)
        } else {
          this.$message('点击跳转的类型不存在')
        }
      }
    }
  }
</script>

<style scoped>
  .carousel {
    width: 100%;
  }
  .carousel img {
    height: 800px;
    width: 100%;
  }
</style>
