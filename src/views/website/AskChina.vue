<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/askChina?position=1' }">问矿中国</el-breadcrumb-item>
      <el-breadcrumb-item v-if="position == 1">组委会</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 2">专项活动</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 3">视频团队</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 4">《矿业三人谈》</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'AskChina',
    watch: {
      $route() {
        this.position = this.$route.query.position
      }
    },
    data() {
      return {
        position: 1
      }
    }
  }
</script>

<style scoped>

</style>
