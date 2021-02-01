<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/cooperation?position=1' }">合作交流</el-breadcrumb-item>
      <el-breadcrumb-item v-if="position == 1">合作交流</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 2">合作单位</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 3">经典案例</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'Cooperation',
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
