<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/newsInformation?position=1' }">新闻动态</el-breadcrumb-item>
      <el-breadcrumb-item v-if="position == 1">智库动态</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 2">媒体报道</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'NewsInformation',
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
