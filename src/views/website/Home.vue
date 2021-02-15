<template>
  <div class="carousel">
    <el-carousel
      trigger="click"
      :autoplay="false"
      arrow="always"
      height="800px"
    >
      <el-carousel-item v-for="(item,key) in bannerList" :key="key">
        <el-image
          fit="cover"
          :src="item.filePrefix+item.fileUrl"
          @click="clickBanner(item)"
        >
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
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
          jumpType: 1,
          jumpParam: 'https://www.baidu.com',
          fileUrl: 'zazk/banner/1.png',
          filePrefix: 'https://file.httdmall.com/'
        }, {
          jumpType: 2,
          jumpParam: 'https://www.baidu.com',
          fileUrl: 'zazk/banner/2.png',
          filePrefix: 'https://file.httdmall.com/'
        }, {
          jumpType: 3,
          jumpParam: '/about?position=3',
          fileUrl: 'zazk/banner/3.png',
          filePrefix: 'https://file.httdmall.com/'
        }, {
          jumpType: 1,
          jumpParam: '/about?position=3',
          fileUrl: 'zazk/banner/4.jpeg',
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
    height: 1000px;
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
